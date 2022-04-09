import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "./IPost";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<{[id: string]: IPost}>
    ('https://todo-app-8e04a-default-rtdb.firebaseio.com/users.json'
    ).pipe(map(posts =>{
        let postsData: IPost[] = [];
        for(let id in posts){
          postsData.push({...posts[id], id});
        }
        return postsData;
    }));
  }
}
