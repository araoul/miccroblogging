import { ApiModule } from '@botmind-test/api';
import { AuthModule } from '@botmind-test/auth';
import { NgrxErrorModule } from '@botmind-test/ngrx-error';
import { NgrxRouterModule } from '@botmind-test/ngrx-router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';

import { environment } from '@env/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  imports: [
    ApiModule,
    AuthModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('@botmind-test/home/src/lib/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'article/:slug',
          loadChildren: () => import('@botmind-test/article/src/lib/article.module').then((m) => m.ArticleModule),
        },
        {
          path: 'settings',
          loadChildren: () => import('@botmind-test/settings/src/lib/settings.module').then((m) => m.SettingsModule),
        },
        {
          path: 'editor',
          loadChildren: () => import('@botmind-test/editor/src/lib/editor.module').then((m) => m.EditorModule),
        },
        {
          path: 'profile/:username',
          loadChildren: () => import('@botmind-test/profile/src/lib/profile.module').then((m) => m.ProfileModule),
        },
      ],
      {
        initialNavigation: 'enabled',
        useHash: true,
        relativeLinkResolution: 'legacy',
      },
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterModule,
    NgrxErrorModule,
  ],
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
