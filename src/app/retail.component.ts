import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { ThrowStmt } from '@angular/compiler';

 

@Component({

  selector: 'retail',

  templateUrl: './retail.component.html',

})

export class RetailComponent {

 

  amount: number = 2000;

  showTransferDiv: boolean = false;

  showCashDiv: boolean = false;

  showRetail: boolean = true;

  showCash: boolean = true;

  showValidataionError: boolean = false;

  showErrorSendToNumber: boolean = false;

  showSucessSendToNumber: boolean = false;

  showSucess: boolean = false;

 

  transferAmount: number;

  selectTransfer: string = "";

 

  constructor(private _router: Router) {

    this.selectTransfer ="";

    this.transferAmount = this.amount;

  }

 

  public showRetailDiv(index: number): void {

 

    switch (index) {

 

      case 1:

        this.showRetail = true;

        this.showCash = false;

        break;

 

      case 2:

        this.showRetail = false;

        this.showCash = true;

        break;

 

    }

 

 

  }

 

  public transferTypeChange(index: number): void {

 

    this.showValidataionError = false;

    this.showErrorSendToNumber = false;

    this.showSucess = false;

    this.showSucessSendToNumber = false;

    switch (index) {

 

      case 0:

        this.showTransferDiv = true;

        this.showCashDiv = false;

        this.selectTransfer = "Transfer";

        break;

 

      case 1:

        this.showTransferDiv = false;

        this.showCashDiv = true;

        this.selectTransfer = "Send";

        break;

 

    }

 

  }

 

  public cancelEvent(): void {

    this.showValidataionError = false;

    this.showErrorSendToNumber = false;

    this.showSucess = false;

    this.showSucessSendToNumber = false;

    this.transferAmount = this.amount;

  }

 

  public sendToNumber(): void {

    if (this.transferAmount > this.amount) {

      this.showErrorSendToNumber = true;

      this.showSucessSendToNumber = false;

    } else {

      this.amount = this.transferAmount = this.amount - this.transferAmount;

      this.showErrorSendToNumber = false;

      this.showSucessSendToNumber = true;

    }

 

  }

 

  public transferAmountEvent(): void {

 

    if (this.transferAmount > this.amount) {

      this.showValidataionError = true;

      this.showSucess = false;

    } else {

      this.amount = this.transferAmount = this.amount - this.transferAmount;

      this.showValidataionError = false;

      this.showSucess = true;

    }

  }

 

}