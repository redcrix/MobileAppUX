import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewExperiencePage } from './add-new-experience.page';

describe('AddNewExperiencePage', () => {
  let component: AddNewExperiencePage;
  let fixture: ComponentFixture<AddNewExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
