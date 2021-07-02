import { LightningElement,api } from 'lwc';

export default class ContactPreview_EditorApp extends LightningElement {
    @api recordId;

    handleSuccess = () =>{
        console.log('--handleSuccess--');
    }

    handleSubmit = ()=>{
        console.log('--handleSubmit--');
    }
}