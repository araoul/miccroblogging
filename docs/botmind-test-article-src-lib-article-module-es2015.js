(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["botmind-test-article-src-lib-article-module"],{

/***/ "+/fp":
/*!*************************************************!*\
  !*** ./node_modules/marked/src/TextRenderer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * TextRenderer
 * returns only the textual part of the token
 */
module.exports = class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
};


/***/ }),

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

/***/ "44xd":
/*!*************************************************!*\
  !*** ./libs/article/src/lib/article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _botmind_test_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-test/api */ "A47K");




class ArticleService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getArticle(slug) {
        return this.apiService.get('/articles/' + slug);
    }
    getComments(slug) {
        return this.apiService.get(`/articles/${slug}/comments`);
    }
    deleteArticle(slug) {
        return this.apiService.delete('/articles/' + slug);
    }
    deleteComment(commentId, slug) {
        return this.apiService.delete(`/articles/${slug}/comments/${commentId}`);
    }
    addComment(slug, payload = '') {
        return this.apiService.post(`/articles/${slug}/comments`, {
            comment: { body: payload },
        });
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_botmind_test_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _botmind_test_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "4MG8":
/*!*******************************************!*\
  !*** ./node_modules/marked/src/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Lexer = __webpack_require__(/*! ./Lexer.js */ "T9Ld");
const Parser = __webpack_require__(/*! ./Parser.js */ "66f7");
const Renderer = __webpack_require__(/*! ./Renderer.js */ "SbYC");
const TextRenderer = __webpack_require__(/*! ./TextRenderer.js */ "+/fp");
const InlineLexer = __webpack_require__(/*! ./InlineLexer.js */ "hyX7");
const Slugger = __webpack_require__(/*! ./Slugger.js */ "J7Ao");
const {
  merge,
  checkSanitizeDeprecation,
  escape
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");
const {
  getDefaults,
  changeDefaults,
  defaults
} = __webpack_require__(/*! ./defaults.js */ "vbtb");

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    const highlight = opt.highlight;
    let tokens,
      pending,
      i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    const done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      let out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.Slugger = Slugger;

marked.parse = marked;

module.exports = marked;


/***/ }),

/***/ "5s2+":
/*!********************************************************!*\
  !*** ./libs/article/src/lib/+state/article.effects.ts ***!
  \********************************************************/
/*! exports provided: ArticleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEffects", function() { return ArticleEffects; });
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article.service */ "44xd");
/* harmony import */ var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-test/shared */ "2Mw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.actions */ "8Ag6");
/* harmony import */ var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @botmind-test/ngrx-forms */ "AxuA");
/* harmony import */ var _botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @botmind-test/ngrx-router */ "EdWO");














class ArticleEffects {
    constructor(actions$, articleService, actionsService, ngrxFormsFacade) {
        this.actions$ = actions$;
        this.articleService = articleService;
        this.actionsService = actionsService;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.loadArticle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => this.articleService.getArticle(action.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticleSuccess"]({ article: response.article })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["loadArticleFail"](error)))))));
        this.loadComments = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["loadComments"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => this.articleService.getComments(action.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["loadCommentsSuccess"]({ comments: data.comments })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["loadCommentsFail"](error)))))));
        this.deleteArticle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["deleteArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => this.articleService.deleteArticle(action.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => Object(_botmind_test_ngrx_router__WEBPACK_IMPORTED_MODULE_8__["go"])({ to: { path: ['/'] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["deleteArticleFail"](error)))))));
        this.addComment = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["addComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.slug), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.ngrxFormsFacade.data$, this.ngrxFormsFacade.structure$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(([slug, data, structure]) => this.articleService.addComment(slug, data.comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((response) => [_article_actions__WEBPACK_IMPORTED_MODULE_6__["addCommentSuccess"]({ comment: response.comment }), Object(_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_7__["resetForm"])()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_7__["setErrors"])({ errors: result.error.errors })))))));
        this.deleteComment = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["deleteComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => this.articleService.deleteComment(action.commentId, action.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["deleteCommentSuccess"]({ commentId: action.commentId })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["deleteCommentFail"](error)))))));
        this.follow = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["follow"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.username), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((username) => this.actionsService.followUser(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["followSuccess"]({ profile: response.profile })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["followFail"](error)))))));
        this.unFollow = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["unFollow"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.username), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((username) => this.actionsService.unfollowUser(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["unFollowSuccess"]({ profile: response.profile })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["unFollowFail"](error)))))));
        this.favorite = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["favorite"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.slug), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((slug) => this.actionsService.favorite(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteSuccess"]({ article: response.article })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteFail"](error)))))));
        this.unFavorite = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["unFavorite"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.slug), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((slug) => this.actionsService.unfavorite(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _article_actions__WEBPACK_IMPORTED_MODULE_6__["unFavoriteSuccess"]({ article: response.article })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_article_actions__WEBPACK_IMPORTED_MODULE_6__["unFavoriteFail"](error)))))));
    }
}
ArticleEffects.ɵfac = function ArticleEffects_Factory(t) { return new (t || ArticleEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_article_service__WEBPACK_IMPORTED_MODULE_0__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__["ActionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_7__["NgrxFormsFacade"])); };
ArticleEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ArticleEffects, factory: ArticleEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ArticleEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _article_service__WEBPACK_IMPORTED_MODULE_0__["ArticleService"] }, { type: _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__["ActionsService"] }, { type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_7__["NgrxFormsFacade"] }]; }, null); })();


