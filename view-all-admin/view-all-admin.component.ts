import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-all-admin',
  templateUrl: './view-all-admin.component.html',
  styleUrls: ['./view-all-admin.component.css']
})
export class ViewAllAdminComponent implements OnInit {


  admin!: Observable<Admin[]>;

  constructor(private adminService: AdminService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.admin = this.adminService.viewAllAdmin();
  }


  removeAdmin(adminId: number) {

    if(confirm("Are you sure to delete "+adminId)) {
    //alert("Do you want to delete it")
    this.adminService.removeAdmin(adminId)
    
      .subscribe(
        data => {
          console.log(data);
     
          alert("Deleted successfully");
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As ADMIN IS ASSOCIATED WITH ACCOUNT OR USERS"),error))
        // alert(" not deleted");
  }
  }

  updateAdmin(adminId: number) {
    this.router.navigate(['updateadmin', adminId]);
  }


  viewAdmin(adminId: number){
    this.router.navigate(['view', adminId]);
  }
 


}
