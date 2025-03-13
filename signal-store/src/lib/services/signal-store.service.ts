import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalStoreService {
  counter = signal(0);

  message = signal('Initial message');

  items = signal<string[]>([]);

  isLoading = signal(false);

  user = signal<{ name: string; age: number } | null>(null);

  constructor() {}

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => value - 1);
  }

  setMessage(newMessage: string) {
    this.message.set(newMessage);
  }

  addItem(newItem: string) {
    this.items.update((items) => [...items, newItem]);
  }

  removeItem(index: number) {
    this.items.update((items) => items.filter((_, i) => i !== index));
  }

  setLoading(loading: boolean) {
    this.isLoading.set(loading);
  }

  setUser(user: { name: string; age: number } | null) {
    this.user.set(user);
  }

  reset(){
    this.counter.set(0);
    this.message.set("Initial message");
    this.items.set([]);
    this.isLoading.set(false);
    this.user.set(null);
  }
}
