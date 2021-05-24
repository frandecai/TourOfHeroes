import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('Should be created', () => {
        const service: MessageService = TestBed.get(MessageService);
        expect(service).toBeTruthy();
    });
});
