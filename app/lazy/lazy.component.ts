import { Component, Input } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-lazy',
  templateUrl: 'lazy.component.html'
})
export class LazyComponent {
  user: User | null;
  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;

  }
}
