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
      phone : ['',[Validators.required,Validators.maxLength(10)]],
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
      branchEmail : ['',Validators.required],
      branchphone : ['',Validators.required],
      city : ['',Validators.required],
      BranchAddress : ['',Validators.required],
      BranchType : ['',Validators.required],
      check1 : ['',Validators.required],
      check2 : ['',Validators.required],
      check3 : ['',Validators.required],
      check4 : ['',Validators.required],
      check5 : ['',Validators.required]
    })
  }

  add(){
    this.data.push(this.initItemRows());
  }

  Registration(){
    console.log(this.RegiForm.value);   

    if(this.RegiForm.value.Email !== '' && this.RegiForm.value.password !== ''){  
      alert("Registration Is Successful...");
      this.router.navigate(['/DisplayData']);
    }else{
      alert("Please Enter Valid Data...");
      this.router.navigate(['/Registration']);
    }
  }

  // topicHasError = true;

  // hasError(value:any){
  //   if(value===null){
  //     this.topicHasError = true;
  //   }else{
  //     this.topicHasError = false;
  //   }
  // }

}
