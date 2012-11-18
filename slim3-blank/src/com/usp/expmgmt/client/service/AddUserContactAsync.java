package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface AddUserContactAsync {

    public void addUserContacts(List<String> list,
            AsyncCallback<String> callback);

}
