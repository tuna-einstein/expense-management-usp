package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import org.slim3.datastore.Datastore;

import com.usp.expmgmt.client.service.GetUserContacts;
import com.usp.expmgmt.server.meta.UserContactMeta;
import com.usp.expmgmt.shared.model.UserContact;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class GetUserContactsImpl implements GetUserContacts {

    public List<String> getUserContacts() {
       List<String> contacts = new ArrayList<String>();
       String ownerEmail = ServerSideUtil.getOwnerEmail();
       if (ownerEmail == null) {
           return contacts;
       }
       
       UserContactMeta contactMeta = UserContactMeta.get();
       List<UserContact> userContacts =  Datastore.query(contactMeta)
               .filter(contactMeta.parentEmail.equal(ownerEmail))
               .asList();
       for (UserContact contact : userContacts) {
           contacts.add(contact.getChildEmail());
       }
       return contacts;
    }
}
