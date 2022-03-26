import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor() { }
  getDays(d1:string,d2:string)
  {
    let date1: Date = new Date(d1); 
    let date2: Date = new Date(d2);
    var timediff = date2.getTime() - date1.getTime();
    return timediff / (1000 * 3600 * 24);
  }
  getMonths(d1:string,d2:string) 
 {
  let date1: Date = new Date(d1); 
  let date2: Date = new Date(d2);
  var diff =(date2.getTime() - date1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
 }
}
