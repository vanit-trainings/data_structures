import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_database/firebase_database.dart';
import 'dart:core';

import 'SignIn.dart';

class Home extends StatefulWidget {
  const Home({Key key, @required this.user}) : super(key: key);
  final FirebaseUser user;
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  void initState() {
    super.initState();
    getData();
  }

  getData() {}

  signOut() async {
    // await FirebaseAuth.instance.signOut();
    Navigator.pushReplacement(
        context, MaterialPageRoute(builder: (context) => SignIn()));
  }

  time() {
    var moonLanding = DateTime.fromMillisecondsSinceEpoch(widget.user.metadata.creationTimestamp);
    String result = moonLanding.year.toString() + '-' + moonLanding.month.toString() + '-' + moonLanding.day.toString();
    return Text(result);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          actions: <Widget>[
            IconButton(
                icon: Icon(
                  Icons.exit_to_app,
                  color: Colors.white,
                ),
                onPressed: signOut),
            time(),
            //Text(widget.user.metadata.creationTimestamp.toString()),
          ],
        ),
        body: GetData());
  }
}

class GetData extends StatelessWidget {
  gettingData() {
    StreamBuilder<QuerySnapshot> build = StreamBuilder<QuerySnapshot>(
      stream: Firestore.instance.collection('users').snapshots(),
      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
        switch (snapshot.connectionState) {
          case ConnectionState.waiting:
            return new Center(child: new CircularProgressIndicator());
          default:
            return ListView(
                children:
                    snapshot.data.documents.map((DocumentSnapshot document) {
              return ListTile(
                title: Text(document['email']),
              );
            }).toList());
        }
      },
    );
    return build;
  }

  @override
  Widget build(BuildContext context) {
    return gettingData();
  }
}
