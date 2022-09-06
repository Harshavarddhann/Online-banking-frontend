import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-viewalltransaction',
  templateUrl: './viewalltransaction.component.html',
  styleUrls: ['./viewalltransaction.component.css']
})
export class ViewalltransactionComponent implements OnInit {

  
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
    this.router.navigate(['tran/update', accountNo]);
  }


  findByTransactionId(accountNo: number){
    this.router.navigate(['viewtransaction', accountNo]);
  }

  credittransaction(accountNo: number) {
    this.router.navigate(['credittransaction', accountNo]);
  }

 



}
