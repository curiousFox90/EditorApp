public with sharing class retrieveRecords_EditorApp {
    @AuraEnabled
    public static list<Account> fetchAccounts(){
        set<id> accIdSet = new set<id>{'0019000000ld6L6AAI','0019000000ld6L7AAI','0019000000ld6L8AAI','0019000000ld6L9AAI','0019000000ld6LAAAY','0019000000ld6LDAAY','0019000000ld6LEAAY','0019000000ld6LFAAY','0019000000ld6LGAAY','00190000012HzjnAAC'};
        list<Account> accountReturnList = [SELECT Id, Name,Website, Phone, Industry,Image_URL__c FROM Account WHERE Id IN : accIdSet limit 5];
        return accountReturnList;
    }

    @AuraEnabled
    public static list<Contact> fetchContacts(){
        set<Id> contactIdSet = new set<id>{'0039000000ms6CcAAI','0039000000ms6CaAAI','0039000000ms6CnAAI','0039000000ms6CoAAI','0039000000ms6CqAAI','0039000000ms6CbAAI','0039000000ms6CkAAI','0039000000ms6ChAAI','0039000000ms6ClAAI','0039000000ms6CgAAI'};
        list<Contact> contactReturnList = [SELECT Id, Name,Phone,Title, Email,Image_URL__c FROM Contact WHERE Id IN :contactIdSet limit 5];
        return contactReturnList;
    }

    public static List<Opportunity> fetchOpportunities(){
        return null;
    }
}