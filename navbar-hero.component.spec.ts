import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeroComponent } from './navbar-hero.component';

describe('NavbarHeroComponent', () => {
  let component: NavbarHeroComponent;
  let fixture: ComponentFixture<NavbarHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
