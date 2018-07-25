import { Styles } from '../styles/main.scss'
import { Core } from '../scripts/classes/core'
import { Params } from '../scripts/classes/params'
import { Advert } from '../scripts/components/advert'


document.addEventListener('DOMContentLoaded', () => {

    const core = new Core();
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
    advert.init();
});
