import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGenerosComponent } from './cadastro-generos.component';

describe('CadastroGenerosComponent', () => {
  let component: CadastroGenerosComponent;
  let fixture: ComponentFixture<CadastroGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
