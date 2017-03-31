import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export type None = false | null | undefined;
export type Route = string | any[] | None;
export type Action = string | None;

export interface Navigation {
  title: string;
  back: Route;
  action: Action;
  visible: boolean;
}

@Injectable()
export class NavigationService {
  private obs = new EventEmitter<Navigation>();
  private actionObs = new EventEmitter<void>();
  private defaults: Navigation = {
    title: 'whatsapp',
    back: false,
    action: false,
    visible: true,
  };
  private current: Navigation;
  private timeoutId: NodeJS.Timer;

  constructor() {
    this.current = Object.assign({}, this.defaults);
  }

  reset(): void {
    this.current = Object.assign({}, this.defaults);
    this.emit();
  }

  hide(): void {
    this.update<boolean>('visible', false);
  }

  show(): void {
    this.update<boolean>('visible', true);
  }

  setTitle(title: string): void {
    this.update<string>('title', title);
  }

  setBack(back: Route): void {
    this.update<Route>('back', back);
  }

  setAction(action: Action): void {
    this.update<Action>('action', action);
  }

  doAction(): void {
    this.actionObs.emit();
  }

  onAction(): Subject<void> {
    return this.actionObs;
  }

  update<T>(key: string, value: T): void {
    this.current[key] = value;
    this.emit();
  }

  observe(): Subject<Navigation> {
    return this.obs;
  }

  private emit(): void {
    this.throttle(() => this.obs.emit(this.current));
  }

  private throttle(fn: Function): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.timeoutId = setTimeout(() => fn(), 50);
  }

}
