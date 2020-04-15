import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobPreference1Page } from './job-preference1.page';

describe('JobPreference1Page', () => {
  let component: JobPreference1Page;
  let fixture: ComponentFixture<JobPreference1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPreference1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPreference1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
