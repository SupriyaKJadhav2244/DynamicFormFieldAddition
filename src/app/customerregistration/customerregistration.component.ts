import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms'; 
import { Router } from '@angular/router';   

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  RegiForm: any;  
  information: any; 
  
  constructor(private formBuilder:FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.RegiForm = this.formBuilder.group({
      Fname : ['',Validators.required],
      Email : ['',[Validators.required,Validators.email]],
      phone : ['',[Validators.required,Validators.maxLength(13)]],
      password : ['',Validators.required],
      Cpassword : ['',Validators.required], 
      data : this.formBuilder.array([   
        this.initItemRows()
      ])
    },{
      validators:this.MustMatch('password','Cpassword')
    }) 
  }

  get data(){
    return this.RegiForm.get('data') as FormArray;
  }

  MustMatch(controlName:string,matchingControlName:string){
    return(formGroup:FormGroup)=> {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }else{
        matchingControl.setErrors(null);
      }
    }
  }

  initItemRows(){
    return this.formBuilder.group({
      branch : ['',Validators.required],
      branchEmail : ['',[Validators.required,Validators.email]],
      branchphone : ['',[Validators.required, Validators.maxLength(13)]],
      city : ['',Validators.required],
      BranchAddress : ['',Validators.required],
      BranchType : ['',Validators.required],
      check1 : [''],
      check2 : [''],
      check3 : [''],
      check4 : [''],
      check5 : ['']  
    })
  }

  add(){
    this.data.push(this.initItemRows());
  }

  Registration(){
    console.log(this.RegiForm.value);  

    if(this.RegiForm.value){  
      alert("Registration Is Successful..."); 
      sessionStorage.setItem('User','auth');
      this.router.navigate(['/DisplayData']);
    }else{
      alert("Please Enter Valid Data...");
      this.router.navigate(['/Registration']);
    }
  }  
}
