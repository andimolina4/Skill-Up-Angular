import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent implements OnInit {
  fixedTermDepositForm!: FormGroup;
  resultado!: number;
  profitPercentage!: number;

  constructor() {}

  ngOnInit() {
    this.fixedTermDepositForm = new FormGroup({
      amount: new FormControl(null, [Validators.required]),
      term: new FormControl(null, [Validators.required]),
      interest: new FormControl(null, [Validators.required]),
      termType: new FormControl(null, [Validators.required]),
      frequency: new FormControl(null, [Validators.required]),
      compounding: new FormControl(null, [Validators.required]),
    });
  }

  calculateFixedTermDeposit() {
    const amount = this.fixedTermDepositForm.get('amount')?.value;
    const term = this.fixedTermDepositForm.get('term')?.value;
    const interest = this.fixedTermDepositForm.get('interest')?.value;
    const termType = this.fixedTermDepositForm.get('termType')?.value;
    const frequency = this.fixedTermDepositForm.get('frequency')?.value;
    const compounding = this.fixedTermDepositForm.get('compounding')?.value;

    if (amount && term && interest && termType && frequency && compounding) {
      const result = this.calculateFixedTermDepositResult(
        amount,
        term,
        interest,
        termType,
        frequency,
        compounding
      );
      this.resultado = result;
      this.getProfitpercentage();
    }
  }

  calculateFixedTermDepositResult(
    amount: number,
    term: number,
    interest: number,
    termType: string,
    frequency: string,
    compounding: string
  ) {
    let result = 0;

    const interestRate = interest / 100;
    const n = this.getFrequency(frequency);
    const t = this.getTerm(term, termType);
    const i = interestRate / n;
    const c = this.getCompounding(compounding);

    if (c === 'simple') {
      result = amount * (1 + i * t);
    } else if (c === 'compound') {
      result = amount * Math.pow(1 + i, t);
    }

    return result;
  }

  getFrequency(frequency: string) {
    let n = 0;

    if (frequency === 'monthly') {
      n = 12;
    } else if (frequency === 'quarterly') {
      n = 4;
    } else if (frequency === 'semi-annually') {
      n = 2;
    } else if (frequency === 'annually') {
      n = 1;
    }

    return n;
  }

  getTerm(term: number, termType: string) {
    let t = 0;

    if (termType === 'days') {
      t = term / 365;
    } else if (termType === 'months') {
      t = term / 12;
    } else if (termType === 'years') {
      t = term;
    }

    return t;
  }

  getCompounding(compounding: string) {
    let c = '';

    if (compounding === 'simple') {
      c = 'simple';
    } else if (compounding === 'compound') {
      c = 'compound';
    }

    return c;
  }

  getProfitpercentage() {
    this.profitPercentage =
      this.resultado - this.fixedTermDepositForm.get('amount')?.value;
  }

  depositFixedTerm() {
    console.log('Deposit Fixed Term');
  }
}
