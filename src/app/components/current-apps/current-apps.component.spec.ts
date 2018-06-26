import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAppsComponent } from './current-apps.component';

describe('CurrentAppsComponent', () => {
  let component: CurrentAppsComponent;
  let fixture: ComponentFixture<CurrentAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
