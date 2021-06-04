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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["botmind-test-profile-src-lib-profile-module"], {
    /***/
    "/frm":
    /*!*******************************************************!*\
      !*** ./libs/profile/src/lib/+state/profile.facade.ts ***!
      \*******************************************************/

    /*! exports provided: ProfileFacade */

    /***/
    function frm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileFacade", function () {
        return ProfileFacade;
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


      var _profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.actions */
      "PPni");
      /* harmony import */


      var _profile_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.reducer */
      "FeX3");

      var ProfileFacade = /*#__PURE__*/function () {
        function ProfileFacade(store) {
          _classCallCheck(this, ProfileFacade);

          this.store = store;
          this.profile$ = this.store.select(_profile_reducer__WEBPACK_IMPORTED_MODULE_3__["getProfile"]);
        }

        _createClass(ProfileFacade, [{
          key: "follow",
          value: function follow(id) {
            this.store.dispatch(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["follow"]({
              id: id
            }));
          }
        }, {
          key: "unfollow",
          value: function unfollow(id) {
            this.store.dispatch(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["unFollow"]({
              id: id
            }));
          }
        }]);

        return ProfileFacade;
      }();

      ProfileFacade.ɵfac = function ProfileFacade_Factory(t) {
        return new (t || ProfileFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      ProfileFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileFacade,
        factory: ProfileFacade.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFacade, [{
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
    "0VYw":
    /*!***************************************************!*\
      !*** ./libs/profile/src/lib/profile.component.ts ***!
      \***************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function VYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/auth */
      "gy9y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _state_profile_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./+state/profile.facade */
      "/frm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0, a1) {
        return {
          "btn-outline-secondary": a0,
          "btn-secondary": a1
        };
      };

      var _c1 = function _c1() {
        return ["/settings"];
      };

      var _c2 = function _c2(a1) {
        return ["/profile", a1];
      };

      var _c3 = function _c3() {
        return {
          exact: true
        };
      };

      var _c4 = function _c4(a1) {
        return ["/profile", a1, "favorites"];
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(facade, authFacade) {
          _classCallCheck(this, ProfileComponent);

          this.facade = facade;
          this.authFacade = authFacade;
          this.isUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile$ = this.facade.profile$;
            this.currentUser$ = this.authFacade.user$;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.profile$, this.currentUser$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  p = _ref2[0],
                  u = _ref2[1];

              _this.username = p.username;
              _this.following = p.following;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  p = _ref4[0],
                  u = _ref4[1];

              return p.username === u.username;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (isUser) {
              return _this.isUser$.next(isUser);
            });
          }
        }, {
          key: "toggleFollowing",
          value: function toggleFollowing() {
            if (this.following) {
              this.facade.unfollow(this.username);
            } else {
              this.facade.follow(this.username);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_profile_facade__WEBPACK_IMPORTED_MODULE_4__["ProfileFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 40,
        vars: 48,
        consts: [[1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], [1, "user-img", 3, "src"], [3, "hidden"], [1, "btn", "btn-sm", "action-btn", 3, "hidden", "ngClass", "click"], [1, "ion-plus-round"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink", "hidden"], [1, "ion-gear-a"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_14_listener() {
              return ctx.toggleFollowing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Edit Profile Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "My Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Favorited Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var tmp_2_0 = null;
            var tmp_3_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, ctx.profile$)) == null ? null : tmp_0_0.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 16, ctx.profile$).loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, ctx.profile$)) == null ? null : tmp_2_0.username, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 20, ctx.profile$)) == null ? null : tmp_3_0.bio);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, ctx.isUser$))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 24, ctx.profile$).following, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 26, ctx.profile$).following));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 28, ctx.profile$).following ? "Unfollow" : "Follow", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 30, ctx.profile$).username, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c1))("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 32, ctx.isUser$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 34, ctx.profile$).username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 36, ctx.profile$).username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c3));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _state_profile_facade__WEBPACK_IMPORTED_MODULE_4__["ProfileFacade"]
          }, {
            type: _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3tcF":
    /*!**********************************************************!*\
      !*** ./libs/profile/src/lib/profile-resolver.service.ts ***!
      \**********************************************************/

    /*! exports provided: ProfileResolverService, ProfileArticlesResolverService, ProfileFavoritesResolverService */

    /***/
    function tcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileResolverService", function () {
        return ProfileResolverService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileArticlesResolverService", function () {
        return ProfileArticlesResolverService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileFavoritesResolverService", function () {
        return ProfileFavoritesResolverService;
      });
      /* harmony import */


      var _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/article-list */
      "CWEr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _state_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./+state/profile.actions */
      "PPni");

      var ProfileResolverService = /*#__PURE__*/function () {
        function ProfileResolverService(store) {
          _classCallCheck(this, ProfileResolverService);

          this.store = store;
        }

        _createClass(ProfileResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var username = route.params['username'];
            this.store.dispatch(Object(_state_profile_actions__WEBPACK_IMPORTED_MODULE_3__["getProfile"])({
              id: username
            }));
          }
        }]);

        return ProfileResolverService;
      }();

      ProfileResolverService.ɵfac = function ProfileResolverService_Factory(t) {
        return new (t || ProfileResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      ProfileResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProfileResolverService,
        factory: ProfileResolverService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();

      var ProfileArticlesResolverService = /*#__PURE__*/function () {
        function ProfileArticlesResolverService(store) {
          _classCallCheck(this, ProfileArticlesResolverService);

          this.store = store;
        }

        _createClass(ProfileArticlesResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var username = route.params['username'];
            this.store.dispatch(_botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["setListConfig"]({
              config: Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["articleListInitialState"].listConfig), {
                filters: Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["articleListInitialState"].listConfig.filters), {
                  author: username
                })
              })
            }));
          }
        }]);

        return ProfileArticlesResolverService;
      }();

      ProfileArticlesResolverService.ɵfac = function ProfileArticlesResolverService_Factory(t) {
        return new (t || ProfileArticlesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      ProfileArticlesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProfileArticlesResolverService,
        factory: ProfileArticlesResolverService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileArticlesResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();

      var ProfileFavoritesResolverService = /*#__PURE__*/function () {
        function ProfileFavoritesResolverService(store) {
          _classCallCheck(this, ProfileFavoritesResolverService);

          this.store = store;
        }

        _createClass(ProfileFavoritesResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var username = route.parent.params['username'];
            this.store.dispatch(_botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["setListConfig"]({
              config: Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["articleListInitialState"].listConfig), {
                filters: Object.assign(Object.assign({}, _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["articleListInitialState"].listConfig.filters), {
                  favorited: username
                })
              })
            }));
          }
        }]);

        return ProfileFavoritesResolverService;
      }();

      ProfileFavoritesResolverService.ɵfac = function ProfileFavoritesResolverService_Factory(t) {
        return new (t || ProfileFavoritesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      ProfileFavoritesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProfileFavoritesResolverService,
        factory: ProfileFavoritesResolverService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileFavoritesResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9WJ0":
    /*!************************************************************!*\
      !*** ./libs/profile/src/lib/profile-articles.component.ts ***!
      \************************************************************/

    /*! exports provided: ProfileArticlesComponent */

    /***/
    function WJ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function () {
        return ProfileArticlesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _article_list_src_lib_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../article-list/src/lib/article-list.component */
      "qm0p");

      var ProfileArticlesComponent = /*#__PURE__*/function () {
        function ProfileArticlesComponent() {
          _classCallCheck(this, ProfileArticlesComponent);
        }

        _createClass(ProfileArticlesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileArticlesComponent;
      }();

      ProfileArticlesComponent.ɵfac = function ProfileArticlesComponent_Factory(t) {
        return new (t || ProfileArticlesComponent)();
      };

      ProfileArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileArticlesComponent,
        selectors: [["app-profile-articles"]],
        decls: 1,
        vars: 0,
        template: function ProfileArticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-list");
          }
        },
        directives: [_article_list_src_lib_article_list_component__WEBPACK_IMPORTED_MODULE_1__["ArticleListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWFydGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileArticlesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile-articles',
            templateUrl: './profile-articles.component.html',
            styleUrls: ['./profile-articles.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "FeX3":
    /*!********************************************************!*\
      !*** ./libs/profile/src/lib/+state/profile.reducer.ts ***!
      \********************************************************/

    /*! exports provided: profileFeatureKey, profileInitialState, getProfile, profileReducer */

    /***/
    function FeX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "profileFeatureKey", function () {
        return profileFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "profileInitialState", function () {
        return profileInitialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getProfile", function () {
        return getProfile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "profileReducer", function () {
        return profileReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.actions */
      "PPni");

      var profileFeatureKey = 'profile';
      var profileInitialState = {
        username: '',
        bio: '',
        image: '',
        following: false,
        loading: false
      };
      var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(profileFeatureKey);
      var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(profileInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfile"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfileSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, action.profile), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfileFail"], function (state, action) {
        return profileInitialState;
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["followSuccess"], _profile_actions__WEBPACK_IMPORTED_MODULE_1__["unFollowSuccess"], function (state, action) {
        return action.profile;
      }));

      function profileReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    "PPni":
    /*!********************************************************!*\
      !*** ./libs/profile/src/lib/+state/profile.actions.ts ***!
      \********************************************************/

    /*! exports provided: getProfile, getProfileSuccess, getProfileFail, follow, followSuccess, followFail, unFollow, unFollowSuccess, unFollowFail */

    /***/
    function PPni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getProfile", function () {
        return getProfile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getProfileSuccess", function () {
        return getProfileSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getProfileFail", function () {
        return getProfileFail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "follow", function () {
        return follow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "followSuccess", function () {
        return followSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "followFail", function () {
        return followFail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unFollow", function () {
        return unFollow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unFollowSuccess", function () {
        return unFollowSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unFollowFail", function () {
        return unFollowFail;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getProfileFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var follow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var followSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var followFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var unFollow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var unFollowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var unFollowFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "Y7sV":
    /*!*************************************************!*\
      !*** ./libs/profile/src/lib/profile.service.ts ***!
      \*************************************************/

    /*! exports provided: ProfileService */

    /***/
    function Y7sV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var _botmind_test_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/api */
      "A47K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(apiService) {
          _classCallCheck(this, ProfileService);

          this.apiService = apiService;
        }

        _createClass(ProfileService, [{
          key: "getProfile",
          value: function getProfile(username) {
            return this.apiService.get('/profiles/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data.profile;
            }));
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));
      };

      ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProfileService,
        factory: ProfileService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileService, [{
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
    "bl76":
    /*!********************************************************!*\
      !*** ./libs/profile/src/lib/+state/profile.effects.ts ***!
      \********************************************************/

    /*! exports provided: ProfileEffects */

    /***/
    function bl76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileEffects", function () {
        return ProfileEffects;
      });
      /* harmony import */


      var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/shared */
      "2Mw2");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile.service */
      "Y7sV");
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


      var _profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.actions */
      "PPni");

      var ProfileEffects = function ProfileEffects(actions$, actionsService, profileService) {
        var _this2 = this;

        _classCallCheck(this, ProfileEffects);

        this.actions$ = actions$;
        this.actionsService = actionsService;
        this.profileService = profileService;
        this.getProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["getProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (action) {
            return action.id;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) {
            return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
              return action.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (username) {
              return _this2.profileService.getProfile(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) {
                return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["getProfileSuccess"]({
                  profile: profile
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["getProfileFail"]({
                  error: error
                }));
              }));
            }));
          }));
        });
        this.follow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["follow"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return action.id;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (slug) {
            return _this2.actionsService.followUser(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["followSuccess"]({
                profile: response.profile
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["followFail"]({
                error: error
              }));
            }));
          }));
        });
        this.unFollow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["unFollow"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return action.id;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (slug) {
            return _this2.actionsService.unfollowUser(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["unFollowSuccess"]({
                profile: response.profile
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["unFollowFail"]({
                error: error
              }));
            }));
          }));
        });
      };

      ProfileEffects.ɵfac = function ProfileEffects_Factory(t) {
        return new (t || ProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["ActionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
      };

      ProfileEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProfileEffects,
        factory: ProfileEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _botmind_test_shared__WEBPACK_IMPORTED_MODULE_0__["ActionsService"]
          }, {
            type: _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "o0Gc":
    /*!************************************************!*\
      !*** ./libs/profile/src/lib/profile.module.ts ***!
      \************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function o0Gc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
      });
      /* harmony import */


      var _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @botmind-test/article-list */
      "CWEr");
      /* harmony import */


      var _botmind_test_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @botmind-test/auth */
      "gy9y");
      /* harmony import */


      var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @botmind-test/shared */
      "2Mw2");
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _state_profile_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./+state/profile.effects */
      "bl76");
      /* harmony import */


      var _state_profile_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./+state/profile.facade */
      "/frm");
      /* harmony import */


      var _state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./+state/profile.reducer */
      "FeX3");
      /* harmony import */


      var _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profile-articles.component */
      "9WJ0");
      /* harmony import */


      var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./profile-resolver.service */
      "3tcF");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./profile.component */
      "0VYw");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./profile.service */
      "Y7sV");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        providers: [_state_profile_effects__WEBPACK_IMPORTED_MODULE_8__["ProfileEffects"], _profile_service__WEBPACK_IMPORTED_MODULE_14__["ProfileService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileResolverService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesResolverService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileFavoritesResolverService"], _state_profile_facade__WEBPACK_IMPORTED_MODULE_9__["ProfileFacade"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _botmind_test_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
          resolve: {
            ProfileResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileResolverService"]
          },
          canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
          children: [{
            path: '',
            component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"],
            resolve: {
              ProfileArticlesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesResolverService"]
            }
          }, {
            path: 'favorites',
            component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"],
            resolve: {
              ProfileFavoritesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileFavoritesResolverService"]
            }
          }]
        }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileFeatureKey"], _state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileReducer"], {
          initialState: _state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileInitialState"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_8__["ProfileEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _botmind_test_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _botmind_test_article_list__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"], _botmind_test_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
              path: '',
              component: _profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
              resolve: {
                ProfileResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileResolverService"]
              },
              canActivate: [_botmind_test_auth__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
              children: [{
                path: '',
                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"],
                resolve: {
                  ProfileArticlesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesResolverService"]
                }
              }, {
                path: 'favorites',
                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"],
                resolve: {
                  ProfileFavoritesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileFavoritesResolverService"]
                }
              }]
            }]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileFeatureKey"], _state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileReducer"], {
              initialState: _state_profile_reducer__WEBPACK_IMPORTED_MODULE_10__["profileInitialState"]
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_8__["ProfileEffects"]])],
            providers: [_state_profile_effects__WEBPACK_IMPORTED_MODULE_8__["ProfileEffects"], _profile_service__WEBPACK_IMPORTED_MODULE_14__["ProfileService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileResolverService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesResolverService"], _profile_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ProfileFavoritesResolverService"], _state_profile_facade__WEBPACK_IMPORTED_MODULE_9__["ProfileFacade"]],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _profile_articles_component__WEBPACK_IMPORTED_MODULE_11__["ProfileArticlesComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=botmind-test-profile-src-lib-profile-module-es5.js.map