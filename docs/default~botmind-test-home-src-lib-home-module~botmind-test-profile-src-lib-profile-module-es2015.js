(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~botmind-test-home-src-lib-home-module~botmind-test-profile-src-lib-profile-module"],{

/***/ "2Mw2":
/*!**********************************!*\
  !*** ./libs/shared/src/index.ts ***!
  \**********************************/
/*! exports provided: SharedModule, ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared.module */ "ZUmW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _lib_actions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/actions.service */ "GgeP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return _lib_actions_service__WEBPACK_IMPORTED_MODULE_1__["ActionsService"]; });





/***/ }),

/***/ "76Dv":
/*!********************************************************************!*\
  !*** ./libs/article-list/src/lib/+state/article-list.selectors.ts ***!
  \********************************************************************/
/*! exports provided: getListConfig, getArticles, getArticlesCount, isLoading, articleListQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListConfig", function() { return getListConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticlesCount", function() { return getArticlesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListQuery", function() { return articleListQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.reducer */ "hZaa");


const getArticleList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListFeatureKey"]);
const getListConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, (state) => state.listConfig);
const getArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, (state) => state.articles.entities);
const getArticlesCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, (state) => state.articles.articlesCount);
const isLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, (state) => state.articles.loading);
const articleListQuery = {
    getListConfig,
    getArticles,
    getArticlesCount,
    isLoading,
};


/***/ }),

/***/ "CWEr":
/*!****************************************!*\
  !*** ./libs/article-list/src/index.ts ***!
  \****************************************/
