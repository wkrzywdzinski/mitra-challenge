import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedeventsComponent } from './featuredevents.component';

describe('FeaturedeventsComponent', () => {
  let component: FeaturedeventsComponent;
  let fixture: ComponentFixture<FeaturedeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