/***/ }),

/***/ "66f7":
/*!*******************************************!*\
  !*** ./node_modules/marked/src/Parser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Renderer = __webpack_require__(/*! ./Renderer.js */ "SbYC");
const Slugger = __webpack_require__(/*! ./Slugger.js */ "J7Ao");
const InlineLexer = __webpack_require__(/*! ./InlineLexer.js */ "hyX7");
const TextRenderer = __webpack_require__(/*! ./TextRenderer.js */ "+/fp");
const { defaults } = __webpack_require__(/*! ./defaults.js */ "vbtb");
const {
  merge,
  unescape
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");

/**
 * Parsing & Compiling
 */
module.exports = class Parser {
  constructor(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  };

  /**
   * Parse Loop
   */
  parse(tokens) {
    this.inline = new InlineLexer(tokens.links, this.options);
    // use an InlineLexer with a TextRenderer to extract pure text
    this.inlineText = new InlineLexer(
      tokens.links,
      merge({}, this.options, { renderer: new TextRenderer() })
    );
    this.tokens = tokens.reverse();

    let out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */
  next() {
    this.token = this.tokens.pop();
    return this.token;
  };

  /**
   * Preview Next Token
   */
  peek() {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */
  parseText() {
    let body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */
  tok() {
    let body = '';
    switch (this.token.type) {
      case 'space': {
        return '';
      }
      case 'hr': {
        return this.renderer.hr();
      }
      case 'heading': {
        return this.renderer.heading(
          this.inline.output(this.token.text),
          this.token.depth,
          unescape(this.inlineText.output(this.token.text)),
          this.slugger);
      }
      case 'code': {
        return this.renderer.code(this.token.text,
          this.token.lang,
          this.token.escaped);
      }
      case 'table': {
        let header = '',
          i,
          row,
          cell,
          j;

        // header
        cell = '';
        for (i = 0; i < this.token.header.length; i++) {
          cell += this.renderer.tablecell(
            this.inline.output(this.token.header[i]),
            { header: true, align: this.token.align[i] }
          );
        }
        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this.token.cells[i];

          cell = '';
          for (j = 0; j < row.length; j++) {
            cell += this.renderer.tablecell(
              this.inline.output(row[j]),
              { header: false, align: this.token.align[j] }
            );
          }

          body += this.renderer.tablerow(cell);
        }
        return this.renderer.table(header, body);
      }
      case 'blockquote_start': {
        body = '';

        while (this.next().type !== 'blockquote_end') {
          body += this.tok();
        }

        return this.renderer.blockquote(body);
      }
      case 'list_start': {
        body = '';
        const ordered = this.token.ordered,
          start = this.token.start;

        while (this.next().type !== 'list_end') {
          body += this.tok();
        }

        return this.renderer.list(body, ordered, start);
      }
      case 'list_item_start': {
        body = '';
        const loose = this.token.loose;
        const checked = this.token.checked;
        const task = this.token.task;

        if (this.token.task) {
          if (loose) {
            if (this.peek().type === 'text') {
              const nextToken = this.peek();
              nextToken.text = this.renderer.checkbox(checked) + ' ' + nextToken.text;
            } else {
              this.tokens.push({
                type: 'text',
                text: this.renderer.checkbox(checked)
              });
            }
          } else {
            body += this.renderer.checkbox(checked);
          }
        }

        while (this.next().type !== 'list_item_end') {
          body += !loose && this.token.type === 'text'
            ? this.parseText()
            : this.tok();
        }
        return this.renderer.listitem(body, task, checked);
      }
      case 'html': {
        // TODO parse inline content if parameter markdown=1
        return this.renderer.html(this.token.text);
      }
      case 'paragraph': {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }
      case 'text': {
        return this.renderer.paragraph(this.parseText());
      }
      default: {
        const errMsg = 'Token with "' + this.token.type + '" type was not found.';
        if (this.options.silent) {
          console.log(errMsg);
        } else {
          throw new Error(errMsg);
        }
      }
    }
  };
};


/***/ }),

/***/ "7KWO":
/*!**********************************************************!*\
  !*** ./libs/article/src/lib/+state/article.selectors.ts ***!
  \**********************************************************/
/*! exports provided: getArticleData, getComments, getArticleLoaded, getAuthorUsername, articleQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleData", function() { return getArticleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleLoaded", function() { return getArticleLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorUsername", function() { return getAuthorUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleQuery", function() { return articleQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.reducer */ "PEZw");


const getArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_article_reducer__WEBPACK_IMPORTED_MODULE_1__["articleFeatureKey"]);
const getArticleData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, (state) => state.data);
const getComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, (state) => state.comments);
const getArticleLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, (state) => state.loaded);
const getAuthorUsername = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, (state) => state.data.author.username);
const articleQuery = {
    getArticleData,
    getComments,
    getArticleLoaded,
    getAuthorUsername,
};


/***/ }),

/***/ "8Ag6":
/*!********************************************************!*\
  !*** ./libs/article/src/lib/+state/article.actions.ts ***!
  \********************************************************/
/*! exports provided: loadArticle, loadArticleSuccess, loadArticleFail, deleteArticle, deleteArticleFail, initializeArticle, loadComments, loadCommentsSuccess, loadCommentsFail, favorite, favoriteSuccess, favoriteFail, unFavorite, unFavoriteSuccess, unFavoriteFail, follow, followSuccess, followFail, unFollow, unFollowSuccess, unFollowFail, addComment, addCommentFail, addCommentSuccess, deleteComment, deleteCommentFail, deleteCommentSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticle", function() { return loadArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleSuccess", function() { return loadArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleFail", function() { return loadArticleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticle", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleFail", function() { return deleteArticleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeArticle", function() { return initializeArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComments", function() { return loadComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsSuccess", function() { return loadCommentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsFail", function() { return loadCommentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favorite", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteSuccess", function() { return favoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteFail", function() { return favoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavorite", function() { return unFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavoriteSuccess", function() { return unFavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavoriteFail", function() { return unFavoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "follow", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followSuccess", function() { return followSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followFail", function() { return followFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollow", function() { return unFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowSuccess", function() { return unFollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowFail", function() { return unFollowFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentFail", function() { return addCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentSuccess", function() { return addCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentFail", function() { return deleteCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentSuccess", function() { return deleteCommentSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_ARTICLE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_ARTICLE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadArticleFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_ARTICLE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] DELETE_ARTICLE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteArticleFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] DELETE_ARTICLE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initializeArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] INITIALIZE_ARTICLE');
const loadComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_COMMENTS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCommentsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_COMMENTS_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCommentsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] LOAD_COMMENTS_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FAVORITE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favoriteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FAVORITE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const favoriteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FAVORITE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFAVORITE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavoriteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFAVORITE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFavoriteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFAVORITE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const follow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const followSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const followFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] FOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollowFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] UNFOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] ADD_COMMENT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCommentFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] ADD_COMMENT_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] ADD_COMMENT_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] DELETE_COMMENT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] DELETE_COMMENT_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[article] DELETE_COMMENT_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "90FS":
/*!*******************************************************!*\
  !*** ./libs/article/src/lib/+state/article.facade.ts ***!
  \*******************************************************/
/*! exports provided: ArticleFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFacade", function() { return ArticleFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.actions */ "8Ag6");
/* harmony import */ var _article_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.selectors */ "7KWO");






