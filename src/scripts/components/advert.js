export class Advert {
    constructor(message, lang ) {
        this._message = message;
        this._lang = lang;
    }
    init() {
        const block = this.createBlock();
        const accept = this.createButton('accepter');
        const customize = this.createButton('personaliser');
        block.append(this.message, accept, customize );
        document.body.append(block);
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get lang() {
        return this._lang;
    }

    set lang(value) {
        this._lang = value;
    }

    createBlock() {
        const el = document.createElement('div');
        el.className = 'cc-advert';
        return el;
    }

    createButton(title) {
        const el = document.createElement('button');
        el.className = 'cc-' + title;
        const content = this.createContent();
        el.addEventListener('click', function (event) {
            if(event.target.className === 'cc-personaliser') {
                document.body.append(content);
            }
        });
        el.append(title);
        return el
    }

    createContent() {
        const el = document.createElement('div');
        const message = 'Gestion de vos préférences sur les cookies\n' +
            'Certaines fonctionnalités de ce site (partage de contenus sur les réseaux sociaux, lecture directe de vidéos) s’appuient sur des services proposés par des sites tiers. Ces fonctionnalités déposent des cookies permettant notamment à ces sites de tracer votre navigation. Ces cookies ne sont déposés que si vous donnez votre accord. Vous pouvez vous informer sur la nature des cookies déposés, les accepter ou les refuser soit globalement pour l’ensemble du site et l’ensemble des services, soit service par service. '
        el.append(message);
        el.className = 'cc-content-customize';
        return el
    }
}

