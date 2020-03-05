import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  // Si on veut utiliser le bouton pour rediriger vers une page externe au projet par exemple
  @Input() externalLink: string;
  // Pour rediriger vers une page de création d'une prestation par exemple
  @Input() route: string;

  constructor() { }

  ngOnInit(): void {
  }

}
