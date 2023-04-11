import { Component, OnInit } from '@angular/core';
import { User } from '../app/_models';
import { AccountService } from '../app/_services';

@Component({ templateUrl: 'lazy.component.html' })
export class LazyComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
