import { Component } from '@angular/core';

import { expenses } from '../expenses';

const today = new Date();
const filter = { year: today.getFullYear(), month: today.getMonth() };
const filteredExpenses = expenses.filter(
  (x) => x.rok == filter.year.toString() && x.miesiac == filter.month.toString()
);

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent {
  filter = filter;
  expenses = filteredExpenses;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
