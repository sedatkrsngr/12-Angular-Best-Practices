import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit , OnDestroy {

  constructor(private myApi: PostService) {
    console.log("Home constructor çalıştı");
  }

  posts!: Observable<Post[]>;//componentten diğer componente geçerken veri çekmeye devam etmesin diye subscribe
  //olmadan async ile html üzerinden çekeriz


  ngOnInit(): void {
    console.log("Home constructordan sonra çalıştı");
   this.posts = this.myApi.getAllPost();
  }
  ngOnDestroy(): void {
    console.log("Home componentten çıkınca çalıştı");
  }
  trackByFn(index : number,item : Post)
  {
    return index;
  };
}


/** posts:  Post[] = [];


  ngOnInit(): void {
    console.log("Home constructordan sonra çalıştı");
    this.myApi.getAllPost().subscribe((data : Post[]) => {
      this.posts = data;
    });
  } */
