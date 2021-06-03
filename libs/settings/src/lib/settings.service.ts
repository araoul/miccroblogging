import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, User, UserResponse } from '@botmind-test/api';
import { UpdateUserRequest } from '@botmind-test/settings/settings.interfaces';

@Injectable()
export class SettingsService {
  constructor(private apiService: ApiService) {}

  update(user: User): Observable<UserResponse> {
    return this.apiService.put<UserResponse, UpdateUserRequest>('/user', { user });
  }
}
