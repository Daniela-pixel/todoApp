import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  joinFG: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.joinFG = this.fb.group({
      name: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.httpClient
      .post('https://todo-app-8e04a-default-rtdb.firebaseio.com/users.json', this.joinFG.value)
      .subscribe(
        response => {
          // console.log(response);
          this.joinFG.reset();
          this.router.navigate(['login/login']);
        });
  }
}
