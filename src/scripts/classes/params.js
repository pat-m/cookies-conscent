export class Params {

    constructor(hashtag, highprivacy, orientation, adblocker, showalertsmall, cookieslist, removecredit, handlebrowserdntrequest, cookiedomain) {
        this._hashtag = hashtag;
        this._highprivacy = highprivacy;
        this._orientation = orientation;
        this._adblocker = adblocker;
        this._showalertsmall = showalertsmall;
        this._cookieslist = cookieslist;
        this._removecredit = removecredit;
        this._handlebrowserdntrequest = handlebrowserdntrequest;
        this._cookiedomain = cookiedomain;
    }


    get hashtag() {
        return this._hashtag;
    }

    set hashtag(value) {
        this._hashtag = value;
    }

    get highprivacy() {
        return this._highprivacy;
    }

    set highprivacy(value) {
        this._highprivacy = value;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(value) {
        this._orientation = value;
    }

    get adblocker() {
        return this._adblocker;
    }

    set adblocker(value) {
        this._adblocker = value;
    }

    get showalertsmall() {
        return this._showalertsmall;
    }

    set showalertsmall(value) {
        this._showalertsmall = value;
    }

    get cookieslist() {
        return this._cookieslist;
    }

    set cookieslist(value) {
        this._cookieslist = value;
    }

    get removecredit() {
        return this._removecredit;
    }

    set removecredit(value) {
        this._removecredit = value;
    }

    get handlebrowserdntrequest() {
        return this._handlebrowserdntrequest;
    }

    set handlebrowserdntrequest(value) {
        this._handlebrowserdntrequest = value;
    }

    get cookiedomain() {
        return this._cookiedomain;
    }

    set cookiedomain(value) {
        this._cookiedomain = value;
    }
}