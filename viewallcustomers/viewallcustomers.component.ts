import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-viewallcustomers',
  templateUrl: './viewallcustomers.component.html',
  styleUrls: ['./viewallcustomers.component.css']
})
export class ViewallcustomersComponent implements OnInit {

  
  customer!: Observable<Customer[]>;

  constructor(private customerService: CustomerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customer = this.customerService.viewAllCustomers();
  }


  removeCustomer(custId: number) {

    if(confirm("Are you sure to delete "+custId)) {
   // alert("Do you really want to delete customer")
    this.customerService.removeCustomer(custId)
      .subscribe(
        data => {
          console.log(data);
          alert("DELETED SUCCESSFULLY");
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As CUSTOMER IS ASSOCIATED WITH ACCOUNT OR USERS"),error))

  }

  }
  updateCustomer(custId: number) {
    this.router.navigate(['update', custId]);
  }


  findByCustomerId(custId: number){
    this.router.navigate(['viewcustomer', custId]);
  }
 



}
