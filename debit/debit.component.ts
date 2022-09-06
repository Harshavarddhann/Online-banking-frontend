import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

//import { Transaction } from '../transaction';
//import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {

  
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

  debittransaction(accountNo: number) {
    this.router.navigate(['debittransaction', accountNo]);
  }

 



}
