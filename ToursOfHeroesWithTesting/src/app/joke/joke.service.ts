import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor() { }

  getJoke(): Observable<String> {
    return of("THIS IS ANOTHER JOKE");
  }
}
