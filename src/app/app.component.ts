import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title:'Mon premier post',
      status: '',
      loveIts: 0
    },
    {
      title:'Mon deuxième post',
      status: '',
      loveIts: 0
    },
    {
      title:'Encore un post',
      status: '',
      loveIts: 0
    }
  ];
  
  constructor() {
    var config = {
      apiKey: "AIzaSyBPRWszjAULS9xz1lhqWL-IJF4buz2FZpw",
      authDomain: "postlist-d1baf.firebaseapp.com",
      databaseURL: "https://postlist-d1baf.firebaseio.com",
      projectId: "postlist-d1baf",
      storageBucket: "postlist-d1baf.appspot.com",
      messagingSenderId: "576660587651"
    };
    firebase.initializeApp(config);
  }
 

  
  

}
