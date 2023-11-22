import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbnGeneratorComponent } from './isbn-generator.component';

describe('IsbnGeneratorComponent', () => {
  let component: IsbnGeneratorComponent;
  let fixture: ComponentFixture<IsbnGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsbnGeneratorComponent]
    });
    fixture = TestBed.createComponent(IsbnGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
