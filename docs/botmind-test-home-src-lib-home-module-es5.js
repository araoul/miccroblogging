(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["botmind-test-home-src-lib-home-module"], {
    /***/
    "09O7":
    /*!*************************************************!*\
      !*** ./libs/home/src/lib/+state/home.facade.ts ***!
      \*************************************************/

    /*! exports provided: HomeFacade */

    /***/
    function O7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeFacade", function () {
        return HomeFacade;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _home_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.selectors */
      "ZGVP");
      /* harmony import */


      var _home_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.actions */
      "Fi4X");

      var HomeFacade = /*#__PURE__*/function () {
        function HomeFacade(store) {
          _classCallCheck(this, HomeFacade);

          this.store = store;
          this.home$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_2__["homeQuery"].getHome);
          this.tags$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_2__["homeQuery"].getTags);
        }

        _createClass(HomeFacade, [{
          key: "loadTags",
          value: function loadTags() {
            this.store.dispatch(_home_actions__WEBPACK_IMPORTED_MODULE_3__["loadTags"]());
          }
        }]);

        return HomeFacade;
      }();

      HomeFacade.ɵfac = function HomeFacade_Factory(t) {
        return new (t || HomeFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      HomeFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeFacade,
        factory: HomeFacade.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFacade, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1jZ3":
    /*!*******************************************!*\
      !*** ./libs/home/src/lib/home.service.ts ***!
      \*******************************************/

    /*! exports provided: HomeService */

    /***/
    function jZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/api */
      "A47K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeService = /*#__PURE__*/function () {
        function HomeService(apiService) {
          _classCallCheck(this, HomeService);

          this.apiService = apiService;
        }

        _createClass(HomeService, [{
          key: "getTags",
          value: function getTags() {
            return this.apiService.get('/tags');
          }
        }]);

        return HomeService;
      }();

      HomeService.ɵfac = function HomeService_Factory(t) {
        return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));
      };

      HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HomeService,
        factory: HomeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DmbK":
    /*!************************************************************!*\
      !*** ./libs/home/src/lib/tags-list/tags-list.component.ts ***!
      \************************************************************/

    /*! exports provided: TagsListComponent */

    /***/
    function DmbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsListComponent", function () {
        return TagsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TagsListComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsListComponent_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var tag_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.setListTag.emit(tag_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
        }
      }

      var TagsListComponent = function TagsListComponent() {
        _classCallCheck(this, TagsListComponent);

        this.setListTag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      TagsListComponent.ɵfac = function TagsListComponent_Factory(t) {
        return new (t || TagsListComponent)();
      };

      TagsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TagsListComponent,
        selectors: [["app-tags-list"]],
        inputs: {
          tags: "tags"
        },
        outputs: {
          setListTag: "setListTag"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "tag-list"], ["class", "tag-pill tag-default", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag-pill", "tag-default", 3, "click"]],
        template: function TagsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagsListComponent_a_3_Template, 2, 1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tags-list',
            templateUrl: './tags-list.component.html',
            styleUrls: ['./tags-list.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, {
          tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          setListTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Fi4X":
    /*!**************************************************!*\
      !*** ./libs/home/src/lib/+state/home.actions.ts ***!
      \**************************************************/

    /*! exports provided: loadTags, loadTagsSuccess, loadTagsFail */

    /***/
    function Fi4X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadTags", function () {
        return loadTags;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadTagsSuccess", function () {
        return loadTagsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadTagsFail", function () {
        return loadTagsFail;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var loadTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS');
      var loadTagsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadTagsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "I6fe":
    /*!**************************************************!*\
      !*** ./libs/home/src/lib/+state/home.reducer.ts ***!
      \**************************************************/

    /*! exports provided: homeFeatureKey, homeInitialState, homeReducer */

    /***/
    function I6fe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "homeFeatureKey", function () {
        return homeFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "homeInitialState", function () {
        return homeInitialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "homeReducer", function () {
        return homeReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _home_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.actions */
      "Fi4X");

      var homeFeatureKey = 'home';
      var homeInitialState = {
        tags: []
      };
      var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(homeInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadTagsSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          tags: action.tags
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadTagsFail"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          tags: []
        });
      }));

      function homeReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    "QpK0":
    /*!******************************************!*\
      !*** ./libs/home/src/lib/home.module.ts ***!
      \******************************************/

    /*! exports provided: HomeModule */

    /***/
    function QpK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/article-list */
      "CWEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _state_home_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./+state/home.effects */
      "XREl");
      /* harmony import */


      var _state_home_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./+state/home.facade */
      "09O7");
      /* harmony import */


      var _state_home_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./+state/home.reducer */
      "I6fe");
      /* harmony import */


      var _home_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home-resolver.service */
      "SvAZ");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home.component */
      "jndO");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home.service */
      "1jZ3");
      /* harmony import */


      var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./tags-list/tags-list.component */
      "DmbK");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        providers: [_state_home_effects__WEBPACK_IMPORTED_MODULE_6__["HomeEffects"], _home_resolver_service__WEBPACK_IMPORTED_MODULE_9__["HomeResolverService"], _home_service__WEBPACK_IMPORTED_MODULE_11__["HomeService"], _state_home_facade__WEBPACK_IMPORTED_MODULE_7__["HomeFacade"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
          path: '',
          pathMatch: 'full',
          component: _home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
          resolve: {
            HomeResolverService: _home_resolver_service__WEBPACK_IMPORTED_MODULE_9__["HomeResolverService"]
          }
        }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeFeatureKey"], _state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeReducer"], {
          initialState: _state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeInitialState"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_home_effects__WEBPACK_IMPORTED_MODULE_6__["HomeEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_12__["TagsListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
              path: '',
              pathMatch: 'full',
              component: _home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
              resolve: {
                HomeResolverService: _home_resolver_service__WEBPACK_IMPORTED_MODULE_9__["HomeResolverService"]
              }
            }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeFeatureKey"], _state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeReducer"], {
              initialState: _state_home_reducer__WEBPACK_IMPORTED_MODULE_8__["homeInitialState"]
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_home_effects__WEBPACK_IMPORTED_MODULE_6__["HomeEffects"]])],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_12__["TagsListComponent"]],
            providers: [_state_home_effects__WEBPACK_IMPORTED_MODULE_6__["HomeEffects"], _home_resolver_service__WEBPACK_IMPORTED_MODULE_9__["HomeResolverService"], _home_service__WEBPACK_IMPORTED_MODULE_11__["HomeService"], _state_home_facade__WEBPACK_IMPORTED_MODULE_7__["HomeFacade"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SvAZ":
    /*!****************************************************!*\
      !*** ./libs/home/src/lib/home-resolver.service.ts ***!
      \****************************************************/

    /*! exports provided: HomeResolverService */

    /***/
    function SvAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeResolverService", function () {
        return HomeResolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _state_home_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./+state/home.facade */
      "09O7");

      var HomeResolverService = /*#__PURE__*/function () {
        function HomeResolverService(facade) {
          _classCallCheck(this, HomeResolverService);

          this.facade = facade;
        }

        _createClass(HomeResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            this.facade.loadTags();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
          }
        }]);

        return HomeResolverService;
      }();

      HomeResolverService.ɵfac = function HomeResolverService_Factory(t) {
        return new (t || HomeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_home_facade__WEBPACK_IMPORTED_MODULE_2__["HomeFacade"]));
      };

      HomeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeResolverService,
        factory: HomeResolverService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _state_home_facade__WEBPACK_IMPORTED_MODULE_2__["HomeFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XREl":
    /*!**************************************************!*\
      !*** ./libs/home/src/lib/+state/home.effects.ts ***!
      \**************************************************/

    /*! exports provided: HomeEffects */

    /***/
    function XREl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEffects", function () {
        return HomeEffects;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "1jZ3");
      /* harmony import */


      var _home_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.actions */
      "Fi4X");

      var HomeEffects = function HomeEffects(actions$, homeService) {
        var _this = this;

        _classCallCheck(this, HomeEffects);

        this.actions$ = actions$;
        this.homeService = homeService;
        this.loadTags$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTags"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.homeService.getTags().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
              return _home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTagsSuccess"]({
                tags: results.tags
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTagsFail"](error));
            }));
          }));
        });
      };

      HomeEffects.ɵfac = function HomeEffects_Factory(t) {
        return new (t || HomeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]));
      };

      HomeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeEffects,
        factory: HomeEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
          }, {
            type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZGVP":
    /*!****************************************************!*\
      !*** ./libs/home/src/lib/+state/home.selectors.ts ***!
      \****************************************************/

    /*! exports provided: getHome, getTags, homeQuery */

    /***/
    function ZGVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getHome", function () {
        return getHome;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTags", function () {
        return getTags;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "homeQuery", function () {
        return homeQuery;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.reducer */
      "I6fe");

      var getHome = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_home_reducer__WEBPACK_IMPORTED_MODULE_1__["homeFeatureKey"]);
      var getTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHome, function (state) {
        return state.tags;
      });
      var homeQuery = {
        getTags: getTags,
        getHome: getHome
      };
      /***/
    },

    /***/
    "jndO":
    /*!*********************************************!*\
      !*** ./libs/home/src/lib/home.component.ts ***!
      \*********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function jndO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @botmind-test/article-list */
      "CWEr");
      /* harmony import */


      var _botmind_test_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @botmind-test/auth */
      "gy9y");
      /* harmony import */


      var _state_home_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./+state/home.facade */
      "09O7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _article_list_src_lib_article_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../article-list/src/lib/article-list.component */
      "qm0p");
      /* harmony import */


      var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tags-list/tags-list.component */
      "DmbK");

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(facade, router, articleListFacade, authFacade) {
          _classCallCheck(this, HomeComponent);

          this.facade = facade;
          this.router = router;
          this.articleListFacade = articleListFacade;
          this.authFacade = authFacade;
          this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authFacade.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (isLoggedIn) {
              _this2.isAuthenticated = isLoggedIn;

              _this2.getArticles();
            });
            this.listConfig$ = this.articleListFacade.listConfig$;
            this.tags$ = this.facade.tags$;
          }
        }, {
          key: "setListTo",
          value: function setListTo() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';
            this.articleListFacade.setListConfig(Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__["articleListInitialState"].listConfig), {
              type: type
            }));
          }
        }, {
          key: "getArticles",
          value: function getArticles() {
            if (this.isAuthenticated) {
              this.setListTo('FEED');
            } else {
              this.setListTo('ALL');
            }
          }
        }, {
          key: "setListTag",
          value: function setListTag(tag) {
            this.articleListFacade.setListConfig(Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__["articleListInitialState"].listConfig), {
              filters: Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__["articleListInitialState"].listConfig.filters), {
                tag: tag
              })
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_home_facade__WEBPACK_IMPORTED_MODULE_6__["HomeFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__["ArticleListFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_botmind_test_auth__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 32,
        vars: 21,
        consts: [[1, "home-page"], [1, "banner"], [1, "container"], [1, "logo-font"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "nav-item", 3, "hidden"], [1, "nav-link", "active"], [1, "ion-pound"], [1, "col-md-3"], [1, "sidebar"], [3, "tags", "setListTag"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "microblogging");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "A place to share your knowledge.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_13_listener() {
              return ctx.setListTo("FEED");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Your Feed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_17_listener() {
              return ctx.setListTo("ALL");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Global Feed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "app-article-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-tags-list", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("setListTag", function HomeComponent_Template_app_tags_list_setListTag_30_listener($event) {
              return ctx.setListTag($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var tmp_1_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 5, ctx.listConfig$)) == null ? null : tmp_0_0.type) === "FEED"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 7, ctx.listConfig$)) == null ? null : tmp_1_0.type) === "ALL" && !(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.listConfig$).filters == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.listConfig$).filters.tag)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 11, ctx.listConfig$).filters == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 11, ctx.listConfig$).filters.tag));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 13, ctx.listConfig$).filters == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 13, ctx.listConfig$).filters.tag, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 15, ctx.tags$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _article_list_src_lib_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_9__["TagsListComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.tag-pill[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFnLXBpbGwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _state_home_facade__WEBPACK_IMPORTED_MODULE_6__["HomeFacade"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_4__["ArticleListFacade"]
          }, {
            type: _botmind_test_auth__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=botmind-test-home-src-lib-home-module-es5.js.map