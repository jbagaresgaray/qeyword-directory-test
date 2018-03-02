webpackJsonp([0],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results_search_results__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    }
    HomePage.prototype.searchLetter = function (letter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_results_search_results__["a" /* SearchResultsPage */], {
            'letter': letter,
            'pageNum': 1
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\qeyword-directory\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img style="margin-top: 3px;margin-left:5px" height="40px" src="assets/imgs/logo_text.png">\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <a ion-button outline color="primary" href="https://qeyword.com/app">\n\n          Sign Up\n\n        </a>\n\n        <a ion-button outline href="https://qeyword.com/">\n\n            Learn more\n\n        </a>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n<ion-item text-wrap>\n\n    <h1><strong>Welcome to the Qeyword companies directory</strong></h1>\n\n   \n\n    <h4>Here you can browse the most searched companies and domain names on Qeyword and get valuable information on the companies\n\n    and the contact who work for them.</h4>\n\n\n\n</ion-item>\n\n<ion-item text-wrap>\n\n    <p>\n\n        Browse the companies alphabetically by domain name:  </p>\n\n      <button *ngFor="let letter of letters" (click)="searchLetter(letter)" ion-button >{{letter}}</button> \n\n  \n\n      \n\n</ion-item>\n\n<ion-item>\n\n    <p>\n\n        If you\'d like to save companies or uncover contact data (such as email addresses) for contacts at the companies you will need to upgrade to a paid Qeyword Prospector account. </p>\n\n\n\n</ion-item>\n\n  </ion-list>\n\n  <ion-card>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n\n\n          <img  src="assets/imgs/qeyword-prospector-overview.png">\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n<ion-list>\n\n  <ion-item text-wrap>\n\n      <h1>Search and verify contact information for <strong>any</strong> person at <strong>any</strong> company.</h1>\n\n      <p>Qeyword Prospector searches through social profiles on the web to find you the exact prospects and contact info\n\n        you\'re looking for. Add prospects to lists with one click and gain valuable suggestions to others.</p>\n\n    \n\n  </ion-item>\n\n  <ion-item>\n\n      <a ion-button large color="primary" href="https://qeyword.com/app">\n\n        Sign Up\n\n      </a>\n\n      <a ion-button large outline href="https://qeyword.com/">\n\n        Learn more\n\n      </a>\n\n    </ion-item>\n\n</ion-list>\n\n         \n\n            \n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n  <p text-center>Copyright Qeyword 2018</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\qeyword-directory\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyProfilePage = (function () {
    function CompanyProfilePage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letterID = navParams.get('letter');
        this.companyName = navParams.get('companyName');
        this.item = db.object('bizDirectoryByName/' + this.letterID + '/' + this.companyName).valueChanges();
        this.peopleList = db.list('bizDirectoryGData/' + this.letterID + '/' + this.companyName).valueChanges();
    }
    CompanyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyProfilePage');
    };
    CompanyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-profile',template:/*ion-inline-start:"C:\xampp\htdocs\qeyword-directory\src\pages\company-profile\company-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n        <img style="margin-top: 3px;margin-left:5px" height="40px" src="https://qeyword.com/companies/assets/imgs/logo_text.png">\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <a ion-button outline color="primary" href="https://qeyword.com/app">\n\n        Sign Up\n\n      </a>\n\n      <a ion-button outline href="https://qeyword.com/">\n\n        Learn more\n\n      </a>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n\n\n    <ion-list>\n\n\n\n\n\n\n\n      <ion-item color="light">\n\n\n\n        <ion-thumbnail item-start>\n\n            <img src="https://logo.clearbit.com/{{(item | async)?.domain}}">\n\n        </ion-thumbnail>\n\n        <h1><strong>{{(item | async)?.name}}</strong></h1>\n\n        <p>{{(item | async)?.description}}</p>\n\n        <button item-end ion-button icon-left>\n\n          <ion-icon name="add"></ion-icon>\n\n          Save to QEYWORD\n\n        </button>\n\n\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-list-header>\n\n\n\n\n\n        Here\'s some of the recently searched for contacts on Qeyword relating to {{(item | async)?.name}}\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let contact of peopleList | async" text-wrap>\n\n\n\n\n\n        <h2>{{contact.title}}</h2>\n\n\n\n        <p>{{contact.description}}</p>\n\n        <button item-end ion-button icon-left>\n\n          <ion-icon name="add"></ion-icon>\n\n          Save\n\n        </button>\n\n      </ion-item>\n\n      <!--login  -->\n\n      <ion-item color="light" text-wrap>\n\n\n\n\n\n        <h2>Please log in to uncover the email addresses, additonal data and contact details for these contacts at ABCCOMPANY.</h2>\n\n\n\n\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        More information about {{(item | async)?.name}}\n\n      </ion-list-header>\n\n\n\n      <ion-item>\n\n\n\n      \n\n      <p>Website URL: {{(item | async)?.domain}}</p>\n\n      <p>Location of headquarters: {{(item | async)?.geo?.country}}</p>\n\n      </ion-item>\n\n      <ion-list-header>\n\n        Related categories and tags\n\n      </ion-list-header>\n\n\n\n      <ion-item>\n\n\n\n        <p> Related tags: {{(item | async)?.tags}}</p> \n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n\n\n  </ion-card>\n\n  <ion-card>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n\n\n          <img  src="https://qeyword.com/companies/assets/imgs/qeyword-prospector-overview.png">\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n<ion-list>\n\n  <ion-item text-wrap>\n\n      <h1>Search and verify contact information for <strong>any</strong> person at <strong>any</strong> company.</h1>\n\n      <p>Qeyword Prospector searches through social profiles on the web to find you the exact prospects and contact info\n\n        you\'re looking for. Add prospects to lists with one click and gain valuable suggestions to others.</p>\n\n    \n\n  </ion-item>\n\n  <ion-item>\n\n      <a ion-button large color="primary" href="https://qeyword.com/app">\n\n        Sign Up\n\n      </a>\n\n      <a ion-button large outline href="https://qeyword.com/">\n\n        Learn more\n\n      </a>\n\n    </ion-item>\n\n</ion-list>\n\n         \n\n            \n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n  <p text-center>Copyright Qeyword 2018</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\qeyword-directory\src\pages\company-profile\company-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CompanyProfilePage);
    return CompanyProfilePage;
}());

