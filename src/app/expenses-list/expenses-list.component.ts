import { Component } from '@angular/core';

import { expenses, Expense } from '../expenses';

const today = new Date();
const filter = { year: today.getFullYear(), month: today.getMonth() };
var filteredExpenses = expenses.filter(
  (x) => x.rok == filter.year && x.miesiac == filter.month
);
function filterExpenses() {
  return expenses.filter(
    (x) => x.rok == filter.year && x.miesiac == filter.month
  );
}

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent {
  filter = filter;
  expenses = filterExpenses();
  changePeriod(back: boolean) {
    if (back && filter.month == 1) {
      filter.year--;
      filter.month = 12;
    } else if (!back && filter.month == 12) {
      filter.year++;
      filter.month = 1;
    } else {
      filter.month = filter.month + (back ? -1 : 1);
    }
    this.expenses = filterExpenses();
  }
  edit(item: Expense) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
