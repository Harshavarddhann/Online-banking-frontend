import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  account!: Observable<Account[]>;

  constructor(private accountService: AccountService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.account = this.accountService.viewAll();
  }


  removeAccount(accountId: number) {
   
      if(confirm("Are you sure to delete "+accountId)) {
     
      
      
   // alert("Do you want to delete it")
    this.accountService.removeAccount(accountId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As ACTIVE TRANSACTION OR LOAN IS ASSOCIATED WITH ACCOUNT"),error))
  }

  }
  updateAccount(accountId: number) {
    this.router.navigate(['updateaccount', accountId]);
  }


  findByAccount(accountId: number){
    this.router.navigate(['viewaccount', accountId]);
  }
viewAll(accountId:number){
  this.router.navigate(['view', accountId]);
}
 


}