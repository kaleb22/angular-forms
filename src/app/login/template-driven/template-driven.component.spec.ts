import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { LoginService } from './../login.service';
import { TemplateDrivenComponent } from './template-driven.component';

describe('TemplateDrivenComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenComponent],
      providers: [LoginService, provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
