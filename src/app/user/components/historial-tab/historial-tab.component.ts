import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-tab',
  templateUrl: './historial-tab.component.html',
  styleUrls: ['./historial-tab.component.scss']
})
export class HistorialTabComponent implements OnInit {
	title: string;
	heroes: string[];
	myHero: string;

  constructor() { 
	  this.title = 'Tour of Heroes';
		this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
		this.myHero = this.heroes[0];
  }

  ngOnInit() {
  }
}
