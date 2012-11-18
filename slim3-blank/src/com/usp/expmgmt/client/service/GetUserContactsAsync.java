package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface GetUserContactsAsync {

    public void getUserContacts(AsyncCallback<List<String>> callback);

}
