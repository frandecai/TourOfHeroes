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

        return heroes;
    }

    getHero(id: number): Observable<HeroInterface> {
        const hero = HEROES.find(h => h.id === id) as HeroInterface;
        this.messageService.add(hero.id, hero.name, 'Select');
        return of(hero);
    }

    deleteHero(id: number) {
        let i = HEROES.findIndex(function(hero) {
            return hero.id == id;
        });
        this.messageService.add(HEROES[i].id, HEROES[i].name, 'Delete');
        HEROES.splice(i, 1);

        return HEROES;
    }

    addHero(name: string) {
        let maxId: number = 0;
        let newHero: HeroInterface;
        for (let i = 0; i < HEROES.length; i++) {
            if (HEROES[i].id > maxId) {
                maxId = HEROES[i].id;
            }
        }

        newHero = {'id': ++maxId, 'name': name};
        HEROES.push(newHero)

        return HEROES;
    }
}
