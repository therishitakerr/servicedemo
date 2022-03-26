import { Component, OnInit } from '@angular/core';
import { ArrayserviceService } from '../arrayservice.service';

@Component({
  selector: 'app-arraycomp',
  templateUrl: './arraycomp.component.html',
  styleUrls: ['./arraycomp.component.css']
})
export class ArraycompComponent implements OnInit {

  constructor(private ser: ArrayserviceService) {
  }
  addTo(stringinput: any) {
    this.ser.addToList(stringinput.value);
    stringinput.value='';
  }
  listGet() {
    return this.ser.listGet();
  }
  listSort() {
    if (!this.ser.listEmpty())
      this.ser.listSort();
    else
      alert("list empty");
  }
  listReverse() {
    if (!this.ser.listEmpty())
      this.ser.listReverse();
    else
      alert("list empty");
  }
  listEmpty() {
    if (this.ser.listEmpty())
      alert("list empty");
    else
      alert("list not empty");
  }
  ngOnInit(): void {
  }

}
