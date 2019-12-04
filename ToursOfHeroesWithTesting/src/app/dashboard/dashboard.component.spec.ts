import { of } from 'rxjs';

import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { DashboardComponent } from './dashboard.component';


//In the following test, we did not use the TESTBED and all the dependencies injection
// - no routing Modules and fixture
//since we are just testing the dashboard component, we really do not need to use those extra logic/setup
//but instead just create a component by passing the spy service as "component = new DashboardComponent(svcSpy as any)"
describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(() => {
    const svcSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of(HEROES));

    component = new DashboardComponent(svcSpy as any);
    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should skip the first hero', () => {
    expect(component.heroes.length).toBe(4);
    expect(component.heroes[0]).toBe(HEROES[1]);
  });

});
