import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobViewPage } from './job-view.page';

describe('JobViewPage', () => {
  let component: JobViewPage;
  let fixture: ComponentFixture<JobViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
