import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: HeroInterface[] = [];
    selectedHero?: HeroInterface;

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    constructor(
        private heroService: HeroService,
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

}
