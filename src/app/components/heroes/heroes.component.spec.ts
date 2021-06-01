import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROES;
    let mockHeroService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroesComponent ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        HEROES = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
        ];

        mockHeroService = jasmine.createSpyObj([
            'getHeroes',
            'addHero',
            'deleteHero'
        ]);

        component = new HeroesComponent(mockHeroService)
    });

    // it('Should be created', () => {
    //     fixture = TestBed.createComponent(HeroesComponent);

    //     fixture.detectChanges();
    //     component = fixture.componentInstance;

    //     expect(component).toBeTruthy();
    // });

    it('should remove the indicated hero from the list', () => {
        // fixture = TestBed.createComponent(HeroesComponent);
        // fixture.detectChanges();
        // component = fixture.componentInstance;
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.deleteHero(HEROES[5]);

        expect(component.heroes.length).toBe(5);
    });

    it("should call 'deleteHero'", () => {
        // fixture = TestBed.createComponent(HeroesComponent);
        // fixture.detectChanges();
        // component = fixture.componentInstance;
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.deleteHero(HEROES[5]);

        expect(mockHeroService.deleteHero).toHaveBeenCalled();
    });
});
