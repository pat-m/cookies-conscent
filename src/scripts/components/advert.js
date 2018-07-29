export class Advert {
    constructor(message, lang ) {
        this._message = message;
        this._lang = lang;
    }
    init() {
        const block = this.createBlock();
        const accept = this.createButton('OK, tout accepter');
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
                //content.className = 'cc-advert-content';
                //content.append(close);
                document.body.append(content);
            }
        });
        el.append(title);
        return el
    }

    createContent() {
        const blur = document.createElement('div');
        const container = document.createElement('div');
        const title = document.createElement('h1');
        const message = document.createElement('p');
        const sep = document.createElement('hr');
        const services = document.createElement('div');
        const servicesTitle = document.createElement('h1');
        const servicesButtons = document.createElement('div');
        const allowAll = document.createElement('button');
        const rejectAll = document.createElement('button');
        const allow = document.createElement('button');
        const reject = document.createElement('button');
        blur.className = 'cc-advert-content-bg';
        //document.body.append(blur);
        container.className = 'cc-advert-content';
        message.className = 'cc-advert-content-description';
        services.className = 'cc-advert-content-services';
        title.append("Gestion de vos préférences sur les cookies");
        message.append("Certaines fonctionnalités de ce site (partage de contenus sur les réseaux sociaux, lecture directe de vidéos) s’appuient sur des services proposés par des sites tiers. Ces fonctionnalités déposent des cookies permettant notamment à ces sites de tracer votre navigation. Ces cookies ne sont déposés que si vous donnez votre accord. Vous pouvez vous informer sur la nature des cookies déposés, les accepter ou les refuser soit globalement pour l’ensemble du site et l’ensemble des services, soit service par service.");
        servicesTitle.append("Préférences pour tous les services");
        allowAll.append("Accepter");
        rejectAll.append("Refuser");
        services.append(servicesTitle);
        servicesButtons.append(allowAll);
        servicesButtons.append(rejectAll);
        services.append(servicesButtons);
        container.append(title);
        container.append(message);
        container.append(sep);
        container.append(services);

        return container
    }
}

