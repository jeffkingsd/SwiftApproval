import { Component } from '@angular/core';
import { SaleData } from '@entities/SaleData';
import { computerSale } from '@mocks/SaleDataMock';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
  imports: [HlmCardImports],
  selector: 'app-card-table',
  styleUrl: './card-table.css',
  templateUrl: './card-table.html',
})
export class CardTable {
  customer: string = "Joe Smith";

  saleData: SaleData[] = computerSale;
}
