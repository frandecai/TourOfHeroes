import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { HEROES } from '../../mocks/heroes.mock';
import { HeroService } from '../../services/hero/hero.service'

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    let heroService;
    let getHeroesSpy;

    beforeEach(async(() => {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );

        TestBed.configureTestingModule({
            declarations: [ DashboardComponent ],
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                { provide: HeroService, useValue: heroService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should display "TOP HEROES" as headline', () => {
        expect(fixture.nativeElement.querySelector('strong').textContent).toEqual('TOP HEROES');
    });

    it('Should call heroService', async(() => {
        expect(getHeroesSpy.calls.any()).toBe(true);
    }));
});
