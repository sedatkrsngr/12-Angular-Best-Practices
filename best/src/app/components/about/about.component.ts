import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { Observable, Subject } from 'rxjs';
import { delay,takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  //componentlerden componentlere geçişlerde veri çekmesi dursun diye 2. yöntemi component içinde halledilir
  //diğeri home component ve htmlinde gösterdim
  comments: Comment[] = [];
  unscribeSubject = new Subject();
  constructor(private myApi: CommentService) {
    console.log('About constructor çalıştı');
  }

  ngOnInit(): void {
    console.log('About constructordan sonra çalıştı');
    this.myApi.getAllComment().pipe(delay(0),takeUntil(this.unscribeSubject)).subscribe((data : Comment[]) => {
      //TakeUntil delay ile birlikte kullanılır. Veri gelene jadar bekle demek. Eğer farklı componente geçersek veri alma
      //işlemi ngOnDestroy tarafında bitirilir. 2.Yol da bu şekilde
      this.comments = data;
    });;
  }
  ngOnDestroy(): void {
    console.log('About componentten çıkınca çalıştı');
    this.unscribeSubject.next();
    this.unscribeSubject.complete();
  }
}
