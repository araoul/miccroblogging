(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["botmind-test-settings-src-lib-settings-module"], {
    /***/
    "2WKs":
    /*!**********************************************************!*\
      !*** ./libs/settings/src/lib/+state/settings.effects.ts ***!
      \**********************************************************/

    /*! exports provided: SettingsEffects */

    /***/
    function WKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsEffects", function () {
        return SettingsEffects;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../settings.service */
      "pH3w");
      /* harmony import */


      var _settings_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./settings.actions */
      "TNbQ");
      /* harmony import */


      var _botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @botmind-test/ngrx-router */
      "EdWO");

      var SettingsEffects = function SettingsEffects(actions$, settingsService, authFacade, ngrxFormsFacade) {
        var _this = this;

        _classCallCheck(this, SettingsEffects);

        this.actions$ = actions$;
        this.settingsService = settingsService;
        this.authFacade = authFacade;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.editSettings = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_7__["editSettings"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this.ngrxFormsFacade.data$, _this.authFacade.user$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                _ = _ref2[0],
                data = _ref2[1],
                user = _ref2[2];

            return Object.assign(Object.assign({}, user), {
              image: data.image,
              username: data.username,
              bio: data.bio,
              pass: data.pass,
              email: data.email
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (data) {
            return _this.settingsService.update(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (result) {
              return [Object(_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["getUser"])(), Object(_botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_8__["go"])({
                to: {
                  path: ['profile', result.user.username]
                }
              })];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (result) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["setErrors"])({
                errors: result.error.errors
              }));
            }));
          }));
        });
      };

      SettingsEffects.ɵfac = function SettingsEffects_Factory(t) {
        return new (t || SettingsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]));
      };

      SettingsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SettingsEffects,
        factory: SettingsEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]
          }, {
            type: _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]
          }, {
            type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KaB6":
    /*!**************************************************************!*\
      !*** ./libs/settings/src/lib/settings/settings.component.ts ***!
      \**************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function KaB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _state_settings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../+state/settings.actions */
      "TNbQ");
      /* harmony import */


      var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */
      "T7Fx");
      /* harmony import */


      var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */
      "5W4/");

      var structure = [{
        type: 'INPUT',
        name: 'image',
        placeholder: 'URL of profile picture',
        validator: []
      }, {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Your Name',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
      }, {
        type: 'TEXTAREA',
        name: 'bio',
        placeholder: 'Short bio about you',
        validator: []
      }, {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Email',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
      }, {
        type: 'INPUT',
        name: 'password',
        placeholder: 'New Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        attrs: {
          type: 'password'
        }
      }];

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(store, router, authFacade, ngrxFormsFacade) {
          _classCallCheck(this, SettingsComponent);

          this.store = store;
          this.router = router;
          this.authFacade = authFacade;
          this.ngrxFormsFacade = ngrxFormsFacade;
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.ngrxFormsFacade.setStructure(structure);
            this.authFacade.user$.subscribe(function (user) {
              return _this2.ngrxFormsFacade.setData(user);
            });
            this.data$ = this.ngrxFormsFacade.data$;
            this.structure$ = this.ngrxFormsFacade.structure$;
          }
        }, {
          key: "updateForm",
          value: function updateForm(changes) {
            this.ngrxFormsFacade.updateData(changes);
          }
        }, {
          key: "submit",
          value: function submit() {
            this.store.dispatch(Object(_state_settings_actions__WEBPACK_IMPORTED_MODULE_6__["editSettings"])());
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authFacade.logout();
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 14,
        vars: 2,
        consts: [[1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "data$", "structure$", "updateForm"], [1, "edit-button-container"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-list-errors");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-dynamic-form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateForm", function SettingsComponent_Template_app_dynamic_form_updateForm_7_listener($event) {
              return ctx.updateForm($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Update Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_12_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Or click here to logout. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$);
          }
        },
        directives: [_ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_7__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__["DynamicFormComponent"]],
        styles: [".edit-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]
          }, {
            type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TNbQ":
    /*!**********************************************************!*\
      !*** ./libs/settings/src/lib/+state/settings.actions.ts ***!
      \**********************************************************/

    /*! exports provided: editSettings */

    /***/
    function TNbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editSettings", function () {
        return editSettings;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var editSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[settings] EDIT_SETTINGS');
      /***/
    },

    /***/
    "l14b":
    /*!**************************************************!*\
      !*** ./libs/settings/src/lib/settings.module.ts ***!
      \**************************************************/

    /*! exports provided: SettingsModule */

    /***/
    function l14b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
        return SettingsModule;
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


      var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.service */
      "pH3w");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _state_settings_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./+state/settings.effects */
      "2WKs");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./settings/settings.component */
      "KaB6");

      var SettingsModule = function SettingsModule() {
        _classCallCheck(this, SettingsModule);
      };

      SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SettingsModule
      });
      SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function SettingsModule_Factory(t) {
          return new (t || SettingsModule)();
        },
        providers: [_state_settings_effects__WEBPACK_IMPORTED_MODULE_7__["SettingsEffects"], _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          pathMatch: 'full',
          component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
          canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
        }]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_settings_effects__WEBPACK_IMPORTED_MODULE_7__["SettingsEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, {
          declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SettingsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
              path: '',
              pathMatch: 'full',
              component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
              canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
            }]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_settings_effects__WEBPACK_IMPORTED_MODULE_7__["SettingsEffects"]])],
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]],
            providers: [_state_settings_effects__WEBPACK_IMPORTED_MODULE_7__["SettingsEffects"], _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "pH3w":
    /*!***************************************************!*\
      !*** ./libs/settings/src/lib/settings.service.ts ***!
      \***************************************************/

    /*! exports provided: SettingsService */

    /***/
    function pH3w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _botmind_test_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @botmind-test/api */
      "A47K");

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService(apiService) {
          _classCallCheck(this, SettingsService);

          this.apiService = apiService;
        }

        _createClass(SettingsService, [{
          key: "update",
          value: function update(user) {
            return this.apiService.put('/user', {
              user: user
            });
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SettingsService,
        factory: SettingsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
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
//# sourceMappingURL=botmind-test-settings-src-lib-settings-module-es5.js.map