class ArticleFacade {
    constructor(store) {
        this.store = store;
        this.article$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_3__["articleQuery"].getArticleData);
        this.comments$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_3__["articleQuery"].getComments);
        this.articleLoaded$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_3__["articleQuery"].getArticleLoaded);
        this.authorUsername$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_3__["articleQuery"].getAuthorUsername);
    }
    loadArticle(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticle"]({ slug }));
    }
    loadComments(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["loadComments"]({ slug }));
    }
    follow(username) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["follow"]({ username }));
    }
    unfollow(username) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["unFollow"]({ username }));
    }
    favorite(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["favorite"]({ slug }));
    }
    unfavorite(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["unFavorite"]({ slug }));
    }
    delete(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["deleteArticle"]({ slug }));
    }
    deleteComment(data) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["deleteComment"](data));
    }
    submit(slug) {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["addComment"]({ slug }));
    }
    initializeArticle() {
        this.store.dispatch(_article_actions__WEBPACK_IMPORTED_MODULE_2__["initializeArticle"]());
    }
}
ArticleFacade.ɵfac = function ArticleFacade_Factory(t) { return new (t || ArticleFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ArticleFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleFacade, factory: ArticleFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "AaQu":
/*!*********************************************************************!*\
  !*** ./libs/article/src/lib/article-meta/article-meta.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/profile", a1]; };
const _c1 = function (a1) { return ["/editor", a1]; };
const _c2 = function (a0, a1) { return { "btn-outline-secondary": a0, "btn-secondary": a1 }; };
const _c3 = function (a0, a1) { return { "btn-outline-primary": a0, "btn-primary": a1 }; };
class ArticleMetaComponent {
    constructor() {
        this.follow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unfollow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unfavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleFavorite() {
        if (this.article.favorited) {
            this.unfavorite.emit(this.article.slug);
        }
        else {
            this.favorite.emit(this.article.slug);
        }
    }
    toggleFollow() {
        if (this.article.author.following) {
            this.unfollow.emit(this.article.author.username);
        }
        else {
            this.follow.emit(this.article.author.username);
        }
    }
    deleteArticle() {
        this.delete.emit(this.article.slug);
    }
}
ArticleMetaComponent.ɵfac = function ArticleMetaComponent_Factory(t) { return new (t || ArticleMetaComponent)(); };
ArticleMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleMetaComponent, selectors: [["app-article-meta"]], inputs: { article: "article", isAuthenticated: "isAuthenticated", canModify: "canModify" }, outputs: { follow: "follow", unfollow: "unfollow", unfavorite: "unfavorite", favorite: "favorite", delete: "delete" }, decls: 26, vars: 29, consts: [[1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"], [3, "hidden"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "ion-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ion-trash-a"], [1, "btn", "btn-sm", "action-btn", 3, "ngClass", "click"], [1, "ion-plus-round"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "ngClass", "click"], [1, "ion-heart"], [1, "counter"]], template: function ArticleMetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Edit Article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleMetaComponent_Template_button_click_13_listener() { return ctx.deleteArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete Article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleMetaComponent_Template_button_click_17_listener() { return ctx.toggleFollow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleMetaComponent_Template_button_click_21_listener() { return ctx.toggleFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.article.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.article.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.author.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, ctx.article.createdAt, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.canModify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.article.slug));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.canModify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c2, !ctx.article.author.following, ctx.article.author.following));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u00A0 ", ctx.article.author.following ? "Unfollow" : "Follow", " ", ctx.article.author.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c3, !ctx.article.favorited, ctx.article.favorited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.article.favorited ? "Unfavorite" : "Favorite", " Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.article.favoritesCount, ")");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLW1ldGEuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleMetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-meta',
                templateUrl: './article-meta.component.html',
                styleUrls: ['./article-meta.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAuthenticated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canModify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], follow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unfollow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unfavorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], favorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "J7Ao":
/*!********************************************!*\
  !*** ./node_modules/marked/src/Slugger.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slugger generates header id
 */
module.exports = class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * Convert string to unique id
   */
  slug(value) {
    let slug = value
      .toLowerCase()
      .trim()
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');

    if (this.seen.hasOwnProperty(slug)) {
      const originalSlug = slug;
      do {
        this.seen[originalSlug]++;
        slug = originalSlug + '-' + this.seen[originalSlug];
      } while (this.seen.hasOwnProperty(slug));
    }
    this.seen[slug] = 0;

    return slug;
  };
};


/***/ }),

/***/ "LVpS":
/*!*******************************************************!*\
  !*** ./libs/article/src/lib/article-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: ArticleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleGuardService", function() { return ArticleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/article.facade */ "90FS");





class ArticleGuardService {
    constructor(facade) {
        this.facade = facade;
    }
    waitForArticleToLoad() {
        return this.facade.articleLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(loaded => loaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    canActivate(route) {
        const slug = route.params['slug'];
        this.facade.loadArticle(slug);
        return this.waitForArticleToLoad().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.facade.loadComments(slug)));
    }
}
ArticleGuardService.ɵfac = function ArticleGuardService_Factory(t) { return new (t || ArticleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_article_facade__WEBPACK_IMPORTED_MODULE_2__["ArticleFacade"])); };
ArticleGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleGuardService, factory: ArticleGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _state_article_facade__WEBPACK_IMPORTED_MODULE_2__["ArticleFacade"] }]; }, null); })();


/***/ }),

/***/ "PEZw":
/*!********************************************************!*\
  !*** ./libs/article/src/lib/+state/article.reducer.ts ***!
  \********************************************************/
/*! exports provided: articleFeatureKey, articleInitialState, articleReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleFeatureKey", function() { return articleFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleInitialState", function() { return articleInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleReducer", function() { return articleReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.actions */ "8Ag6");


