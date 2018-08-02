import { Styles } from '../styles/main.scss'
import { Core } from '../scripts/classes/core'
import { Frame } from '../scripts/classes/frame'
import '../images/cancel.svg'
import { FacebookService } from "./classes/services/facebook_service";
import {IframeService} from "./classes/services/iframe_service";


document.addEventListener('DOMContentLoaded', () => {
    const core = new Core();
    const services = [];
    const facebook = new FacebookService('facebook','social','Facebook', '', '');
    const iframe = new IframeService('iframe', 'other', 'Iframe', '', '');
    services.push(facebook, iframe);
    if (core.getCookie('cookies-privacy')) {
       core.getCookie('cookies-privacy').forEach(function (e) {
           console.log(e.consent);
       });
    }

    const frame = new Frame();
    frame.createBanner();
    const acceptAll = document.querySelector('.cc-accept-all');
    const customize = document.querySelector('.cc-customize');

    acceptAll.addEventListener('click', function (event) {

    });

    customize.addEventListener('click', function () {
        frame.createFrame();
        frame.createServices(services);
        const close = document.querySelector('.cc-frame-close');
        close.addEventListener('click', function () {
            frame.deleteFrame();
        });
        const cookieService = [];
        services.forEach(function (service) {
            cookieService.push(service);
           const slider = document.querySelector('#cc-' + service.key);
            slider.addEventListener('click', function (event) {
                service.consent = event.target.checked;
                if (core.getCookie('cookies-privacy')) {
                    core.getCookie('cookies-privacy').forEach(function (e) {
                        core.setCookie('cookies-privacy', e.consent, 30);
                    });
                }
            });
        });


    });




    /*const core = new Core();
    const params = new Params();

    params.hashtag = '#cc';
    params.cookiedomain = 'localhost';
    core.version = '1.0';
    core.cdn = '';
    core.user = '';
    core.lang = 'fr';
    core.services = '';
    core.added = '';
    core.idprocessed = '';
    core.state = '';
    core.launch = '';
    core.parameters = '';
    core.reloadThePage = false;
    core.isAjax = false;
    core.init(params);
    const advert = new Advert();
    advert.message = 'En poursuivant votre navigation, vous acceptez le dépôt de cookies tiers destinés à vous proposer des vidéos, des boutons de partage, des remontées de contenus de plateformes sociales';
    advert.lang = core.lang;
    advert.init();*/
});
