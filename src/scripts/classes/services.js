export class Service {
    constructor(name, url, category) {
        this._name = name;
        this._url = url;
        this._category = category;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }


    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }
}