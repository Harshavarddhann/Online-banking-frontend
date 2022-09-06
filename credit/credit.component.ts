import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

//import { Transaction } from '../transaction';
//import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  
  transaction!: Observable<Transaction[]>;
 

  constructor(private transactionService: TransactionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transaction = this.transactionService.viewAllTransactions();
  }

  updateTransaction(accountNo: number) {
    this.router.navigate(['update', accountNo]);
  }


  findByTransactionId(accountNo: number){
    this.router.navigate(['viewtransaction', accountNo]);
  }

  credittransaction(accountNo: number) {
    this.router.navigate(['credittransaction', accountNo]);
  }

 



}
