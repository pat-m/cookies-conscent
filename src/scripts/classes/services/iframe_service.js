import {Service} from "../services";

export class IframeService extends Service {

    constructor(key, type, name, uri, consent, cookies) {
        super(key, type, name, uri, consent, cookies);
        this.hide();
        //console.log(this.consent);
    }

    hide() {
        if (this.consent === false) {
            const iframe = document.querySelector('iframe');
            iframe.remove();
        }
    }

    handleEvent() {
        const iframe = document.querySelector();
        iframe.addEventListener('change', function (event) {
            console.log(event.checked);
        })
    }
}