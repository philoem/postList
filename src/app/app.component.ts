import { Component } from '@angular/core';

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
   
  }

  
  

}
