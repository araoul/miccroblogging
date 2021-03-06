import { AuthGuardService } from '@botmind-test/auth';
import { NgrxFormsModule } from '@botmind-test/ngrx-forms';
import { SettingsService } from './settings.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SettingsEffects } from './+state/settings.effects';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SettingsComponent,
        canActivate: [AuthGuardService],
      },
    ]),
    EffectsModule.forFeature([SettingsEffects]),
  ],
  declarations: [SettingsComponent],
  providers: [SettingsEffects, SettingsService],
})
export class SettingsModule {}