//# sourceMappingURL=company-profile.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_company_profile_company_profile__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_results_search_results_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: "AIzaSyCmtiiTHZXKpEL3Hb1Ofe0ClE9cunzHzR8",
    authDomain: "qeyword-17e55.firebaseapp.com",
    databaseURL: "https://qeyword-17e55.firebaseio.com",
    projectId: "qeyword-17e55",
    storageBucket: "qeyword-17e55.appspot.com",
    messagingSenderId: "782631173502"
};
var deepLinkConfig = {
    links: [
        { component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], name: 'home', segment: '' },
        { component: __WEBPACK_IMPORTED_MODULE_8__pages_company_profile_company_profile__["a" /* CompanyProfilePage */], name: 'company', segment: 'companies/:letter/:companyName', defaultHistory: [__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]] },
        { component: __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__["a" /* SearchResultsPage */], name: 'search', segment: 'search/:letter/:pageNum/:startAtKey', defaultHistory: [__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]] }
    ]
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__["a" /* SearchResultsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_company_profile_company_profile__["a" /* CompanyProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_results_search_results_module__["a" /* SearchResultsPageModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { locationStrategy: 'path' }, deepLinkConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__["a" /* SearchResultsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_company_profile_company_profile__["a" /* CompanyProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__["a" /* Deeplinks */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_results_search_results__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, deeplinks, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // // Deeplink
            deeplinks.routeWithNavController(_this.navChild, {
                '/search/:letter/:pageNum/:startAtKey': __WEBPACK_IMPORTED_MODULE_6__pages_search_results_search_results__["a" /* SearchResultsPage */],
            }).subscribe(function (match) {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                console.log('Native route', match);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                //console.log('Got a deeplink that didn\'t match', nomatch);
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navChild", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\qeyword-directory\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\qeyword-directory\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchResultsPageModule = (function () {
    function SearchResultsPageModule() {
    }
    SearchResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResultsPage */]),
            ],
        })
    ], SearchResultsPageModule);
    return SearchResultsPageModule;
}());

