import { TestBed, inject } from '@angular/core/testing';

import { FavoriteWebsitesService } from './favorite-websites.service';

describe('FavoriteWebsitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteWebsitesService]
    });
  });

  it('should be created', inject([FavoriteWebsitesService], (service: FavoriteWebsitesService) => {
    expect(service).toBeTruthy();
  }));
});
