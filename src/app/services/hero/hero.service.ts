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
        let date: Date = new Date();
        var day = (date.getDay() < 10) ? ('0' + date.getDay()): date.getDay();
        var month = (date.getMonth() < 10) ? ('0' + date.getMonth()): date.getMonth();
        var hours = (date.getHours() < 10) ? ('0' + date.getHours()): date.getHours();
        var minutes = (date.getMinutes() < 10) ? ('0' + date.getMinutes()): date.getMinutes();
        var seconds = (date.getSeconds() < 10) ? ('0' + date.getSeconds()): date.getSeconds();

        const hero = HEROES.find(h => h.id === id) as HeroInterface;
        this.messageService.add(`HeroService: fetched hero id=${id}` +
                                ' (added ' + day + '/' + month + '/' + date.getFullYear() + ' ' +
                                hours + ":" + minutes + ':' + seconds + ')');
        return of(hero);
    }
}
