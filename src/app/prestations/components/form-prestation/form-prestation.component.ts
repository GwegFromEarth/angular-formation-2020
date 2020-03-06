import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State);
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  @Input() item = new Prestation();
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      typePresta : [this.item.typePresta],
      client : [this.item.client],
      nbJours : [this.item.nbJours],
      tjmHt : [this.item.tjmHt],
      tva : [this.item.tva],
      state : [this.item.state],
      comments : [this.item.comment]
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
