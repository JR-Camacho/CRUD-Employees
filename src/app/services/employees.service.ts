import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployees(query:string = ''){
    return this.http.get('https://api-employees-register.herokuapp.com/employees', {headers: {look:query}});
  }

  getEmployee(id:number){
    return this.http.get(`https://api-employees-register.herokuapp.com/employees/${id}`);
  }

  newEmployee(employee:Employees){
    return this.http.post('https://api-employees-register.herokuapp.com/new-employee', employee);
  }

  updateEmployee(employee:Employees){
    return this.http.put(`https://api-employees-register.herokuapp.com/update-employee/${employee.id}`, employee);
  }

  deleteEmployee(id:number){
    return this.http.delete(`https://api-employees-register.herokuapp.com/delete-employee/${id}`);
  }
}
