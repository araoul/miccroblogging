import { ApiService } from '@botmind-test/api';
import { ActionsService } from '@botmind-test/shared';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ArticleListService } from '../article-list.service';
import { ArticleListEffects } from './article-list.effects';
import { ArticleListFacade } from './article-list.facade';

describe('ArticleListEffects', () => {
  let actions;
  let effects: ArticleListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [
        ArticleListEffects,
        DataPersistence,
        provideMockActions(() => actions),
        ActionsService,
        ArticleListService,
        ApiService,
        ArticleListFacade,
      ],
    });

    effects = TestBed.inject(ArticleListEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(true).toBeTruthy();
    });
  });
});
