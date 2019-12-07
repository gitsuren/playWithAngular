import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Joke} from '../models';
import {JokesService} from '../services';

@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.css']
})
export class JokeCardListComponent implements OnInit {

  jokes$: Observable<Joke[]>;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokes$ = this.jokesService.getJokes();
  }

  refreshJokes() {
    this.jokes$ = this.jokesService.getJokes();
  }

}
