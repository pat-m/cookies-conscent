import {Core} from "./core";

export class Service {

    constructor(key, type, name, uri, consent, cookies = []) {
        this._key = key;
        this._type = type;
        this._name = name;
        this._uri = uri;
        this._consent = consent;
        this._cookies = cookies;
    }


    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get uri() {
        return this._uri;
    }

    set uri(value) {
        this._uri = value;
    }

    get consent() {
        return this._consent;
    }

    set consent(value) {
        this._consent = value;
    }

    get cookies() {
        return this._cookies;
    }

    set cookies(value) {
        this._cookies = value;
    }
}