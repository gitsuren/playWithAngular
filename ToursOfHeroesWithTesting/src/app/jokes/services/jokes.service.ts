import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Joke, JokeResult} from '../models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private API_BASE_URL = 'https://api.icndb.com';

  constructor(private http: HttpClient) { }

  getJokes(): Observable<Joke[]> {
    return this.http.get<JokeResult>(`${this.API_BASE_URL}/jokes/random/5?escape=javascript&limitTo=[nerdy]`).pipe(map(result => result.value));
    // let joke: Joke[] = [
    //   {
    //     id: "506",
    //     joke: "Chuck Norris programs do not accept input."
    //   },
    //   {
    //     id: "505",
    //     joke: "Chuck Norris can spawn threads that complete before they are started."
    //   },
    //   {
    //     id: "497",
    //     joke: "If Chuck Norris writes code with bugs, the bugs fix themselves."
    //   },
    //   {
    //     id: "512",
    //     joke: "Chuck Norris does not need to type-cast. The Chuck-Norris Compiler (CNC) sees through things. All way down. Always."
    //   },
    //   {
    //     id: "487",
    //     joke: "No statement can catch the ChuckNorrisException."
    //   }
    // ];
    // return of(joke);
  }

}
