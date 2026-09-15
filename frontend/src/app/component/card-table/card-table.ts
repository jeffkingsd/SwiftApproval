import { Component } from '@angular/core';
import { SaleData } from '@entities/SaleData';
import { computerSale } from '@mocks/SaleDataMock';

@Component({
  imports: [],
  selector: 'app-card-table',
  styleUrl: './card-table.css',
  templateUrl: './card-table.html',
})
export class CardTable {
  
  saleData: SaleData[] = computerSale;
}
