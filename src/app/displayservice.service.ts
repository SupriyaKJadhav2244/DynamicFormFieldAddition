import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayserviceService {

  constructor(private http:HttpClient) { }

  customerUrl:string="./../assets/data/jsonData.json";
  branchUrl:string="./../assets/data/branchDetail.json";

  getCustomerData(){
    return this.http.get(this.customerUrl);
  }

  getBranchData(){
    return this.http.get(this.branchUrl);
  }
}
