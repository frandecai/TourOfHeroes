import { Component, OnInit } from '@angular/core';

import { MessageService } from './services/message/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tour Of Heroes';
    dashboardActive: boolean = true;
    heroesActive: boolean = false;
    logActive: boolean = false;

    constructor(
        public messageService: MessageService
    ) { }

    clickDashboard(){
        this.dashboardActive = true;
        this.heroesActive = false;
        this.logActive = false;
    }

    clickHeroes(){
        this.dashboardActive = false;
        this.heroesActive = true;
        this.logActive = false;
    }

    clickLog(){
        this.dashboardActive = false;
        this.heroesActive = false;
        this.logActive = true;
    }

    ngOnInit() {

    }
}
