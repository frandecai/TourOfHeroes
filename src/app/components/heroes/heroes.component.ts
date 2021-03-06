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

    constructor(
        private heroService: HeroService,
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }

        this.heroService.addHero({ name } as HeroInterface)
            .subscribe(hero => {this.heroes.push(hero);
        });
    }

    deleteHero(hero: HeroInterface): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}
