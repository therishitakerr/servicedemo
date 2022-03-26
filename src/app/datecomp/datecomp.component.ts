import { Component, OnInit } from '@angular/core';
import { DateserviceService } from '../dateservice.service';

@Component({
  selector: 'app-datecomp',
  templateUrl: './datecomp.component.html',
  styleUrls: ['./datecomp.component.css']
})
export class DatecompComponent implements OnInit {
  days:number=0;
  months:number=0;
  constructor(private ser:DateserviceService) { }

  checkdays(d1:any,d2:any)
  {
    this.days=this.ser.getDays(d1.value,d2.value);
  }
  checkmonths(d1:any,d2:any)
  {
    this.months=this.ser.getMonths(d1.value,d2.value);
  }
  ngOnInit(): void {
  }

}
