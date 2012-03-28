package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface LoggedInUserFetcherAsync {

    public void getOwnerEmail(AsyncCallback<String> callback);

}
