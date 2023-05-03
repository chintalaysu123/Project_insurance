import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  changeLogInStatus: Subject<any> = new Subject();
  constructor() { }
}
