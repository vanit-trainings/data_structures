import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import 'SignUp.dart';
import 'home.dart';
import 'dart:core';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  String _email, _password, email = null;
  final GlobalKey<FormState> _globalKey = GlobalKey<FormState>();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Sign In"),
      ),
      body: SingleChildScrollView(
        child: Form(
            key: _globalKey,
            child: Center(
                child: Container(
              padding: EdgeInsets.only(left: 20, right: 20, top: 40),
              child: Column(
                children: <Widget>[
                  TextFormField(
                    autovalidate: true,
                    decoration: InputDecoration(
                      labelText: 'Email',
                    ),
                    validator: (mail) {
                      if (!mail.contains("@") && mail.isNotEmpty) {
                        return "invalid";
                      }
                    },
                    onSaved: (mail) {
                      _email = mail;
                    },
                  ),
                  TextFormField(
                    obscureText: true,
                    autovalidate: true,
                    decoration: InputDecoration(labelText: "Password"),
                    validator: (pass) {
                      if (pass.length < 8 && pass.isNotEmpty) {
                        return "invalid";
                      }
                    },
                    onSaved: (pass) {
                      _password = pass;
                    },
                  ),
                  SizedBox(
                    height: 40,
                  ),
                  RaisedButton(
                    splashColor: Colors.greenAccent,
                    onPressed: signIn,
                    child: Text(
                      "Sign in",
                      style: TextStyle(fontSize: 24, color: Colors.lightBlue),
                    ),
                  ),
                  RaisedButton(
                    splashColor: Colors.greenAccent,
                    onPressed: () {
                      Navigator.push(context,
                          MaterialPageRoute(builder: (context) => SignUp()));
                    },
                    child: Text(
                      "Sign up",
                      style: TextStyle(fontSize: 24, color: Colors.lightBlue),
                    ),
                  ),
                ],
              ),
            ))),
      ),
    );
  }

  void sendData(FirebaseUser user) async {
    await Firestore.instance.collection('users').document(user.uid).setData({
      'email': _email,
      'password': _password,
      'lastPasswords': [_password]
    });
  }

  Future<void> signIn() async {
    final _formState = _globalKey.currentState;

    if (_formState.validate()) {
      _formState.save();

      try {
        FirebaseUser user = await FirebaseAuth.instance
            .signInWithEmailAndPassword(email: _email, password: _password);
        if (user.isEmailVerified) {
          sendData(user);
          Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                  builder: (context) => Home(
                        user: user,
                      )));
        } else {
          showDialog(
              context: context,
              builder: (BuildContext context) => popup("Email is'nt verified"));
        }
      } catch (error) {
        print(error.message);
        showDialog(
            context: context,
            builder: (BuildContext context) =>
                popup('Invalid email or password'));
      }
    }
  }

  Widget popup(String body) {
    return AlertDialog(
      content: Text(body),
      actions: <Widget>[
        FlatButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            })
      ],
    );
  }
}
