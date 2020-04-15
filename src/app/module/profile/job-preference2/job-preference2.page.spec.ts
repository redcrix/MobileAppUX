import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobPreference2Page } from './job-preference2.page';

describe('JobPreference2Page', () => {
  let component: JobPreference2Page;
  let fixture: ComponentFixture<JobPreference2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPreference2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPreference2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
