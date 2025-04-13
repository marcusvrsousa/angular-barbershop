import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarManagerComponent } from './snackbar-manager.component';

describe('SnackbarManagerComponent', () => {
  let component: SnackbarManagerComponent;
  let fixture: ComponentFixture<SnackbarManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
