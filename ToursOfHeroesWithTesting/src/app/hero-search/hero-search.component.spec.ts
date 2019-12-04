import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from '../hero.service';
import { HeroSearchComponent } from './hero-search.component';
import {RouterModule} from '@angular/router';

// fdescribe('HeroSearchComponent', () => { ## with fdescribe = it will just focus on this describe block
describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],

      //you can bring in main router modele from PROD code as below and it should pass the test as well
      //imports: [ RouterModule.forRoot(routes) ],
      //but it is costly as it can bring other modules which is not meant for this test - use RouterTestingModule
      imports: [RouterTestingModule.withRoutes([])],
      //JASMINE makes it easy to get the mock HEROService
      providers: [
        { provide: HeroService, useValue: jasmine.createSpyObj<HeroService>(['']) }
        // {provide: HeroService, useValue: jasmine.createSpyObj('heroSvc', [''])}
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
