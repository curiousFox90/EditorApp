import { LightningElement,track,api,wire } from 'lwc';
import getAccounts from '@salesforce/apex/retrieveRecords_EditorApp.fetchAccounts';
import getContacts from '@salesforce/apex/retrieveRecords_EditorApp.fetchContacts';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
export default class MainPanel_EditorApp extends NavigationMixin(LightningElement) {

    
    @track accountsList;
    @track contactsList;
    @track recordAccId;
    @track recordConId;

    showAccounts = false;
    showContacts = false;
    showModal = false;
    showAccountPreview =false;
    showContactPreview = false;

    connectedCallback(){
        this.showAccounts = true;
        this.handleAccountRecords();
    }

    handleAccountRecords = () =>{
        this.showAccounts = true;
        this.showContacts = false;
        this.showContactPreview = false;

        getAccounts()
        .then(acc =>
            {
                this.accountsList = acc;
            }
        )
        .catch(error => {
            console.log(JSON.stringify(error));
        })
    }

    handleContactRecords = () =>{
        this.showContacts = true;
        this.showAccounts = false;
        this.showAccountPreview = false;
        this.template.querySelector('.centerDiv').classList.remove('center-div-class');
        
        getContacts()
        .then(con=>{
            this.contactsList = con;
            this.contactsList = this.contactsList;
        })

        .catch(error => {
            console.log(JSON.stringify(error));
        })
        
    }

    handleCloseModal = () => {
        this.showModal = false;
    }

    outOfScope = () =>{
        this.showModal = true;
    }

    // to show account preview component
    handleAccountPreview = (event) =>{
        this.recordAccId = event.target.value;
        this.showAccountPreview = true;
        this.showContactPreview = false;
        this.template.querySelector('.centerDiv').classList.add('center-div-class');
    }

    // to navigate to Conctact using navigation
    handleContactPreview = (event) =>{
        this.recordConId = event.target.value;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordConId,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })

    }

    // navigation to files
    navigateToFiles = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }

    // navigation to reports
    navigateToReports = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }

    // to refresh updated records
    refreshRecords = () =>{
        refreshApex(this.handleAccountRecords());
    }
}