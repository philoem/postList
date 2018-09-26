import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postStatus: string;
  @Input() loveIts: number= 0;
  
  lastUpdate = Date.now();
  
  constructor() { 
    
  }
    

  ngOnInit() {
  }
 
  /** Méthode qui incrémente le bouton "love it"  */
  love() {

    this.loveIts += 1;

  }

  /** Méthode qui décrémente le bouton "no love it"  */
  noLove() {

    this.loveIts -= 1;

  }

  /** Méthode qui change la couleur du titre du post  */
  getColor() {
    
    if(this.loveIts > 0) {

      return this.postStatus = 'green';

    } else if(this.loveIts < 0) {

      return this.postStatus = 'red';
    }

  }


}
