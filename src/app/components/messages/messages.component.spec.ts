import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
    let component: MessagesComponent;
    let fixture: ComponentFixture<MessagesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MessagesComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
    });

    it('should be created', () => {
        fixture = TestBed.createComponent(MessagesComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        expect(component).toBeTruthy();
    });
});
