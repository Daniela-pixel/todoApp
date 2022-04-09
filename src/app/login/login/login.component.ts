import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../post.service";
import {Subscription} from "rxjs";
import {IPost} from "../../IPost";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginFG: FormGroup;
  postsSubsctiption!: Subscription;
  posts: IPost[] = [];

  constructor(private postService: PostService, private fb: FormBuilder, private authS: AuthService, private router: Router, private httpClient: HttpClient) {
    this.loginFG = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  //   if(this.authS.isLoggedIn()){
  //     this.router.navigate(['homepage/home']);
  //   }
  }

  // login(): void{
  //   if(this.loginFG.valid){
  //     this.authS.login(this.loginFG.value).subscribe(
  //       (result) => {
  //         this.router.navigate(['homepage/home']);
  //       },
  //       (err: Error)=>{
  //         alert(err.message);
  //       }
  //     )
  //   }
  // }
  login(): void {
    this.postsSubsctiption = this.postService.getPosts().subscribe(data => {
      this.posts = data;
      for(let post of this.posts){
        if(this.loginFG.value.email === post.email && this.loginFG.value.password === post.password){
          this.authS.login(post.id).subscribe((result) => {
            this.router.navigate(['homepage/home']);
          })
          console.log(this.posts);
          console.log(post.id);
        }
      }
    });
    // this.httpClient.get('https://todo-app-8e04a-default-rtdb.firebaseio.com/users.json'
    // ).subscribe(users => {
    //   console.log(users);
    // });

  }

  ngOnDestroy() {
    this.postsSubsctiption && this.postsSubsctiption.unsubscribe();
  }

}
