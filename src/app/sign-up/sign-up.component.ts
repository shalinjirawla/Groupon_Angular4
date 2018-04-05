import { Component, OnInit, Inject,  ViewChild , Directive} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { RegistrationService } from '../Services/Registration.Service';
import { LocationService } from '../Services/Location.Service';
import { CategoryService } from '../Services/Category.Service';
import { Registration } from '../Model/Registration.Model';
import { Location } from '../Model/Location.Model';
import { Category } from '../Model/Category.Model';
import { CompleterService, CompleterData } from 'ng2-completer';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Observable } from 'rxjs/Rx'; 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
};

  SignUpForm : FormGroup;
  CategoryList = [];
  LocationList = [];
  SignUpModel : Registration;
  setconfirm;
  imageUpload;
  private isUploadBtn: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private registrationService : RegistrationService,
              private categoryService : CategoryService,
              private locationService : LocationService,
              private _sanitizer: DomSanitizer,
              private http : Http,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.SignUpForm = this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      EmailID : ['',Validators.required],
      Password : ['',Validators.required],
      ConfirmPassword: [''],
      Gender : ['',Validators.required],
      LocationName : [''],
      DOB : ['',Validators.required],
      Image : [''],
      Category : ['']
    });
    this.getCategory();
    this.getLocation();
  }
  
  getCategory(){
    this.categoryService.getCategoryList().subscribe((abc : Category[])=>{
      this.CategoryList = abc;
     });
  }

  getLocation(){
    this.locationService.getLocationList().subscribe((abc : Location[])=>{
     this.LocationList = abc;
     });
  }
  
  matchPassword(){
    let pass = this.SignUpForm.value.Password;
    let Cpass = this.SignUpForm.value.ConfirmPassword;
    
    if(pass == Cpass){
      this.setconfirm = "";
    }
    else{
     this.setconfirm = "Confirm Password not matched";
    }
  }


  //file upload event  
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers()
      let options = new RequestOptions({ headers: headers });
      let FileApi = "http://localhost:61072/api/FileUp/UploadJsonFile";
      this.http.post(FileApi, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data =>{ this.imageUpload = data } ,
        error => console.log(error)
        )
    }
  }

 
  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.LocationName}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  saveDetails(){

    let FName = this.SignUpForm.value.FirstName;
    let LName = this.SignUpForm.value.LastName;
    let Email = this.SignUpForm.value.EmailID;
    let Pass = this.SignUpForm.value.Password;
    let Gen = this.SignUpForm.value.Gender;
    let location = this.SignUpForm.value.LocationName.ID;
    
    let birth1 = this.SignUpForm.value.DOB.date;
    let birth = birth1.year+"/"+ birth1.month+"/"+ birth1.day;
    let cat = this.SignUpForm.value.Category;
    let pic = this.SignUpForm.value.Image;
   
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var day = currentTime.getDate()
    var year = currentTime.getFullYear()
    var nowdate = (year + "/" + month + "/" + day)
   
      let data = Object.assign({},this.SignUpModel, {
        FirstName : FName,
        LastName : LName,
        EmailID : Email,
        Password : Pass,
        Gender : Gen,
        LocationID : location,
        DOB : birth ,
        Category : cat,
        Image : this.imageUpload,
        RegisteredDate : nowdate
      });
  
       this.registrationService.createUser(data).subscribe(response => {
        this.onSaveComplete();
      });
    }

    onSaveComplete() {
      this.SignUpForm.reset();
      this.router.navigate(['LogIn']);
    }
  }
