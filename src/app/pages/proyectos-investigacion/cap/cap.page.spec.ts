import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapPage } from './cap.page';

describe('CapPage', () => {
  let component: CapPage;
  let fixture: ComponentFixture<CapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
