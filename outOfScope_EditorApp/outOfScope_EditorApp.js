import { LightningElement } from 'lwc';
import Industry_Image from '@salesforce/resourceUrl/Industry_Images';

export default class OutOfScope_EditorApp extends LightningElement {

    image = 'https://statuscast-web.azureedge.net/wp-content/uploads/2019/02/banner@2x.png'; // planned maintenance image

    connectedCallback() { 
        //using event listner to take esc key as input to close event
        this.template.addEventListener('keydown', event => {
            var keycode = event.code;
            if(keycode == 'Escape'){
                this.dispatchEvent(new CustomEvent('closemodal')); //dispatching the event to close modal - handled in main panel
            }
        }, true);
    }
}