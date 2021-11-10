import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDaventureComponent } from './ngx-daventure.component';

describe('NgxDaventureComponent', () => {
  let component: NgxDaventureComponent;
  let fixture: ComponentFixture<NgxDaventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDaventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDaventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
