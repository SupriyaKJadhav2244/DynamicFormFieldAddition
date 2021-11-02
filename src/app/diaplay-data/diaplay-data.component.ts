import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DisplayserviceService } from '../displayservice.service';
import { branchData } from '../model/branch';
import { customerData } from '../model/customer';

@Component({
  selector: 'app-diaplay-data',
  templateUrl: './diaplay-data.component.html',
  styleUrls: ['./diaplay-data.component.css']
})
export class DiaplayDataComponent implements OnInit {
  display: any; 
  data:customerData[] = [];
  display1: any; 
  data1:branchData[] = []; 

  constructor(private service:DisplayserviceService,private routes:ActivatedRoute) { }

  ngOnInit() {   
    this.service.getCustomerData().subscribe(
      (display:any)=>{ 
        // console.log(display.customer);
        this.data = display.customer; 
        // console.log(this.data);
      }
    );

    this.service.getBranchData().subscribe(
      (display1:any)=>{ 
        // console.log(display.branch);
        this.data1 = display1.branch; 
        // console.log(this.data1);
      }
    );
}

}
