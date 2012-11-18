package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface GetLoggedInUserEmailAsync {

    public void getLoggedInUserEmail(AsyncCallback<String> callback);

}
