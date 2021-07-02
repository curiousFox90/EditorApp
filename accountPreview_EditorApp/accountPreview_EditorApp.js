import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { refreshApex} from '@salesforce/apex';

// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import PHONE_FIELD from '@salesforce/schema/Account.Phone';
// import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
// import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

// const fields= [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD, INDUSTRY_FIELD];
export default class AccountPreview_EditorApp extends NavigationMixin(LightningElement) {

    @api recordId;

    handleSuccess = (event) =>{
        console.log('--handleSuccess--');
        //navigation service to generate url and display it on toast
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            }
        }).then(url =>
        {
            //custom event dispatched for refresh apex
            const updateRecord = new CustomEvent('updaterecord')
            this.dispatchEvent(updateRecord);

            this.dispatchEvent(new ShowToastEvent({
                title: 'Record Updated!',
                message: '{0} to view the record',
                messageData: [{
                    label: 'Click here',
                    url
                }],
                variant: 'success',
                mode: 'sticky'
            }))
        })
    }

    handleSubmit = ()=>{
        
        console.log('--handleSubmit--');
    }
}