/*! exports provided: ArticleListModule, articleListFeatureKey, articleListInitialState, articleListReducer, setListPage, setListConfig, loadArticles, loadArticlesSuccess, loadArticlesFail, favorite, favoriteSuccess, favoriteFail, unFavorite, unFavoriteSuccess, unFavoriteFail, ArticleListFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_article_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/article-list.module */ "wdw5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListModule", function() { return _lib_article_list_module__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"]; });

/* harmony import */ var _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/article-list.reducer */ "hZaa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleListFeatureKey", function() { return _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleListInitialState", function() { return _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleListReducer", function() { return _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListReducer"]; });

/* harmony import */ var _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/article-list.actions */ "r9Q6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setListPage", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["setListPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setListConfig", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["setListConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticles", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlesSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticlesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlesFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticlesFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favorite", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["favorite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favoriteSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["favoriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favoriteFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["favoriteFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unFavorite", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["unFavorite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unFavoriteSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["unFavoriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unFavoriteFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["unFavoriteFail"]; });

/* harmony import */ var _lib_state_article_list_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/article-list.facade */ "j47y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListFacade", function() { return _lib_state_article_list_facade__WEBPACK_IMPORTED_MODULE_3__["ArticleListFacade"]; });







/***/ }),

/***/ "GgeP":
/*!************************************************!*\
  !*** ./libs/shared/src/lib/actions.service.ts ***!
  \************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/api */ "A47K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ActionsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    followUser(username) {
        return this.apiService.post('/profiles/' + username + '/follow', null);
    }
    unfollowUser(username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    }
    favorite(slug) {
        return this.apiService.post('/articles/' + slug + '/favorite', null);
    }
    unfavorite(slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    }
}
ActionsService.ɵfac = function ActionsService_Factory(t) { return new (t || ActionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
ActionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionsService, factory: ActionsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "ZUmW":
/*!**********************************************!*\
  !*** ./libs/shared/src/lib/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pager/pager.component */ "nihT");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.service */ "GgeP");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"]],
                exports: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"]],
                providers: [_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hZaa":
/*!******************************************************************!*\
  !*** ./libs/article-list/src/lib/+state/article-list.reducer.ts ***!
  \******************************************************************/
/*! exports provided: articleListFeatureKey, articleListInitialState, articleListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListFeatureKey", function() { return articleListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListInitialState", function() { return articleListInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListReducer", function() { return articleListReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.actions */ "r9Q6");


const articleListFeatureKey = 'articles-list';
const articleListInitialState = {
    listConfig: {
        type: 'ALL',
        currentPage: 1,
        filters: {
            limit: 10,
        },
    },
    articles: {
        entities: [],
        articlesCount: 0,
        loaded: false,
        loading: false,
    },
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(articleListInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["setListPage"], (state, action) => {
    const filters = Object.assign(Object.assign({}, state.listConfig.filters), { offset: state.listConfig.filters.limit * (action.page - 1) });
    const listConfig = Object.assign(Object.assign({}, state.listConfig), { currentPage: action.page, filters });
    return Object.assign(Object.assign({}, state), { listConfig });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["setListConfig"], (state, action) => (Object.assign(Object.assign({}, state), { listConfig: action.config }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticles"], (state, _) => {
    const articles = Object.assign(Object.assign({}, state.articles), { loading: true });
    return Object.assign(Object.assign({}, state), { articles });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticlesSuccess"], (state, action) => {
    const articles = Object.assign(Object.assign({}, state.articles), { entities: action.articles, articlesCount: action.articlesCount, loading: false, loaded: true });
    return Object.assign(Object.assign({}, state), { articles });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticlesFail"], (state, _) => {
    const articles = Object.assign(Object.assign({}, state.articles), { entities: [], articlesCount: 0, loading: false, loaded: true });
    return Object.assign(Object.assign({}, state), { articles });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_1__["unFavoriteSuccess"], _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["favoriteSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { articles: replaceArticle(state.articles, action.article) }))));
function replaceArticle(articles, payload) {
    const articleIndex = articles.entities.findIndex((a) => a.slug === payload.slug);
    const entities = [
        ...articles.entities.slice(0, articleIndex),
        Object.assign({}, articles.entities[articleIndex], payload),
        ...articles.entities.slice(articleIndex + 1),
    ];
    return Object.assign(Object.assign({}, articles), { entities, loading: false, loaded: true });
}
function articleListReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "j47y":
/*!*****************************************************************!*\
  !*** ./libs/article-list/src/lib/+state/article-list.facade.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleListFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListFacade", function() { return ArticleListFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_list_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list.selectors */ "76Dv");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-list.actions */ "r9Q6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @botmind-test/ngrx-router */ "EdWO");








class ArticleListFacade {
    constructor(store) {
        this.store = store;
        this.articles$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_2__["articleListQuery"].getArticles);
        this.listConfig$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_2__["articleListQuery"].getListConfig);
        this.isLoading$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_2__["articleListQuery"].isLoading);
        this.articlesCount$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_2__["articleListQuery"].getArticlesCount);
        this.totalPages$ = this.articlesCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.listConfig$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([articlesCount, config]) => {
            return Array.from(new Array(Math.ceil(articlesCount / config.filters.limit)), (val, index) => index + 1);
        }));
    }
    favorite(slug) {
        this.store.dispatch(_article_list_actions__WEBPACK_IMPORTED_MODULE_3__["favorite"]({ slug }));
    }
    unFavorite(slug) {
        this.store.dispatch(_article_list_actions__WEBPACK_IMPORTED_MODULE_3__["unFavorite"]({ slug }));
    }
    navigateToArticle(slug) {
        this.store.dispatch(Object(_botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_5__["go"])({ to: { path: ['/article', slug] } }));
    }
    setPage(page) {
        this.store.dispatch(_article_list_actions__WEBPACK_IMPORTED_MODULE_3__["setListPage"]({ page }));
    }
    setListConfig(config) {
        this.store.dispatch(_article_list_actions__WEBPACK_IMPORTED_MODULE_3__["setListConfig"]({ config }));
    }
}
ArticleListFacade.ɵfac = function ArticleListFacade_Factory(t) { return new (t || ArticleListFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ArticleListFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleListFacade, factory: ArticleListFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "nihT":
/*!******************************************************!*\
  !*** ./libs/shared/src/lib/pager/pager.component.ts ***!
  \******************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { active: a0 }; };
function PagerComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pageNumber_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setPage.emit(pageNumber_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, pageNumber_r1 === ctx_r0.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pageNumber_r1);
} }
class PagerComponent {
    constructor() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["app-pager"]], inputs: { currentPage: "currentPage", totalPages: "totalPages" }, outputs: { setPage: "setPage" }, decls: 2, vars: 1, consts: [[1, "pagination"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagerComponent_li_1_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".page-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InBhZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pager',
                templateUrl: './pager.component.html',
                styleUrls: ['./pager.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "or8u":
/*!***********************************************************!*\
  !*** ./libs/article-list/src/lib/article-list.service.ts ***!
  \***********************************************************/
/*! exports provided: ArticleListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListService", function() { return ArticleListService; });
/* harmony import */ var _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/api */ "A47K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ArticleListService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    query(config) {
        return this.apiService.get('/articles' + (config.type === 'FEED' ? '/feed' : ''), this.toHttpParams(config.filters));
    }
    toHttpParams(params) {
        return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]());
    }
}
ArticleListService.ɵfac = function ArticleListService_Factory(t) { return new (t || ArticleListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
ArticleListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ArticleListService, factory: ArticleListService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ArticleListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "qm0p":
/*!*************************************************************!*\
  !*** ./libs/article-list/src/lib/article-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_article_list_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/article-list.facade */ "j47y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_src_lib_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/src/lib/pager/pager.component */ "nihT");
/* harmony import */ var _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-list-item/article-list-item.component */ "qseP");







function ArticleListComponent_app_article_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("navigateToArticle", function ArticleListComponent_app_article_list_item_7_Template_app_article_list_item_navigateToArticle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateToArticle($event); })("unFavorite", function ArticleListComponent_app_article_list_item_7_Template_app_article_list_item_unFavorite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.unFavorite($event); })("favorite", function ArticleListComponent_app_article_list_item_7_Template_app_article_list_item_favorite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.favorite($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r0.isLoading$))("article", article_r1);
} }
class ArticleListComponent {
    constructor(facade) {
        this.facade = facade;
    }
    ngOnInit() {
        this.totalPages$ = this.facade.totalPages$;
        this.articles$ = this.facade.articles$;
        this.listConfig$ = this.facade.listConfig$;
        this.isLoading$ = this.facade.isLoading$;
    }
    favorite(slug) {
        this.facade.favorite(slug);
    }
    unFavorite(slug) {
        this.facade.unFavorite(slug);
    }
    navigateToArticle(slug) {
        this.facade.navigateToArticle(slug);
    }
    setPage(page) {
        this.facade.setPage(page);
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_article_list_facade__WEBPACK_IMPORTED_MODULE_1__["ArticleListFacade"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 14, vars: 22, consts: [[1, "app-article-preview", 3, "hidden"], [3, "hidden", "article", "navigateToArticle", "unFavorite", "favorite", 4, "ngFor", "ngForOf"], [3, "hidden", "currentPage", "totalPages", "setPage"], [3, "hidden", "article", "navigateToArticle", "unFavorite", "favorite"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading articles...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " No articles are here... yet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticleListComponent_app_article_list_item_7_Template, 2, 4, "app-article-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-pager", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPage", function ArticleListComponent_Template_app_pager_setPage_9_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.isLoading$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isLoading$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.articles$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, ctx.articles$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, ctx.totalPages$)) == null ? null : tmp_3_0.length) <= 1 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 16, ctx.isLoading$))("currentPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, ctx.listConfig$).currentPage)("totalPages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx.totalPages$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_src_lib_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"], _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ArticleListItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".app-article-preview[_ngcontent-%COMP%] {\r\n  margin-top: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1hcnRpY2xlLXByZXZpZXcge1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _state_article_list_facade__WEBPACK_IMPORTED_MODULE_1__["ArticleListFacade"] }]; }, null); })();


