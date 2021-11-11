import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dav-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent implements OnInit {

  @Input()
  rounded = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    const mode = this.rounded ? 'dav-rounded-class' : 'dav-not-rounded-class';

    return ['dav-simple-layout', mode];
  }

}
