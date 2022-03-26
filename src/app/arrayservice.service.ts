import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayserviceService {
  listdata: string[] = [];
  constructor() { }
  addToList(value: any) {
    if (value)
      this.listdata.push(value);
  }
  listReverse() {
    this.listdata.reverse();
    console.log("reversed list: " + this.listdata)
  }
  listSort() {
    this.listdata.sort();
    console.log("sorted list: " + this.listdata);
  }
  listGet() {
    return this.listdata;
  }
  listEmpty(): boolean {
    if (this.listdata.length == 0) return true
    return false;
  }
}