const articleFeatureKey = 'article';
const articleInitialState = {
    data: {
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
            loading: false,
        },
    },
    comments: [],
    loaded: false,
    loading: false,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(articleInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticleSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { data: action.article, loaded: true, loading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["loadArticleFail"], (state) => (Object.assign(Object.assign({}, state), { data: articleInitialState.data, loaded: false, loading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["addCommentSuccess"], (state, action) => {
    const comments = [action.comment, ...state.comments];
    return Object.assign(Object.assign({}, state), { comments });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCommentSuccess"], (state, action) => {
    const comments = state.comments.filter((item) => item.id !== action.commentId);
    return Object.assign(Object.assign({}, state), { comments });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["initializeArticle"], (state) => articleInitialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["deleteArticleFail"], (state) => articleInitialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["loadCommentsSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { comments: action.comments }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["loadCommentsFail"], (state) => (Object.assign(Object.assign({}, state), { comments: articleInitialState.comments }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["followSuccess"], _article_actions__WEBPACK_IMPORTED_MODULE_1__["unFollowSuccess"], (state, action) => {
    const data = Object.assign(Object.assign({}, state.data), { author: action.profile });
    return Object.assign(Object.assign({}, state), { data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_1__["favoriteSuccess"], _article_actions__WEBPACK_IMPORTED_MODULE_1__["unFavoriteSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { data: action.article }))));
function articleReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "SbYC":
/*!*********************************************!*\
  !*** ./node_modules/marked/src/Renderer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { defaults } = __webpack_require__(/*! ./defaults.js */ "vbtb");
const {
  cleanUrl,
  escape
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");

/**
 * Renderer
 */
module.exports = class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  };

  blockquote(quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  html(html) {
    return html;
  };

  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + slugger.slug(raw)
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
    }
    // ignore IDs
    return '<h' + level + '>' + text + '</h' + level + '>\n';
  };

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  listitem(text) {
    return '<li>' + text + '</li>\n';
  };

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  };

  paragraph(text) {
    return '<p>' + text + '</p>\n';
  };

  table(header, body) {
    if (body) body = '<tbody>' + body + '</tbody>';

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  };

  tablerow(content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? '<' + type + ' align="' + flags.align + '">'
      : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  strong(text) {
    return '<strong>' + text + '</strong>';
  };

  em(text) {
    return '<em>' + text + '</em>';
  };

  codespan(text) {
    return '<code>' + text + '</code>';
  };

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  del(text) {
    return '<del>' + text + '</del>';
  };

  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  text(text) {
    return text;
  };
};


/***/ }),

/***/ "T9Ld":
/*!******************************************!*\
  !*** ./node_modules/marked/src/Lexer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { defaults } = __webpack_require__(/*! ./defaults.js */ "vbtb");
const { block } = __webpack_require__(/*! ./rules.js */ "e56X");
const {
  rtrim,
  splitCells,
  escape
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");

/**
 * Block Lexer
 */
module.exports = class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.rules = block.normal;

    if (this.options.pedantic) {
      this.rules = block.pedantic;
    } else if (this.options.gfm) {
      this.rules = block.gfm;
    }
  }

  /**
   * Expose Block Rules
   */
  static get rules() {
    return block;
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ');

    return this.token(src, true);
  };

  /**
   * Lexing
   */
  token(src, top) {
    src = src.replace(/^ +$/gm, '');
    let next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        const lastToken = this.tokens[this.tokens.length - 1];
        src = src.substring(cap[0].length);
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && lastToken.type === 'paragraph') {
          lastToken.text += '\n' + cap[0].trimRight();
        } else {
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            codeBlockStyle: 'indented',
            text: !this.options.pedantic
              ? rtrim(cap, '\n')
              : cap
          });
        }
        continue;
      }

      // fences
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (cap = this.rules.nptable.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;

        listStart = {
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false
        };

        this.tokens.push(listStart);

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        listItems = [];
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic
              ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
              : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull.length > 1 ? b.length === 1
              : (b.length > 1 || (this.options.smartLists && b !== bull))) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            listStart.loose = true;
          }

          // Check for task list items
          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;
          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          t = {
            type: 'list_item_start',
            task: istask,
            checked: ischecked,
            loose: loose
          };

          listItems.push(t);
          this.tokens.push(t);

          // Recurse.
          this.token(item, false);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        if (listStart.loose) {
          l = listItems.length;
          i = 0;
          for (; i < l; i++) {
            listItems[i].loose = true;
          }
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize
            ? 'paragraph'
            : 'html',
          pre: !this.options.sanitizer
            && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]
        });
        continue;
      }

      // def
      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }
        continue;
      }

      // table (gfm)
      if (cap = this.rules.table.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(
              item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
              item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n'
            ? cap[1].slice(0, -1)
            : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };
};


/***/ }),

/***/ "XBKz":
/*!***************************************************************************!*\
  !*** ./libs/article/src/lib/article-comment/article-comment.component.ts ***!
  \***************************************************************************/
