import { Component, OnInit } from '@angular/core';
import {JokeService} from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: String = "This is my first joke";
  title = 'Chuck Noris Jokes';

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  private getJoke() {
    this.jokeService.getJoke()
      .subscribe(joke => this.joke = joke);
  }
}
