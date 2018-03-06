import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from '../player';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  player: Player;

  constructor(private dataService: DataService) {
    this.player = dataService.player;
   }

  ngOnInit() {
  }

}
