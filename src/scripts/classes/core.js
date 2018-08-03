import {Frame} from "./frame";

export class Core {

    constructor(version, cdn, user, lang, services = [], added, idprocessed, state, launch, parameters, isAjax, reloadThePage) {
        this._version = version;
        this._cdn = cdn;
        this._user = user;
        this._lang = lang;
        this._services = services;
        this._added = added;
        this._idprocessed = idprocessed;
        this._state = state;
        this._launch = launch;
        this._parameters = parameters;
        this._isAjax = isAjax;
        this._reloadThePage = reloadThePage;
    }


    get version() {
        return this._version;
    }

    set version(value) {
        this._version = value;
    }

    get cdn() {
        return this._cdn;
    }

    set cdn(value) {
        this._cdn = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get lang() {
        return this._lang;
    }

    set lang(value) {
        this._lang = value;
    }

    get services() {
        return this._services;
    }

    set services(value) {
        this._services = value;
    }

    get added() {
        return this._added;
    }

    set added(value) {
        this._added = value;
    }

    get idprocessed() {
        return this._idprocessed;
    }

    set idprocessed(value) {
        this._idprocessed = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get launch() {
        return this._launch;
    }

    set launch(value) {
        this._launch = value;
    }

    get parameters() {
        return this._parameters;
    }

    set parameters(value) {
        this._parameters = value;
    }

    get isAjax() {
        return this._isAjax;
    }

    set isAjax(value) {
        this._isAjax = value;
    }

    get reloadThePage() {
        return this._reloadThePage;
    }

    set reloadThePage(value) {
        this._reloadThePage = value;
    }

    init(params) {
        if (params.alreadyLaunch === 0) {

        }
        this._parameters = params;
        return this._parameters
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie() {
        console.log(document.cookie.split(';'));
    }

    initBanner(services) {
        let isOpen = true;
        const frame = new Frame();
        frame.createBanner();
        this.customizeCookies(frame, services);
        return isOpen;
    }
    customizeCookies(frame, services) {
        const customize = document.querySelector('.cc-frame-customize');
        customize.addEventListener('click', el => {
            frame.createFrame();
            frame.createServices(services);
            const close = document.querySelector('.cc-frame-close');
            close.addEventListener('click', el => {
                frame.closeFrame();
            });
            const userConsent = document.querySelector('.cc-frame-service-buttons');
            userConsent.addEventListener('change', el => {
                services.forEach(function (service) {
                    if(el.target.id.replace('cc-', '') === service.key) {
                        service.consent = el.target.checked;
                    }
                });
                this.setCookie('cookies-privacy', JSON.stringify(services), 30);
            });
        });
    }
}