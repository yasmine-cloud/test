import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterexamenComponent } from './ajouterexamen.component';

describe('AjouterexamenComponent', () => {
  let component: AjouterexamenComponent;
  let fixture: ComponentFixture<AjouterexamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterexamenComponent]
    });
    fixture = TestBed.createComponent(AjouterexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
