import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/loan.service';


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans!: Observable<Loan[]>;
 
  constructor(private loanService: LoanService,
    private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.loans = this.loanService.getLoanList();
  }

  deleteLoan(id: number) {
    if(confirm("Are you sure you want to delete loan application id "+id)){
  
    this.loanService.deleteLoan(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

  updateLoan(id: number) {

    this.router.navigate(['updateloan', id]);
  }

  loanDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
