import { Component, Input } from '@angular/core';
import { SaleData } from '@entities/SaleData';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [HlmCardImports, CurrencyPipe],
  selector: 'app-card-table',
  styleUrl: './card-table.css',
  templateUrl: './card-table.html',
})
export class CardTable {
  @Input() customer: string = '';
  @Input() saleData: SaleData[] = [];

  ngOnInit() {
    console.log('Customer:', this.customer);
    console.log('Sale Data:', this.saleData);
  }

  get saleTotal(): number {
    return this.saleData.reduce((total, sale) => total + sale.price * sale.quantity, 0);
  }

}
