import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';
import { HeroInterface } from '../../interfaces/hero.interface';
import { HEROES } from '../../mocks/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<HeroInterface[]> {
        const heroes = of(HEROES);
        //this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }

    getHero(id: number): Observable<HeroInterface> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.

        const hero = HEROES.find(h => h.id === id) as HeroInterface;
        this.messageService.add(hero.id, hero.name);
        return of(hero);
    }
}
