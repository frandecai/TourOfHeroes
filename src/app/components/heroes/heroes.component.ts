import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { HeroInterface } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: HeroInterface[] = [];
    newHeroName;

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    addHero(): void {
        this.heroService.addHero(this.newHeroName);
        this.newHeroName = "";
    }

    reloadHeroes(): void {
        console.log("Recarga de Héroes...")
        this.ngOnInit();
    }
}
