import { Styles } from '../styles/main.scss'
import { Core } from '../scripts/classes/core'
import '../images/cancel.svg'
import {Frame} from "./classes/frame";
import {FacebookService} from "./classes/services/facebook_service";

document.addEventListener('DOMContentLoaded', () => {
    const core = new Core();
    const services = core.services = [new FacebookService('facebook','social','Facebook', 'https://www.facebook.com/policies/cookies/', 'wait')];
    const banner = core.initBanner(services);
    if (!core.getCookie('cookies-privacy')) {
        core.setCookie('cookies-privacy', JSON.stringify(core.services), 30);
    }
    core.checkCookie();
});