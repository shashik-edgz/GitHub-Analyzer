import { TestBed, inject } from '@angular/core/testing';

import { GithubSerService } from './github-ser.service';

describe('GithubSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubSerService]
    });
  });

  it('should be created', inject([GithubSerService], (service: GithubSerService) => {
    expect(service).toBeTruthy();
  }));
});
