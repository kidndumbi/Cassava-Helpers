import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalComponent } from './my-modal.component';
import { CasModalService, ModalDATA } from 'cassava-helpers';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalComponent ],
      providers:[CasModalService, ModalDATA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
