// table-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the User interface here
export interface User {
  ID_Users: number;
  Name: string;
  Family_name: string;
  Phone: string;
  Address: string;
  Password: string;
  Email: string | null;
  Types: string;
}

// Define the ApiResponse interface here
export interface ApiResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private apiUrl = 'api/G1/GetListAllUsers/codeavaran20220704';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}