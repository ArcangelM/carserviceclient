import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEditionComponent } from './owner-edition.component';

describe('OwnerEditionComponent', () => {
  let component: OwnerEditionComponent;
  let fixture: ComponentFixture<OwnerEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
