import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') classTd: string;

  constructor() {

  }

  ngOnChanges() : void {
    this.classTd = this.formatClass(this.appState);
  }

  formatClass(state: any): string {
      return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;

  }

}
