import { ChangeDetectionStrategy, Component, computed, effect, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-signal',
  imports: [CommonModule, RouterModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(`Count is now ${this.count()}, Double Count is ${this.doubleCount()}`);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  reset() {
    this.count.set(0);
  }
}
