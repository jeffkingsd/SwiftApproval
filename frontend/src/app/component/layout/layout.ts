import { Component, signal } from '@angular/core';
import { CardTable } from '../card-table/card-table';


@Component({
  imports: [CardTable],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  protected readonly title = signal('Layout Container');

  constructor() {}

  ngOnInit() {}

}
