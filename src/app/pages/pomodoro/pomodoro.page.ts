import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalController } from '@ionic/angular';
import { PomodoroModalComponent } from '../pomodoro-modal/pomodoro-modal.component';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.page.html',
  styleUrls: ['./pomodoro.page.scss'],
})
export class PomodoroPage implements OnInit {

  mode = 'pomodoro';
  message: string;
  pomodoroCount = 0;

  constructor(
    private modalService: NgbModal,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  /**
   * Switches the timer mode to pomodoro. (25 mins)
   */
  switchToPomodoro(): void {
    this.mode = 'pomodoro';
  }

  /**
   * Switches the timer mode to a short break. (5 mins)
   */
  switchToShortBreak(): void {
    this.mode = 'short';
  }

  /**
   * Switches the timer mode to a long break. (10 mins)
   */
  switchToLongBreak(): void {
    this.mode = 'long';
  }

  /**
   * Called on completion of the timer, passed the modal to be displayed.
   */
  onTimerComplete(content): void {
    // Check what mode we are in to display a appropriate message in the modal.
    switch (this.mode) {
      case 'pomodoro':
        // Increment the counter.
        this.pomodoroCount += 1;
        if (this.pomodoroCount % 2 === 0) {
          this.message = 'Es hora de un recreo largo!';
        } else {
          this.message = 'Es hora de un recreo corto!';
        }
        break;
      case 'short':
        this.message = 'Hora de volver a estudiar!';
        break;
      case 'long':
        this.message = 'Hora de volver a estudiar!';
        break;
    }
    // Open the modal and then on close change the timer to the opposite mode. (Pomodoro -> Break etc.)
    this.modalService.open(content).result.then((result) => this.onModalDismissed(), (reason) => this.onModalDismissed());
  }

  onModalDismissed() {
    if (this.mode === 'short' || this.mode === 'long') { // If we have just had a break, back to work.
      this.mode = 'pomodoro';
    } else if (this.mode === 'pomodoro' && this.pomodoroCount % 2 === 0) { // If we have worked 2 pomodoros then long break.
      this.mode = 'long';
    } else { // Else have a short break.
      this.mode = 'short';
    }
  }


  async openPomodoroModal() {
    const modal = await this.modalCtrl.create({
      component: PomodoroModalComponent
    });

    await modal.present();
  }
}