/***/ }),

/***/ "qseP":
/*!************************************************************************************!*\
  !*** ./libs/article-list/src/lib/article-list-item/article-list-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: ArticleListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListItemComponent", function() { return ArticleListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ArticleListItemComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
} }
const _c0 = function (a1) { return ["/profile", a1]; };
const _c1 = function (a0, a1) { return { "btn-outline-primary": a0, "btn-primary": a1 }; };
class ArticleListItemComponent {
    constructor() {
        this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigateToArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleFavorite(article) {
        if (article.favorited) {
            this.unFavorite.emit(article.slug);
        }
        else {
            this.favorite.emit(article.slug);
        }
    }
}
ArticleListItemComponent.ɵfac = function ArticleListItemComponent_Factory(t) { return new (t || ArticleListItemComponent)(); };
ArticleListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListItemComponent, selectors: [["app-article-list-item"]], inputs: { article: "article" }, outputs: { favorite: "favorite", unFavorite: "unFavorite", navigateToArticle: "navigateToArticle" }, decls: 23, vars: 17, consts: [[1, "article-preview"], [1, "article-meta"], [3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"], [1, "btn", "btn-sm", "pull-xs-right", 3, "ngClass", "click"], [1, "ion-heart"], [1, "preview-link", 3, "click"], ["data-e2e-id", "article-list-title"], [1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", "tag-outline"]], template: function ArticleListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleListItemComponent_Template_button_click_10_listener() { return ctx.toggleFavorite(ctx.article); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleListItemComponent_Template_a_click_14_listener() { return ctx.navigateToArticle.emit(ctx.article.slug); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Read more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ArticleListItemComponent_li_22_Template, 2, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.article.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.author.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, ctx.article.createdAt, "longDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, !ctx.article.favorited, ctx.article.favorited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.favoritesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.article.tagList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list-item',
                templateUrl: './article-list-item.component.html',
                styleUrls: ['./article-list-item.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], favorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unFavorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], navigateToArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "r9Q6":
/*!******************************************************************!*\
  !*** ./libs/article-list/src/lib/+state/article-list.actions.ts ***!
  \******************************************************************/
