import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html',
  styleUrls: ['./document-input.component.scss']
})
export class DocumentInputComponent implements OnInit {
  documentTypes = [
    { value: 'C', label: 'Cédula de ciudadanía' },
    { value: 'P', label: 'Pasaporte' }
  ];
  selectedType: string = '';
  documentNumber: string = '';
  isButtonDisabled: boolean = true;
  isNumberValid: boolean = true;
  clientNotFound: boolean = false;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.updateButtonState(); 
  }

  onInput(event: any): void {
    const rawValue = event.target.value.replace(/\D/g, '');

    this.documentNumber = rawValue;

    this.isNumberValid = /^[0-9]{8,11}$/.test(rawValue);
    this.updateButtonState(); 
  }

  onTypeChange(): void {
    this.updateButtonState(); 
  }

  updateButtonState(): void {
    this.isButtonDisabled = !(this.selectedType && this.isNumberValid);
  }

  onSearch(): void {
    if (this.isButtonDisabled) return;

    this.clientNotFound = false;

    const rawNumber = this.documentNumber;

    this.clientService.getClientData(this.selectedType, rawNumber).subscribe(
      (data) => {
        if (data) {
          this.clientService.setClientData(data);
          this.router.navigate(['/summary']);
        } else {
          this.clientNotFound = true;
        }
      },
      (error) => {
        console.error('Error fetching client data', error);
        this.clientNotFound = true;
      }
    );
  }
}
