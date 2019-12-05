import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import {JokeService} from './joke.service';
import {Observable, of} from 'rxjs';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fakeJokeService: JokeService;
  let fixture: ComponentFixture<JokeComponent>;
  let realJokeService: JokeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //until here is auto generated by ng cli - however it fails when new http components and/or other components start building
      // and it requires other set up as below (this is trade off)
      declarations: [ JokeComponent ],
      //Trade off and fix the broken test
      imports: [RouterTestingModule],
      providers: [JokeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    realJokeService = TestBed.get(realJokeService);
  });

  // We can even make if more efficient by allowing to test not only TS file but the HTML frontend as well by using TESTBED
  // @beforeEach(()=>{
  //   // fakeJokeService = {
  //   //     getJoke: () =>
  //   //         Observable.of('Fake Joke')
  //   // };
  //   fakeJokeService = jasmine.createSpyObj(fakeJokeService, ['getJoke']);
  //   return fakeJokeService.getJoke.and.return(Observable.of('Fake Joke'));
  //
  //   component = new JokeComponent(fakeJokeService);
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title of "Chuck Noris Jokes"', () => {
    // component = new JokeComponent(null);
    expect(component.title).toEqual('Chuck Noris Jokes')
  });

  //the following test was before using the TEST BED which would bring fake Joke service
  // it('should set the joke property when initialized', () => {
  //   component.ngOnInit();
  //   expect(component.joke).toEqual('Fake Joke');
  //   expect(fakeJokeService.getJoke).toHaveBeenCalled();
  //   expect(fakeJokeService.getJoke).toHaveBeenCalledTimes(1);
  //
  // });

  it('should have a joke bound to the template', function () {
    spyOn(realJokeService, 'getJoke').and.returnValue(of('Fake Joke'));

    fixture.detectChanges();
    const jokeParagraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(jokeParagraph.textContent).toEqual('Fake Joke');
  });
});
