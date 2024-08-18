import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientDataSubject = new BehaviorSubject<any>(null);
  clientData$ = this.clientDataSubject.asObservable();

  private dataFilePath = 'assets/clients.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getClientData(type: string, number: string): Observable<any> {
    return this.http.get<any[]>(this.dataFilePath).pipe(
      map((clients) => {
        // Filtrar clientes basados en el tipo y número de documento
        const client = clients.find(client => client.documentType === type && client.document === number);
        return client || null;
      })
    );
  }

  setClientData(data: any): void {
    this.clientDataSubject.next(data);
  }

  getClientDataFromService(): any {
    return this.clientDataSubject.value;
  }
}
