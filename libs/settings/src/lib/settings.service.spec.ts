import { TestBed, inject } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { ApiService } from '@botmind-test/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingsService, ApiService],
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
