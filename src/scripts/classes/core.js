export class Core {

    constructor(version, cdn, user, lang, services, added, idprocessed, state, launch, parameters, isAjax, reloadThePage) {
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
    getCookie(name) {
        const pattern = new RegExp(name + '=.[^;]*');
        const matched = document.cookie.match(pattern);
        return matched;
    }
}