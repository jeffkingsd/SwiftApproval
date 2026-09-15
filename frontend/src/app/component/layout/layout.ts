import { Component, signal } from '@angular/core';
import { CardTable } from '../card-table/card-table';
import { Header } from '../header/header';
import { saleDataImports } from '@mocks/SaleDataMock';
import { SaleCustomerdata } from '@entities/SaleData';


@Component({
  imports: [CardTable, Header],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  protected readonly title = signal('Layout Container');



  customerSales: SaleCustomerdata[] =[
    { customerName: 'Fred CunningHam', sales: saleDataImports.computerSale},
    { customerName: 'Sarah Jackson', sales: saleDataImports.furnitureSale },
    { customerName: 'John Doe', sales: saleDataImports.warhammerSale },
    { customerName: 'Katie Wilson', sales: saleDataImports.carAccessorySale },
    { customerName: 'Mercury Jansen', sales: saleDataImports.giftSale }
  ] 



  constructor() {}

  ngOnInit() {}

}