/*! exports provided: ArticleCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCommentComponent", function() { return ArticleCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/profile", a1]; };
class ArticleCommentComponent {
    constructor() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ArticleCommentComponent.ɵfac = function ArticleCommentComponent_Factory(t) { return new (t || ArticleCommentComponent)(); };
ArticleCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleCommentComponent, selectors: [["app-article-comment"]], inputs: { currentUser: "currentUser", comment: "comment", article: "article" }, outputs: { delete: "delete" }, decls: 15, vars: 14, consts: [[1, "card"], [1, "card-block"], [1, "card-text"], [1, "card-footer"], [1, "comment-author", 3, "routerLink"], [1, "comment-author-img", 3, "src"], [1, "date-posted"], [1, "mod-options", 3, "hidden"], [1, "ion-trash-a", 3, "click"]], template: function ArticleCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleCommentComponent_Template_i_click_14_listener() { return ctx.delete.emit({ commentId: ctx.comment.id, slug: ctx.article.slug }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.comment.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.comment.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.comment.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comment.author.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx.comment.createdAt, "longDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.currentUser.username !== ctx.comment.author.username);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-comment',
                templateUrl: './article-comment.component.html',
                styleUrls: ['./article-comment.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "cS67":
/*!***************************************************!*\
  !*** ./libs/article/src/lib/article.component.ts ***!
  \***************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/auth */ "gy9y");
/* harmony import */ var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-test/ngrx-forms */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/article.facade */ "90FS");
/* harmony import */ var _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-meta/article-meta.component */ "AaQu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-comment/add-comment.component */ "sfC2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-comment/article-comment.component */ "XBKz");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./markdown.pipe */ "voJ/");
















function ArticleComponent_app_add_comment_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-add-comment", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submitComment", function ArticleComponent_app_add_comment_20_Template_app_add_comment_submitComment_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.submit($event); })("updateForm", function ArticleComponent_app_add_comment_20_Template_app_add_comment_updateForm_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.updateForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx_r0.article$))("data$", ctx_r0.data$)("structure$", ctx_r0.structure$)("currentUser", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.currentUser$))("touchedForm$", ctx_r0.touchedForm$);
} }
const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/register"]; };
function ArticleComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " to add comments on this article. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
} }
function ArticleComponent_app_article_comment_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-article-comment", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("delete", function ArticleComponent_app_article_comment_24_Template_app_article_comment_delete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.deleteComment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentUser", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r2.currentUser$))("article", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r2.article$))("comment", comment_r6);
} }
const structure = [
    {
        type: 'TEXTAREA',
        name: 'comment',
        placeholder: 'Write a comment...',
        attrs: {
            rows: 3,
        },
    },
];
class ArticleComponent {
    constructor(ngrxFormsFacade, facade, authFacade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
        this.authFacade = authFacade;
        this.canModify = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.article$ = this.facade.article$;
        this.comments$ = this.facade.comments$;
        this.isAuthenticated$ = this.authFacade.isLoggedIn$;
        this.currentUser$ = this.authFacade.user$;
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
        this.touchedForm$ = this.ngrxFormsFacade.touched$;
        this.ngrxFormsFacade.setStructure(structure);
        this.ngrxFormsFacade.setData('');
        this.authFacade.auth$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((auth) => auth.loggedIn), (auth$) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([auth$, this.facade.authorUsername$]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(([auth, username]) => {
            this.canModify = auth.user.username === username;
        });
    }
    follow(username) {
        this.facade.follow(username);
    }
    unfollow(username) {
        this.facade.unfollow(username);
    }
    favorite(slug) {
        this.facade.favorite(slug);
    }
    unfavorite(slug) {
        this.facade.unfavorite(slug);
    }
    delete(slug) {
        this.facade.delete(slug);
    }
    deleteComment(data) {
        this.facade.deleteComment(data);
    }
    submit(slug) {
        this.facade.submit(slug);
    }
    updateForm(changes) {
        this.ngrxFormsFacade.updateData(changes);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.facade.initializeArticle();
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_article_facade__WEBPACK_IMPORTED_MODULE_5__["ArticleFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 26, vars: 25, consts: [[1, "article-page"], [1, "banner"], [1, "container"], ["data-e2e-id", "article-title"], [3, "article", "canModify", "follow", "unfollow", "favorite", "unfavorite", "delete"], [1, "container", "page"], [1, "row", "article-content"], [1, "col-md-12"], [3, "innerHTML"], [1, "article-actions"], [1, "row"], [1, "col-xs-12", "col-md-8", "offset-md-2"], [3, "article", "data$", "structure$", "currentUser", "touchedForm$", "submitComment", "updateForm", 4, "ngIf"], [4, "ngIf"], [3, "currentUser", "article", "comment", "delete", 4, "ngFor", "ngForOf"], [3, "article", "data$", "structure$", "currentUser", "touchedForm$", "submitComment", "updateForm"], [3, "routerLink"], [3, "currentUser", "article", "comment", "delete"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-article-meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("follow", function ArticleComponent_Template_app_article_meta_follow_6_listener($event) { return ctx.follow($event); })("unfollow", function ArticleComponent_Template_app_article_meta_unfollow_6_listener($event) { return ctx.unfollow($event); })("favorite", function ArticleComponent_Template_app_article_meta_favorite_6_listener($event) { return ctx.favorite($event); })("unfavorite", function ArticleComponent_Template_app_article_meta_unfavorite_6_listener($event) { return ctx.unfavorite($event); })("delete", function ArticleComponent_Template_app_article_meta_delete_6_listener($event) { return ctx.delete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "markdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "app-article-meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("follow", function ArticleComponent_Template_app_article_meta_follow_16_listener($event) { return ctx.follow($event); })("unfollow", function ArticleComponent_Template_app_article_meta_unfollow_16_listener($event) { return ctx.unfollow($event); })("favorite", function ArticleComponent_Template_app_article_meta_favorite_16_listener($event) { return ctx.favorite($event); })("unfavorite", function ArticleComponent_Template_app_article_meta_unfavorite_16_listener($event) { return ctx.unfavorite($event); })("delete", function ArticleComponent_Template_app_article_meta_delete_16_listener($event) { return ctx.delete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ArticleComponent_app_add_comment_20_Template, 3, 9, "app-add-comment", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ArticleComponent_div_22_Template, 7, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ArticleComponent_app_article_comment_24_Template, 3, 7, "app-article-comment", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.article$).title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx.article$))("canModify", ctx.canModify);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 15, ctx.article$)) == null ? null : tmp_3_0.body), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 17, ctx.article$))("canModify", ctx.canModify);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 19, ctx.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 21, ctx.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 23, ctx.comments$));
    } }, directives: [_article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_10__["ArticleCommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _markdown_pipe__WEBPACK_IMPORTED_MODULE_11__["MarkdownPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"] }, { type: _state_article_facade__WEBPACK_IMPORTED_MODULE_5__["ArticleFacade"] }, { type: _botmind_test_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "e56X":
/*!******************************************!*\
  !*** ./node_modules/marked/src/rules.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  noopTest,
  edit,
  merge
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noopTest,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} +')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});

/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

module.exports = {
  block,
  inline
};


/***/ }),

/***/ "eq5V":
/*!************************************************!*\
  !*** ./libs/article/src/lib/article.module.ts ***!
  \************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-test/ngrx-forms */ "AxuA");
/* harmony import */ var _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-test/shared */ "2Mw2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_article_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/article.effects */ "5s2+");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/article.facade */ "90FS");
/* harmony import */ var _state_article_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/article.reducer */ "PEZw");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-comment/add-comment.component */ "sfC2");
/* harmony import */ var _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-comment/article-comment.component */ "XBKz");
/* harmony import */ var _article_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-guard.service */ "LVpS");
/* harmony import */ var _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-meta/article-meta.component */ "AaQu");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article.component */ "cS67");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article.service */ "44xd");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./markdown.pipe */ "voJ/");





















