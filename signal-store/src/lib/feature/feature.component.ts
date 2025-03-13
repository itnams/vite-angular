import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalStoreService } from '../services';
import { interval, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature',
  imports: [CommonModule, RouterModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent {
  counter: any;
  message: any;
  items: any;
  isLoading: any;
  user: any;
  time: any;

  constructor(private store: SignalStoreService){
    this.counter = this.store.counter;
    this.message = this.store.message;
    this.items = this.store.items;
    this.isLoading = this.store.isLoading;
    this.user = this.store.user;
    this.time = toSignal(interval(1000).pipe(map(() => new Date().toLocaleTimeString())));
  }


  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }

  setMessage(newMessage: string) {
    this.store.setMessage(newMessage);
  }

  addItem(newItem: string) {
    this.store.addItem(newItem);
  }

  removeItem(index: number) {
    this.store.removeItem(index);
  }

  toggleLoading() {
    this.store.setLoading(!this.store.isLoading());
  }

  setUser() {
    this.store.setUser({ name: 'John Doe', age: 30 });
  }

  clearUser(){
    this.store.setUser(null);
  }

  reset(){
    this.store.reset();
  }
}

