import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: HeroInterface[] = [];

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    constructor(
        private heroService: HeroService,
    ) { }

    ngOnInit() {
        this.getHeroes();
    }
}
