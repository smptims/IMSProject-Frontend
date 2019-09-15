import { TestBed } from '@angular/core/testing';
import { ImageProvider } from '../send-mail/image.service';

describe('ImageProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageProvider = TestBed.get(ImageProvider);
    expect(service).toBeTruthy();
  });
});
