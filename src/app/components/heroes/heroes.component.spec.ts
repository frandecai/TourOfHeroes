import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroesComponent ],
            imports:[
                RouterTestingModule,
                HttpClientTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it("should display 'LISTS OF HEROES' as title inside a <strong>", () => {
        expect(fixture.nativeElement.querySelector('strong').textContent).toContain('LISTS OF HEROES');
    });
});