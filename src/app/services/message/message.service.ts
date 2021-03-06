import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    messages: string[][] = [];

    add(id: number, name: string, action: string) {
        let message = [];
        let date: Date = new Date();
        var day = (date.getDay() < 10) ? ('0' + date.getDay()): date.getDay();
        var month = (date.getMonth() < 10) ? ('0' + date.getMonth()): date.getMonth();
        var hours = (date.getHours() < 10) ? ('0' + date.getHours()): date.getHours();
        var minutes = (date.getMinutes() < 10) ? ('0' + date.getMinutes()): date.getMinutes();
        var seconds = (date.getSeconds() < 10) ? ('0' + date.getSeconds()): date.getSeconds();

        message['id'] = id;
        message['name'] = name;
        message['action'] = action;
        message['date'] = day + '/' + month + '/' + date.getFullYear() + ' ' + hours + ":" + minutes + ':' + seconds;
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }

    constructor() {
    }
}
