import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        service = TestBed.get(MessageService);

        expect(service).toBeTruthy();
    });

    it('should have no messages at the beginning', () => {
        service = TestBed.get(MessageService);

        expect(service.messages.length).toBe(0);
    });

    it("should add a message when a message 'add' is called", () => {
        service = TestBed.get(MessageService);

        service.add(null, null, "test message")

        expect(service.messages.length).toBe(1);
    });

    it("should remove all messages when 'clear' is called", () => {
        service = TestBed.get(MessageService);
        service.add(null, null, "test message")

        service.clear();

        expect(service.messages.length).toBe(0);
    });
});
