package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import org.slim3.datastore.Datastore;

import com.usp.expmgmt.client.service.AddUserContact;
import com.usp.expmgmt.shared.model.UserContact;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class AddUserContactImpl implements AddUserContact {

    public String addUserContacts(List<String> list) {
        String ownerEmail = ServerSideUtil.getOwnerEmail();
        if (ownerEmail == null) {
            return "U are not logged in. Please login.";
        }
        List<UserContact> contacts = new ArrayList<UserContact>();
        for (String childEmail : list) {
            UserContact userContact = new UserContact();
            userContact.setParentEmail(ownerEmail);
            userContact.setChildEmail(childEmail);
            contacts.add(userContact);;
        }
        Datastore.put(contacts);
        return list.size() + " number of contacts updated successfully";
    }
}
