import { User } from '@botmind-test/api';
import { AuthFacade } from '@botmind-test/auth';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { LocalStorageJwtService } from '@botmind-test/auth';

@Component({
  selector: 'microblogging-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;

  constructor(private authFacade: AuthFacade, private localStorageJwtService: LocalStorageJwtService) {}

  ngOnInit() {
    this.user$ = this.authFacade.user$;
    this.isLoggedIn$ = this.authFacade.isLoggedIn$;
    this.localStorageJwtService
      .getItem()
      .pipe(
        take(1),
        filter((token) => !!token),
      )
      .subscribe((token) => this.authFacade.user());
  }
}
