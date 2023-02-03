import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // public pour utiliser dans HTML
  constructor(public basketService: BasketService){}

}


