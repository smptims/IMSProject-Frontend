import { TestBed } from '@angular/core/testing';

import { EmailProvider } from './email.service';

describe('EmailProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailProvider = TestBed.get(EmailProvider);
    expect(service).toBeTruthy();
  });
});