/*! exports provided: setListPage, setListConfig, loadArticles, loadArticlesSuccess, loadArticlesFail, favorite, favoriteSuccess, favoriteFail, unFavorite, unFavoriteSuccess, unFavoriteFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListPage", function() { return setListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListConfig", function() { return setListConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticles", function() { return loadArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesSuccess", function() { return loadArticlesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesFail", function() { return loadArticlesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favorite", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteSuccess", function() { return favoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteFail", function() { return favoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavorite", function() { return unFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavoriteSuccess", function() { return unFavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavoriteFail", function() { return unFavoriteFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setListPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] SET_LIST_PAGE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setListConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] SET_LIST_CONFIG', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] LOAD_ARTICLES');
const loadArticlesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] LOAD_ARTICLES_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadArticlesFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] LOAD_ARTICLES_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] FAVORITE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favoriteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] FAVORITE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favoriteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] FAVORITE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] UNFAVORITE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavoriteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] UNFAVORITE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavoriteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article-list] UNFAVORITE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "uQvJ":
/*!******************************************************************!*\
  !*** ./libs/article-list/src/lib/+state/article-list.effects.ts ***!
  \******************************************************************/
/*! exports provided: ArticleListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListEffects", function() { return ArticleListEffects; });
/* harmony import */ var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/shared */ "2Mw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _article_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article-list.service */ "or8u");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-list.actions */ "r9Q6");
/* harmony import */ var _article_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-list.facade */ "j47y");













