import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private menu = new Subject<String>();
  constructor() { }
  public getMenu(): Observable<String> {
    return this.menu.asObservable();
  }

  public setMenu(data: any) {
    return this.menu.next(data);
  }
}
