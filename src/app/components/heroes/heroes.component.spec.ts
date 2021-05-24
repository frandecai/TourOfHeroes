import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROES;

    let mockHeroService;

    beforeEach(async(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes']);

        TestBed.configureTestingModule({
            declarations: [ HeroesComponent ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        fixture.detectChanges();

        HEROES = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
        ];

    });

    it('Should be created', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    describe('getHeroes', () => {
        component = new HeroesComponent(mockHeroService);

        it('should get all the heroes', () => {
            component.heroes = HEROES;

            expect(component.heroes.length).toBe(6);
        })
    })
});
