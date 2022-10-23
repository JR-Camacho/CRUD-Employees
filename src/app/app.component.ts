import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employees } from './models/employees';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees:any;
  employee:Employees = new Employees();
  formIsActive:boolean = false;
  isUpdating:boolean = false;
  isDeleting:boolean = false;
  isLoading:boolean = false;
  isActiveName:boolean = false;
  isActiveIdentification:boolean = false;
  isActiveSurnames:boolean = false;
  isActiveAll:boolean = false;
  error:string = '';
  confirmation:string = '';
  id:number;
  param:string;

  activate(){
    this.isActiveIdentification = true;
    this.isActiveName = true;
    this.isActiveSurnames = true;
  }

  clearMessage(){
    this.confirmation = '';
    this.error = '';
  }

  getEmployees(){
    this.isLoading = true;
    this.employeesService.getEmployees(this.param).subscribe(res =>{
      this.employees = res;
      this.isLoading = false;
    }, err => this.isLoading = false);
  }

  getEmployee(id:number){
    this.activate();
    this.employeesService.getEmployee(id).subscribe(res => {
      let employee:any = res;
      this.employee.id = employee[0].id;
      this.employee.identification_card = employee[0].identification_card;
      this.employee.name = employee[0].name;
      this.employee.surnames = employee[0].surnames;
    }, err => console.error(err));
  }

  newEmployee(){
    this.clearMessage();
    this.isLoading = true;
    this.employeesService.newEmployee(this.employee).subscribe(res => {
      this.getEmployees();
      this.isLoading = false;
      this.confirmation = 'Record added sucessfully';
    }, err => {
      this.isLoading = false;
      this.error = 'This record could not be added';
    });
  }

  updateEmployee(){
    this.clearMessage();
    this.isLoading = true;
    this.employeesService.updateEmployee(this.employee).subscribe(res => {
      this.getEmployees();
      this.isLoading = false;
      this.confirmation = 'Record updated sucessfully';
    }, err => {
      this.isLoading = false
      this.error = 'This record could not be updated';
    });
  }

  getId(id:number){
    this.id = id;
  }

  deleteEmployee(){
    this.clearMessage();
    this.isLoading = true;
    this.employeesService.deleteEmployee(this.id).subscribe(res => {
      this.getEmployees();
      this.isLoading = false;
      if(this.formIsActive) this.formIsActive = false;
      this.confirmation = 'Record deleted successfully';
    }, err => {
      this.isLoading = false
      this.error = 'This record could not be deleted';
    });
  }

  validateName(e:any){
    if(e.target.value.trim() != '') this.isActiveName = true;
    else this.isActiveName = false;
  }

  validateSurnames(e:any){
    if(e.target.value.trim() != '') this.isActiveSurnames = true;
    else this.isActiveSurnames = false;
  }

  validateIdentification(e:any){
    if(e.target.value.trim() != '') this.isActiveIdentification = true;
    else this.isActiveIdentification = false;
  }

  validateInputs(){
    if(this.isActiveName == true && this.isActiveSurnames == true && this.isActiveIdentification == true) this.isActiveAll = true;
    else this.isActiveAll = false;

    console.log(this.isActiveAll);
  }

  cleanForm(){
    this.employee.identification_card = '';
    this.employee.name = '';
    this.employee.surnames = '';
    this.isActiveIdentification = false;
    this.isActiveName = false;
    this.isActiveSurnames = false;
    this.isActiveAll = false;
    this.formIsActive = true;
    this.isUpdating = false;
  }

  constructor(private employeesService:EmployeesService){}

  ngOnInit(): void {
   this.getEmployees();
  }

}
