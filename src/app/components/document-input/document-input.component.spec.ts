import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { DocumentInputComponent } from './document-input.component';

describe('DocumentInputComponent', () => {
  let component: DocumentInputComponent;
  let fixture: ComponentFixture<DocumentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Agrega FormsModule aquí
      declarations: [DocumentInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