class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, providers: [_state_article_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleEffects"], _article_service__WEBPACK_IMPORTED_MODULE_15__["ArticleService"], _article_guard_service__WEBPACK_IMPORTED_MODULE_12__["ArticleGuardService"], _state_article_facade__WEBPACK_IMPORTED_MODULE_8__["ArticleFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"],
                    canActivate: [_article_guard_service__WEBPACK_IMPORTED_MODULE_12__["ArticleGuardService"]],
                },
            ]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleFeatureKey"], _state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleReducer"], {
                initialState: _state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_article_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleEffects"]]),
            _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"],
            _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"], _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__["ArticleMetaComponent"], _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_11__["ArticleCommentComponent"], _markdown_pipe__WEBPACK_IMPORTED_MODULE_16__["MarkdownPipe"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_10__["AddCommentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"],
        _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"],
                            canActivate: [_article_guard_service__WEBPACK_IMPORTED_MODULE_12__["ArticleGuardService"]],
                        },
                    ]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleFeatureKey"], _state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleReducer"], {
                        initialState: _state_article_reducer__WEBPACK_IMPORTED_MODULE_9__["articleInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_article_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleEffects"]]),
                    _botmind_test_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"],
                    _botmind_test_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ],
                providers: [_state_article_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleEffects"], _article_service__WEBPACK_IMPORTED_MODULE_15__["ArticleService"], _article_guard_service__WEBPACK_IMPORTED_MODULE_12__["ArticleGuardService"], _state_article_facade__WEBPACK_IMPORTED_MODULE_8__["ArticleFacade"]],
                declarations: [_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"], _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_13__["ArticleMetaComponent"], _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_11__["ArticleCommentComponent"], _markdown_pipe__WEBPACK_IMPORTED_MODULE_16__["MarkdownPipe"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_10__["AddCommentComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hyX7":
/*!************************************************!*\
  !*** ./node_modules/marked/src/InlineLexer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Renderer = __webpack_require__(/*! ./Renderer.js */ "SbYC");
const { defaults } = __webpack_require__(/*! ./defaults.js */ "vbtb");
const { inline } = __webpack_require__(/*! ./rules.js */ "e56X");
const {
  findClosingBracket,
  escape
} = __webpack_require__(/*! ./helpers.js */ "rUJ1");

/**
 * Inline Lexer & Compiler
 */
module.exports = class InlineLexer {
  constructor(links, options) {
    this.options = options || defaults;
    this.links = links;
    this.rules = inline.normal;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    }
  }

  /**
   * Expose Inline Rules
   */
  static get rules() {
    return inline;
  }

  /**
   * Static Lexing/Compiling Method
   */
  static output(src, links, options) {
    const inline = new InlineLexer(links, options);
    return inline.output(src);
  }

  /**
   * Lexing/Compiling
   */
  output(src) {
    let out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape(cap[1]);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = true;
        } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize
          ? this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0])
          : cap[0];
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];
        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: InlineLexer.escapes(href),
          title: InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src))
          || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2].trim(), true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        src = src.substring(cap[0].length);
        out += this.renderer.link(href, null, text);
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        if (this.inRawBlock) {
          out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]);
        } else {
          out += this.renderer.text(escape(this.smartypants(cap[0])));
        }
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  }

  static escapes(text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
  }

  /**
   * Compile Link
   */
  outputLink(cap, link) {
    const href = link.href,
      title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!'
      ? this.renderer.link(href, title, this.output(cap[1]))
      : this.renderer.image(href, title, escape(cap[1]));
  }

  /**
   * Smartypants Transformations
   */
  smartypants(text) {
    if (!this.options.smartypants) return text;
    return text
      // em-dashes
      .replace(/---/g, '\u2014')
      // en-dashes
      .replace(/--/g, '\u2013')
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
      // closing singles & apostrophes
      .replace(/'/g, '\u2019')
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
      // closing doubles
      .replace(/"/g, '\u201d')
      // ellipses
      .replace(/\.{3}/g, '\u2026');
  }

  /**
   * Mangle Links
   */
  mangle(text) {
    if (!this.options.mangle) return text;
    const l = text.length;
    let out = '',
      i = 0,
      ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  }
};


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

/***/ "rUJ1":
/*!********************************************!*\
  !*** ./node_modules/marked/src/helpers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

module.exports = {
  escape,
  unescape,
  edit,
  cleanUrl,
  resolveUrl,
  noopTest,
  merge,
  splitCells,
  rtrim,
  findClosingBracket,
  checkSanitizeDeprecation
};


/***/ }),

