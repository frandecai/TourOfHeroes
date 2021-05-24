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
    editHero: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private location:Location,
        public heroService: HeroService,
    ) { }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    deleteHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.deleteHero(id);
        this.router.navigateByUrl('/heroes');
    }

    edit(): void {
        this.editHero = !this.editHero;
    }

    goBack(): void {
        this.location.back();
    }
}
