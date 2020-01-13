import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.scss']
})
export class TargetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
