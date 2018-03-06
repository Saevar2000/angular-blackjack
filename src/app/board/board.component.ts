import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from '../player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  player: Player;
  amount: number = 20;
  playerScore: number;
  cpuScore: number;
  gameInProgress: boolean;
  disableStay: boolean;
  hasBet: boolean = false;
  winner: string;

  constructor(private dataService: DataService) {
    this.playerScore = dataService.playerScore;
    this.cpuScore = dataService.cpuScore;
    this.player = dataService.player;
   }

  ngOnInit() {
  }

  playerStay(): void {
    this.gameInProgress = true;
    this.disableStay = true;

    while (this.cpuScore <= 17) {
      if (this.cpuScore > this.playerScore) break;
      this.cpuScore += this.drawCard();
    }

    this.calcWinner();

  }

  calcWinner(): void {
    if (this.cpuScore > 21) {
      this.winner = "Player wins"
      this.player.balance += this.amount * 2;
    } else if (this.playerScore === this.cpuScore) {
      this.winner = "It's a draw";
      this.player.balance += this.amount;
    } else if (this.playerScore > this.cpuScore) {
      this.winner = "Player wins";
      this.player.balance += this.amount * 2;
    } else {
      this.winner = "CPU wins";
    }
  }

  playerDrawCard(): void {
    if (!this.hasBet) {
      this.player.balance -= this.amount;
      this.hasBet = true;
    }
    this.playerScore +=this.drawCard();
    if (this.playerScore > 21) {
      this.gameInProgress = true;
      this.disableStay = true; 
      this.winner = "CPU wins";
    }
    console.log(this.dataService.player.balance);
  }

  // Returns a random number between 1 - 11.
  drawCard(): number {
    return Math.floor((Math.random() * 11) + 1);
  }

  anotherGame(): void {
    this.gameInProgress = null;
    this.disableStay = null;
    this.winner = null;
    this.hasBet = false;
    this.playerScore = 0;
    this.cpuScore = 0;
  }

}
