import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  protected readonly title = signal('Layout Container');

  constructor() {}

  ngOnInit() {}

}