//# sourceMappingURL=search-results.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_profile_company_profile__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsPage = (function () {
    function SearchResultsPage(navCtrl, navParams, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startAtKey = "hello";
        this.pageLength = 10;
        this.nextPageStartKey = "hello";
        this.pageNum = '0';
        this.hideNextButton = true;
        this.letterID = navParams.get('letter');
        this.startAtKey = navParams.get('startAtKey');
        this.pageNum = navParams.get('pageNum'); //get page number
        if (this.pageNum === 1) {
            this.items = afDB.list('bizDirectoryByName/' + this.letterID, function (ref) { return ref.orderByKey().limitToFirst(_this.pageLength); }).valueChanges();
        }
        else {
            this.items = afDB.list('bizDirectoryByName/' + this.letterID, function (ref) { return ref.orderByKey().startAt(_this.startAtKey).limitToFirst(_this.pageLength); }).valueChanges();
        }
        // subscribe to changes
        this.items.subscribe(function (queriedItems) {
            console.log("test: " + queriedItems.length);
            if (queriedItems.length < _this.pageLength) {
                // variable is undefined
                _this.hideNextButton = false;
                //  console.log('not there')
            }
            else {
                var nextKey = queriedItems[_this.pageLength - 1].name;
                _this.nextPageStartKey = nextKey;
                // console.log('its there')
            }
        });
    }
    SearchResultsPage_1 = SearchResultsPage;
    //next page
    SearchResultsPage.prototype.nextpage = function () {
        this.navCtrl.push(SearchResultsPage_1, {
            'letter': this.letterID,
            'startAtKey': this.nextPageStartKey,
            'pageNum': this.pageNum + 1
        });
    };
    SearchResultsPage.prototype.viewCompany = function (letter, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__company_profile_company_profile__["a" /* CompanyProfilePage */], {
            'letter': letter,
            'companyName': name
        });
    };
    SearchResultsPage = SearchResultsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-results',template:/*ion-inline-start:"C:\xampp\htdocs\qeyword-directory\src\pages\search-results\search-results.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        <img style="margin-top: 3px;margin-left:5px" height="40px" src="https://qeyword.com/companies/assets/imgs/logo_text.png">\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <a ion-button outline color="primary" href="https://qeyword.com/app">\n\n            Sign Up\n\n          </a>\n\n          <a ion-button outline href="https://qeyword.com/">\n\n              Learn more\n\n          </a>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n\n\n      <ion-list>\n\n          <ion-list-header>\n\n              Companies starting with {{letterID}}\n\n            </ion-list-header>\n\n      \n\n          <ion-item *ngFor="let item of items | async" text-wrap>\n\n            <ion-thumbnail item-start>\n\n              <img src="https://logo.clearbit.com/{{item.domain}}">\n\n            </ion-thumbnail>\n\n            <h2>{{item.name}}</h2>\n\n            <p>{{item.description}}</p>\n\n            <button (click)="viewCompany(letterID,item.name)" ion-button  item-end icon-left >\n\n                <ion-icon name="copy"></ion-icon>\n\n                View Details \n\n              </button>\n\n            <button color="" ion-button outline item-end icon-left >\n\n            <ion-icon name="add"></ion-icon>\n\n            Open in Qeyword\n\n          </button>\n\n            <button color="" ion-button outline item-end icon-left >\n\n            <ion-icon name="search"></ion-icon>\n\n            Contacts in Qeyword\n\n          </button>\n\n           \n\n          </ion-item>\n\n          <ion-item>\n\n            <button ion-button start (click)=\'nextpage()\' *ngIf="hideNextButton">Next Page</button>\n\n          </ion-item>\n\n       \n\n        </ion-list>\n\n        <ion-card>\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n      \n\n                <img  src="https://qeyword.com/companies/assets/imgs/qeyword-prospector-overview.png">\n\n              </ion-col>\n\n      \n\n              <ion-col col-6>\n\n      <ion-list>\n\n        <ion-item text-wrap>\n\n            <h1>Search and verify contact information for <strong>any</strong> person at <strong>any</strong> company.</h1>\n\n            <p>Qeyword Prospector searches through social profiles on the web to find you the exact prospects and contact info\n\n              you\'re looking for. Add prospects to lists with one click and gain valuable suggestions to others.</p>\n\n          \n\n        </ion-item>\n\n        <ion-item>\n\n            <a ion-button large color="primary" href="https://qeyword.com/app">\n\n              Sign Up\n\n            </a>\n\n            <a ion-button large outline href="https://qeyword.com/">\n\n              Learn more\n\n            </a>\n\n          </ion-item>\n\n      </ion-list>\n\n               \n\n                  \n\n                </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n        <p text-center>Copyright Qeyword 2018</p>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\qeyword-directory\src\pages\search-results\search-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SearchResultsPage);
    return SearchResultsPage;
    var SearchResultsPage_1;
}());

//# sourceMappingURL=search-results.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map