/***/ "sfC2":
/*!*******************************************************************!*\
  !*** ./libs/article/src/lib/add-comment/add-comment.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */ "T7Fx");
/* harmony import */ var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */ "5W4/");





class AddCommentComponent {
    constructor() {
        this.submitComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], inputs: { article: "article", currentUser: "currentUser", data$: "data$", structure$: "structure$", touchedForm$: "touchedForm$" }, outputs: { submitComment: "submitComment", updateForm: "updateForm" }, decls: 7, vars: 4, consts: [[1, "card", "comment-form"], [1, "card-block", 3, "data$", "structure$", "touchedForm$", "updateForm"], [1, "card-footer"], [1, "comment-author-img", 3, "src"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-dynamic-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateForm", function AddCommentComponent_Template_app_dynamic_form_updateForm_2_listener($event) { return ctx.updateForm.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCommentComponent_Template_button_click_5_listener() { return ctx.submitComment.emit(ctx.article.slug); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Post Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$)("touchedForm$", ctx.touchedForm$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentUser.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_2__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-comment',
                templateUrl: './add-comment.component.html',
                styleUrls: ['./add-comment.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], structure$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touchedForm$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vbtb":
/*!*********************************************!*\
  !*** ./node_modules/marked/src/defaults.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults,
  changeDefaults
};


/***/ }),

/***/ "voJ/":
/*!***********************************************!*\
  !*** ./libs/article/src/lib/markdown.pipe.ts ***!
  \***********************************************/
/*! exports provided: MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "4MG8");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);



class MarkdownPipe {
    transform(content) {
        return marked__WEBPACK_IMPORTED_MODULE_1__(content, { sanitize: true });
    }
}
MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) { return new (t || MarkdownPipe)(); };
MarkdownPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "markdown", type: MarkdownPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'markdown' }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=botmind-test-article-src-lib-article-module-es2015.js.map