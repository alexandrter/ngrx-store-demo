import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  counter: number = 0;
  updatedAt?: number;

  increase() {
    this.counter++;
    this.updateDate();
  }

  clear() {
    this.counter = 0;
    this.updateDate();
  }

  private updateDate() {
    this.updatedAt = Date.now();
  }
}
