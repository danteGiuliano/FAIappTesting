import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pomodoro-modal',
  templateUrl: './pomodoro-modal.component.html',
  styleUrls: ['./pomodoro-modal.component.scss'],
})
export class PomodoroModalComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissPomodoroModal() {
    this.modalCtrl.dismiss();
  }

}
