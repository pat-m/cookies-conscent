import { Styles } from '../styles/main.scss'
import { Core } from '../scripts/classes/core'
import { Frame } from '../scripts/classes/frame'
import '../images/cancel.svg'
import {Service} from "./classes/services";
import {FacebookService} from "./classes/services/facebookService";


document.addEventListener('DOMContentLoaded', () => {
    const core = new Core();
    const frame = new Frame();
    const services = [];
    services.push(new FacebookService("facebook"));
    services.push(new Service("google-analytics"));
    services.push(new Service("twitter"));
    core.setCookie('cookies-conscent', services, 30);
    const banner = frame.createBanner();
        const acceptAll = document.querySelector('.cc-accept-all');
        const customize = document.querySelector('.cc-customize');
        acceptAll.addEventListener('click', function (event) {

        });

        customize.addEventListener('click', function (event) {
            frame.createFrame();
            frame.createServices(services);
            const close = document.querySelector('.cc-frame-close');
            close.addEventListener('click', function (event) {
                frame.deleteFrame();
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
