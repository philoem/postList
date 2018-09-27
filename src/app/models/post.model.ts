export class Post {

    date: any;
        
    constructor(public title: string, public content: string) {

        this.date = Date.now();
        
    }

}