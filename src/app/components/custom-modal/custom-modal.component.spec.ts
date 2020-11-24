import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomModalComponent } from './custom-modal.component';

describe('CustomModalComponent', () => {
  let component: CustomModalComponent;
  let fixture: ComponentFixture<CustomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
