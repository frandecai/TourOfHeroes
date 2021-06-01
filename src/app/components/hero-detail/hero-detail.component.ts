import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import { HeroInterface } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: HeroInterface;
    heroes: HeroInterface[] = [];

    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private location:Location,
        public heroService: HeroService
    ) {
    }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    deleteHero(hero: HeroInterface): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
        this.router.navigateByUrl('/heroes');
    }

    saveHero(): void {
        if (this.hero) {
            this.heroService.updateHero(this.hero).subscribe(() => this.router.navigateByUrl('/heroes'));
        }
    }

    goBack(): void {
        this.location.back();
    }
}
