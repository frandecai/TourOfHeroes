import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from '../../services/message/message.service';
import { HeroInterface } from '../../interfaces/hero.interface';

const mockData = [
    { id: 1, name: 'Hulk' },
    { id: 2, name: 'Thor' },
    { id: 3, name: 'Iron Man' }
] as HeroInterface[];

describe('HeroService', () => {
    let heroService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [HeroService, MessageService]
        });

        heroService = TestBed.get(HeroService);
      });

    it('Should be created', () => {
        const service: HeroService = TestBed.get(HeroService);
        expect(service).toBeTruthy();
    });
});
