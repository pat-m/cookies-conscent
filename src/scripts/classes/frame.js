export class Frame {

    constructor() {

    }
    // Create HTML Banner on Top of Page
    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cc-frame-banner';
        const buttons = document.createElement('div');
        buttons.className = 'cc-frame-buttons';
        const bannerParagraph = document.createElement('p');
        bannerParagraph.textContent = 'En poursuivant votre navigation, vous acceptez le dépôt de cookies tiers destinés à vous proposer des vidéos, des boutons de partage, des remontées de contenus de plateformes sociales ';
        const accept = document.createElement('button');
        accept.className = 'cc-accept-all';
        accept.textContent = 'Accepter';
        const customize = document.createElement('button');
        customize.className = 'cc-frame-customize';
        customize.textContent = 'Gérer mes cookies';
        banner.append(bannerParagraph);
        banner.append(buttons);
        buttons.append(accept);
        buttons.append(customize);
        document.body.append(banner);
    }


    // Create HTML cookies admin conscent for users
    createFrame() {
        const bg = document.createElement('div');
        bg.className = 'cc-frame-background';
        const close = document.createElement('div');
        close.className = 'cc-frame-close';
        const content = document.createElement('div');
        content.className = 'cc-frame-content';
        const contentContainer = document.createElement('div');
        contentContainer.className = 'cc-frame-content-container';
        const title = document.createElement('h2');
        title.textContent = 'Gestion de vos préférences sur les cookies';
        const description = document.createElement('p');
        description.textContent = 'Certaines fonctionnalités de ce site (partage de contenus sur les réseaux sociaux, lecture directe de vidéos) s’appuient sur des services proposés par des sites tiers. Ces fonctionnalités déposent des cookies permettant notamment à ces sites de tracer votre navigation. Ces cookies ne sont déposés que si vous donnez votre accord. Vous pouvez vous informer sur la nature des cookies déposés, les accepter ou les refuser soit globalement pour l’ensemble du site et l’ensemble des services, soit service par service.';
        document.body.append(bg);
        document.body.append(content);
        document.body.append(contentContainer);
        content.append(contentContainer);
        contentContainer.append(close);
        contentContainer.append(title);
        contentContainer.append(description);
    }
    // Create HTML Service line with buttons
    createServices(services) {
        const content = document.querySelector('.cc-frame-content-container');
        services.forEach(function (s) {
            const line = document.createElement('div');
            line.className = 'cc-frame-service';
            const description = document.createElement('div');
            description.className = 'cc-frame-service-description';
            const buttons = document.createElement('div');
            buttons.className = 'cc-frame-service-buttons';
            const accept = document.createElement('button');
            const reject = document.createElement('button');
            const consentLabel = document.createElement('label');
            consentLabel.className = 'switch';
            const consent = document.createElement('input');
            const slider = document.createElement('span');
            consent.id = "cc-" + s.key;
            slider.className = 'slider';
            consent.type = 'checkbox';
            if (s.consent === 'wait') {
                consent.checked = true
            } else {
                consent.checked = s.consent;
            }
            consentLabel.append(consent);
            consentLabel.append(slider);
            description.textContent = s.name;
            line.appendChild(description);
            buttons.appendChild(consentLabel);
            line.appendChild(buttons);
            content.appendChild(line);
        });
    }
    // Destroy Frame
    closeFrame() {
        document.querySelector('.cc-frame-content').remove();
        document.querySelector('.cc-frame-background').remove();
    }

}