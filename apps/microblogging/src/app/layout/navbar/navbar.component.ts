import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@botmind-test/api';

@Component({
  selector: 'microblogging-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
}
