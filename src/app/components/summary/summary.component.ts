import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  clientData: any = {};

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientData = this.clientService.getClientDataFromService();
  }

  goBack(): void {
    window.history.back();
  }
}
