import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomodoroPageRoutingModule } from './pomodoro-routing.module';

import { PomodoroPage } from './pomodoro.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimerComponent } from './timer/timer.component';
import { PomodoroModalComponent } from '../pomodoro-modal/pomodoro-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomodoroPageRoutingModule,
    NgbModule
  ],
  declarations: [
    PomodoroPage,
    TimerComponent,
    PomodoroModalComponent
  ],
  entryComponents: [PomodoroModalComponent],
  providers: [],
  bootstrap: [PomodoroPage]
})
export class PomodoroPageModule {}
