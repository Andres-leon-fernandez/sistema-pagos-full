import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemple } from './admin-temple';

describe('AdminTemple', () => {
  let component: AdminTemple;
  let fixture: ComponentFixture<AdminTemple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTemple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTemple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