class ArticleListEffects {
    constructor(actions$, articleListService, actionsService, facade) {
        this.actions$ = actions$;
        this.articleListService = articleListService;
        this.actionsService = actionsService;
        this.facade = facade;
        this.setListPage = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["setListPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => _article_list_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticles"]())));
        this.setListTag = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["setListConfig"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => _article_list_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticles"]())));
        this.loadArticles = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.facade.listConfig$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(([_, config]) => this.articleListService.query(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((results) => _article_list_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticlesSuccess"]({
            articles: results.articles,
            articlesCount: results.articlesCount,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticlesFail"]({ error })))))));
        this.favorite = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["favorite"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.slug), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((slug) => this.actionsService.favorite(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => _article_list_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteSuccess"]({ article: response.article })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteFail"](error)))))));
        this.unFavorite = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["unFavorite"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.slug), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((slug) => this.actionsService.unfavorite(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => _article_list_actions__WEBPACK_IMPORTED_MODULE_6__["unFavoriteSuccess"]({ article: response.article })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_article_list_actions__WEBPACK_IMPORTED_MODULE_6__["unFavoriteFail"](error)))))));
    }
}
ArticleListEffects.ɵfac = function ArticleListEffects_Factory(t) { return new (t || ArticleListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_article_list_service__WEBPACK_IMPORTED_MODULE_5__["ArticleListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["ActionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_article_list_facade__WEBPACK_IMPORTED_MODULE_7__["ArticleListFacade"])); };
ArticleListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticleListEffects, factory: ArticleListEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _article_list_service__WEBPACK_IMPORTED_MODULE_5__["ArticleListService"] }, { type: _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["ActionsService"] }, { type: _article_list_facade__WEBPACK_IMPORTED_MODULE_7__["ArticleListFacade"] }]; }, null); })();


/***/ }),

/***/ "wdw5":
/*!**********************************************************!*\
  !*** ./libs/article-list/src/lib/article-list.module.ts ***!
  \**********************************************************/
/*! exports provided: ArticleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListModule", function() { return ArticleListModule; });
/* harmony import */ var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/shared */ "2Mw2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_article_list_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/article-list.effects */ "uQvJ");
/* harmony import */ var _state_article_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/article-list.facade */ "j47y");
/* harmony import */ var _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/article-list.reducer */ "hZaa");
/* harmony import */ var _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-list-item/article-list-item.component */ "qseP");
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-list.component */ "qm0p");
/* harmony import */ var _article_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-list.service */ "or8u");















class ArticleListModule {
}
ArticleListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ArticleListModule });
ArticleListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ArticleListModule_Factory(t) { return new (t || ArticleListModule)(); }, providers: [_article_list_service__WEBPACK_IMPORTED_MODULE_11__["ArticleListService"], _state_article_list_effects__WEBPACK_IMPORTED_MODULE_6__["ArticleListEffects"], _state_article_list_facade__WEBPACK_IMPORTED_MODULE_7__["ArticleListFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListFeatureKey"], _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListReducer"], {
                initialState: _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_article_list_effects__WEBPACK_IMPORTED_MODULE_6__["ArticleListEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ArticleListModule, { declarations: [_article_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListComponent"], _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]], exports: [_article_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ArticleListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListFeatureKey"], _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListReducer"], {
                        initialState: _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_8__["articleListInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_article_list_effects__WEBPACK_IMPORTED_MODULE_6__["ArticleListEffects"]]),
                ],
                declarations: [_article_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListComponent"], _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListItemComponent"]],
                providers: [_article_list_service__WEBPACK_IMPORTED_MODULE_11__["ArticleListService"], _state_article_list_effects__WEBPACK_IMPORTED_MODULE_6__["ArticleListEffects"], _state_article_list_facade__WEBPACK_IMPORTED_MODULE_7__["ArticleListFacade"]],
                exports: [_article_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~botmind-test-home-src-lib-home-module~botmind-test-profile-src-lib-profile-module-es2015.js.map