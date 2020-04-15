import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetHourlyRatesPage } from './set-hourly-rates.page';

describe('SetHourlyRatesPage', () => {
  let component: SetHourlyRatesPage;
  let fixture: ComponentFixture<SetHourlyRatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetHourlyRatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetHourlyRatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
