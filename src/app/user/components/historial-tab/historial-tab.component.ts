import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-historial-tab',
  templateUrl: './historial-tab.component.html',
  styleUrls: ['./historial-tab.component.scss']
})
export class HistorialTabComponent implements OnInit {
	historial: {};
	heroes: string[];
	myHero: string;

  constructor(private UserService: UserService) { 
		this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
		this.myHero = this.heroes[0];
  }

  doShit(): void {
  	console.log(this.historial);
  }

  ngOnInit() {
  	console.log(localStorage.username);
  	this.historial = this.UserService.query_historial(localStorage.username);
  }
}
