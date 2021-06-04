(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["botmind-test-editor-src-lib-editor-module"], {
    /***/
    "3ecJ":
    /*!************************************************************************!*\
      !*** ./libs/editor/src/lib/article-editor/article-editor.component.ts ***!
      \************************************************************************/

    /*! exports provided: ArticleEditorComponent */

    /***/
    function ecJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleEditorComponent", function () {
        return ArticleEditorComponent;
      });
      /* harmony import */


      var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/ngrx-forms */
      "AxuA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _state_editor_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../+state/editor.facade */
      "KmHh");
      /* harmony import */


      var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */
      "T7Fx");
      /* harmony import */


      var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */
      "5W4/");

      var structure = [{
        type: 'INPUT',
        name: 'title',
        placeholder: 'Article Title',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
      }, {
        type: 'INPUT',
        name: 'description',
        placeholder: "What's this article about?",
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
      }, {
        type: 'TEXTAREA',
        name: 'body',
        placeholder: 'Write your article (in markdown)',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
      }, {
        type: 'INPUT',
        name: 'tagList',
        placeholder: 'Enter Tags',
        validator: []
      }];

      var ArticleEditorComponent = /*#__PURE__*/function () {
        function ArticleEditorComponent(ngrxFormsFacade, router, facade) {
          _classCallCheck(this, ArticleEditorComponent);

          this.ngrxFormsFacade = ngrxFormsFacade;
          this.router = router;
          this.facade = facade;
        }

        _createClass(ArticleEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ngrxFormsFacade.setStructure(structure);
            this.data$ = this.ngrxFormsFacade.data$;
            this.structure$ = this.ngrxFormsFacade.structure$;
            this.facade.article$.subscribe(function (article) {
              return _this.ngrxFormsFacade.setData(article);
            });
          }
        }, {
          key: "updateForm",
          value: function updateForm(changes) {
            this.ngrxFormsFacade.updateData(changes);
          }
        }, {
          key: "submit",
          value: function submit() {
            this.facade.publishArticle();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngrxFormsFacade.initializeForm();
            this.facade.initializeArticle();
          }
        }]);

        return ArticleEditorComponent;
      }();

      ArticleEditorComponent.ɵfac = function ArticleEditorComponent_Factory(t) {
        return new (t || ArticleEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_editor_facade__WEBPACK_IMPORTED_MODULE_4__["EditorFacade"]));
      };

      ArticleEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ArticleEditorComponent,
        selectors: [["app-article-editor"]],
        decls: 8,
        vars: 2,
        consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "data$", "structure$", "updateForm"], ["type", "button", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "click"]],
        template: function ArticleEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-list-errors");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-dynamic-form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updateForm", function ArticleEditorComponent_Template_app_dynamic_form_updateForm_5_listener($event) {
              return ctx.updateForm($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleEditorComponent_Template_button_click_6_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Publish Article ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$);
          }
        },
        directives: [_ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-article-editor',
            templateUrl: './article-editor.component.html',
            styleUrls: ['./article-editor.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _state_editor_facade__WEBPACK_IMPORTED_MODULE_4__["EditorFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CRCv":
    /*!**********************************************!*\
      !*** ./libs/editor/src/lib/editor.module.ts ***!
      \**********************************************/

    /*! exports provided: EditorModule */

    /***/
    function CRCv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
        return EditorModule;
      });
      /* harmony import */


      var _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/auth */
      "gy9y");
      /* harmony import */


      var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @botmind-test/ngrx-forms */
      "AxuA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _state_editor_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./+state/editor.effects */
      "Ga/r");
      /* harmony import */


      var _state_editor_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./+state/editor.facade */
      "KmHh");
      /* harmony import */


      var _state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./+state/editor.reducer */
      "xL1S");
      /* harmony import */


      var _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./article-editor/article-editor.component */
      "3ecJ");
      /* harmony import */


      var _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./editor-resolver.service */
      "HZXb");
      /* harmony import */


      var _editor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./editor.service */
      "yiKi");

      var EditorModule = function EditorModule() {
        _classCallCheck(this, EditorModule);
      };

      EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: EditorModule
      });
      EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function EditorModule_Factory(t) {
          return new (t || EditorModule)();
        },
        providers: [_state_editor_effects__WEBPACK_IMPORTED_MODULE_7__["EditorEffects"], _editor_service__WEBPACK_IMPORTED_MODULE_12__["EditorService"], _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"], _state_editor_facade__WEBPACK_IMPORTED_MODULE_8__["EditorFacade"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          pathMatch: 'full',
          component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"],
          resolve: {
            EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"]
          },
          canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
        }, {
          path: ':slug',
          component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"],
          resolve: {
            EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"]
          }
        }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorFeatureKey"], _state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorReducer"], {
          initialState: _state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorInitialState"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_editor_effects__WEBPACK_IMPORTED_MODULE_7__["EditorEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditorModule, {
          declarations: [_article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
              path: '',
              pathMatch: 'full',
              component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"],
              resolve: {
                EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"]
              },
              canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
            }, {
              path: ':slug',
              component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"],
              resolve: {
                EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"]
              }
            }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorFeatureKey"], _state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorReducer"], {
              initialState: _state_editor_reducer__WEBPACK_IMPORTED_MODULE_9__["editorInitialState"]
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_editor_effects__WEBPACK_IMPORTED_MODULE_7__["EditorEffects"]])],
            declarations: [_article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_10__["ArticleEditorComponent"]],
            providers: [_state_editor_effects__WEBPACK_IMPORTED_MODULE_7__["EditorEffects"], _editor_service__WEBPACK_IMPORTED_MODULE_12__["EditorService"], _editor_resolver_service__WEBPACK_IMPORTED_MODULE_11__["EditorResolverService"], _state_editor_facade__WEBPACK_IMPORTED_MODULE_8__["EditorFacade"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ga/r":
    /*!******************************************************!*\
      !*** ./libs/editor/src/lib/+state/editor.effects.ts ***!
      \******************************************************/

    /*! exports provided: EditorEffects */

    /***/
    function GaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorEffects", function () {
        return EditorEffects;
      });
      /* harmony import */


      var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/ngrx-forms */
      "AxuA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../editor.service */
      "yiKi");
      /* harmony import */


      var _editor_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editor.actions */
      "Qzj8");
      /* harmony import */


      var _botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @botmind-test/ngrx-router */
      "EdWO");

      var EditorEffects = function EditorEffects(actions$, ngrxFormsFacade, editorService) {
        var _this2 = this;

        _classCallCheck(this, EditorEffects);

        this.actions$ = actions$;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.editorService = editorService;
        this.publishArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_editor_actions__WEBPACK_IMPORTED_MODULE_6__["publishArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this2.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                _ = _ref2[0],
                data = _ref2[1];

            return _this2.editorService.publishArticle(data).pipe( // TODO dispatch this action from the router facade when you refactor
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return Object(_botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_7__["go"])({
                to: {
                  path: ['article', result.article.slug]
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (result) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["setErrors"])({
                errors: result.error.errors
              }));
            }));
          }));
        });
        this.loadArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_editor_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (action) {
            return _this2.editorService.get(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return _editor_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticleSuccess"]({
                article: response.article
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_editor_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticleFail"](error));
            }));
          }));
        });
      };

      EditorEffects.ɵfac = function EditorEffects_Factory(t) {
        return new (t || EditorEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"]));
      };

      EditorEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EditorEffects,
        factory: EditorEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]
          }, {
            type: _editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HZXb":
    /*!********************************************************!*\
      !*** ./libs/editor/src/lib/editor-resolver.service.ts ***!
      \********************************************************/

    /*! exports provided: EditorResolverService */

    /***/
    function HZXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorResolverService", function () {
        return EditorResolverService;
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


      var _state_editor_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./+state/editor.facade */
      "KmHh");

      var EditorResolverService = /*#__PURE__*/function () {
        function EditorResolverService(facade) {
          _classCallCheck(this, EditorResolverService);

          this.facade = facade;
        }

        _createClass(EditorResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var slug = route.params['slug'];

            if (slug) {
              this.facade.loadArticle(slug);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
          }
        }]);

        return EditorResolverService;
      }();

      EditorResolverService.ɵfac = function EditorResolverService_Factory(t) {
        return new (t || EditorResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_editor_facade__WEBPACK_IMPORTED_MODULE_2__["EditorFacade"]));
      };

      EditorResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EditorResolverService,
        factory: EditorResolverService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _state_editor_facade__WEBPACK_IMPORTED_MODULE_2__["EditorFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KmHh":
    /*!*****************************************************!*\
      !*** ./libs/editor/src/lib/+state/editor.facade.ts ***!
      \*****************************************************/

    /*! exports provided: EditorFacade */

    /***/
    function KmHh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorFacade", function () {
        return EditorFacade;
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


      var _editor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor.actions */
      "Qzj8");
      /* harmony import */


      var _editor_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor.selectors */
      "NcPz");

      var EditorFacade = /*#__PURE__*/function () {
        function EditorFacade(store) {
          _classCallCheck(this, EditorFacade);

          this.store = store;
          this.article$ = this.store.select(_editor_selectors__WEBPACK_IMPORTED_MODULE_3__["editorQuery"].getArticle);
        }

        _createClass(EditorFacade, [{
          key: "loadArticle",
          value: function loadArticle(id) {
            this.store.dispatch(_editor_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticle"]({
              id: id
            }));
          }
        }, {
          key: "loadArticleSuccess",
          value: function loadArticleSuccess(article) {
            this.store.dispatch(_editor_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticleSuccess"]({
              article: article
            }));
          }
        }, {
          key: "loadArticleFail",
          value: function loadArticleFail(error) {
            this.store.dispatch(_editor_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticleFail"]({
              error: error
            }));
          }
        }, {
          key: "publishArticle",
          value: function publishArticle() {
            this.store.dispatch(_editor_actions__WEBPACK_IMPORTED_MODULE_2__["publishArticle"]());
          }
        }, {
          key: "initializeArticle",
          value: function initializeArticle() {
            this.store.dispatch(_editor_actions__WEBPACK_IMPORTED_MODULE_2__["initializeArticle"]());
          }
        }]);

        return EditorFacade;
      }();

      EditorFacade.ɵfac = function EditorFacade_Factory(t) {
        return new (t || EditorFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      EditorFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EditorFacade,
        factory: EditorFacade.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorFacade, [{
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
    "NcPz":
    /*!********************************************************!*\
      !*** ./libs/editor/src/lib/+state/editor.selectors.ts ***!
      \********************************************************/

    /*! exports provided: getArticle, editorQuery */

    /***/
    function NcPz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getArticle", function () {
        return getArticle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editorQuery", function () {
        return editorQuery;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _editor_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editor.reducer */
      "xL1S");

      var getEditor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_editor_reducer__WEBPACK_IMPORTED_MODULE_1__["editorFeatureKey"]);
      var getArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEditor, function (state) {
        return state.article;
      });
      var editorQuery = {
        getArticle: getArticle
      };
      /***/
    },

    /***/
    "Qzj8":
    /*!******************************************************!*\
      !*** ./libs/editor/src/lib/+state/editor.actions.ts ***!
      \******************************************************/

    /*! exports provided: publishArticle, initializeArticle, loadArticle, loadArticleSuccess, loadArticleFail */

    /***/
    function Qzj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "publishArticle", function () {
        return publishArticle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initializeArticle", function () {
        return initializeArticle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadArticle", function () {
        return loadArticle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadArticleSuccess", function () {
        return loadArticleSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadArticleFail", function () {
        return loadArticleFail;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var publishArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[editor] PUBLISH_ARTICLE');
      var initializeArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[editor] INITIALIZE_ARTICLE');
      var loadArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[editor] LOAD_ARTICLE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[editor] LOAD_ARTICLE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadArticleFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[editor] LOAD_ARTICLE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "xL1S":
    /*!******************************************************!*\
      !*** ./libs/editor/src/lib/+state/editor.reducer.ts ***!
      \******************************************************/

    /*! exports provided: editorFeatureKey, editorInitialState, editorReducer */

    /***/
    function xL1S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editorFeatureKey", function () {
        return editorFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editorInitialState", function () {
        return editorInitialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editorReducer", function () {
        return editorReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editor.actions */
      "Qzj8");

      var editorFeatureKey = 'editor';
      var editorInitialState = {
        article: {
          slug: '',
          title: '',
          description: '',
          body: '',
          tagList: [],
          createdAt: '',
          updatedAt: '',
          favorited: false,
          favoritesCount: 0,
          author: {
            username: '',
            bio: '',
            image: '',
            following: false,
            loading: false
          }
        }
      };
      var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(editorInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_editor_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticleSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          article: action.article
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_editor_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticleFail"], _editor_actions__WEBPACK_IMPORTED_MODULE_1__["initializeArticle"], function () {
        return editorInitialState;
      }));

      function editorReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    "yiKi":
    /*!***********************************************!*\
      !*** ./libs/editor/src/lib/editor.service.ts ***!
      \***********************************************/

    /*! exports provided: EditorService */

    /***/
    function yiKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorService", function () {
        return EditorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _botmind_test_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @botmind-test/api */
      "A47K");

      var EditorService = /*#__PURE__*/function () {
        function EditorService(apiService) {
          _classCallCheck(this, EditorService);

          this.apiService = apiService;
        }

        _createClass(EditorService, [{
          key: "publishArticle",
          value: function publishArticle(article) {
            if (article.slug) {
              return this.apiService.put('/articles/' + article.slug, {
                article: article
              });
            }

            return this.apiService.post('/articles/', {
              article: article
            });
          }
        }, {
          key: "get",
          value: function get(slug) {
            return this.apiService.get('/articles/' + slug);
          }
        }]);

        return EditorService;
      }();

      EditorService.ɵfac = function EditorService_Factory(t) {
        return new (t || EditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      EditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EditorService,
        factory: EditorService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _botmind_test_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=botmind-test-editor-src-lib-editor-module-es5.js.map