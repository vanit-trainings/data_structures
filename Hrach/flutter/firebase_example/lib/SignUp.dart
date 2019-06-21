import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SignUp extends StatefulWidget {
  @override
  _SignUpState createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  String _email, _password;
  final GlobalKey<FormState> _globalKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Sign up"),
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
                      validator: (value) {
                        {
                          Pattern pattern =
                              r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
                          RegExp regex = new RegExp(pattern);
                          if (!regex.hasMatch(value) && value.isNotEmpty)
                            return 'Enter Valid Email';
                          else
                            return null;
                        }
                      },
                      onSaved: (mail) {
                        _email = mail;
                      },
                      decoration: InputDecoration(labelText: "Email"),
                    ),
                    TextFormField(
                      autovalidate: true,
                      obscureText: true,
                      validator: (value) {
                        RegExp regex = new RegExp('r[A-Z]{1}[A-Za-z0-9]{7,}');
                        if (!regex.hasMatch(value) && value.isNotEmpty)
                          return 'Enter Valid Password';
                        else
                          return null;
                      },
                      onSaved: (pass) {
                        _password = pass;
                      },
                      decoration: InputDecoration(labelText: "Password"),
                    ),
                    SizedBox(
                      height: 40,
                    ),
                    RaisedButton(
                      splashColor: Colors.greenAccent,
                      onPressed: signUp,
                      child: Text(
                        "Sign up",
                        style: TextStyle(fontSize: 24, color: Colors.lightBlue),
                      ),
                    ),
                  ],
                ),
              )))),
    );
  }
//  List<DocumentSnapshot> l = [];
//  gettingData() {
//    List pass = _passwords;
//    StreamBuilder<QuerySnapshot> build = StreamBuilder<QuerySnapshot>(
//      stream: Firestore.instance.collection('users').snapshots(),
//      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
//       if (snapshot.connectionState == ConnectionState.waiting) {
//         return Center(child: CircularProgressIndicator());
//       }
//       if (snapshot.hasData) {
//         l = snapshot.data.documents;
//         print('hasData');
//       }
//      // return Text(snapshot.data.documents[0]['password']);
//      return Text('');
////        switch (snapshot.connectionState) {
////          case ConnectionState.waiting:
////          return new Center(child: new CircularProgressIndicator());
//////            print('');
////
////          default: ()
//////            snapshot.data.documents.map((DocumentSnapshot document) {
//////              _passwords.add(document['password']);
//////              return ListView(
//////              children:[
//////                ListTile(
//////                  title: Text(document['password']))
//////            ]);
//////        });
////        //print(_passwords.toString() + ' 000 ');
////      }
//      }
//    );
//    return build;
//  }

  Future<void> signUp() async {
    final _formState = _globalKey.currentState;
    if (_formState.validate()) {
      _formState.save();
      try {
        FirebaseUser user = await FirebaseAuth.instance
            .createUserWithEmailAndPassword(email: _email, password: _password);
//        //TO DO
//        var snap = await Firestore.instance.collection('users').getDocuments();
//        print('eeeeeeeeeeee');
//
//        var snap1 = Firestore.instance.collection('users');
//        var l = snap1.where('createDate', isLessThan: 100).limit(10);
//
//
//        for (int i = 0; i < snap.documents.length; ++i) {
//          _passwords.add(snap.documents[i].data['password']);
//
//        }
//        print(snap);
//
//        await Future.delayed(const Duration(seconds: 10), (){});
//        setState(() {});
//
//        print(_passwords.toString() + ' 000 ');
//        await Future.delayed(const Duration(seconds: 10), (){});
        await user.sendEmailVerification();

        Navigator.of(context).pop();
      } catch (error) {
        print(error.message.toString() + "aaaaaa");
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                content: Text(error.message),
                actions: <Widget>[
                  FlatButton(
                      child: Text('OK'),
                      onPressed: () {
                        Navigator.of(context).pop();
                      })
                ],
              );
            });
      }
    }
  }
}
