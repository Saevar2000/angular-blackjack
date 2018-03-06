import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class DataService {
  public playerScore: number;
  public cpuScore: number;
  public player: Player;

  constructor() { 
    this.playerScore = 0;
    this.cpuScore = 0;
    this.player = new Player(1000);
  }

}
