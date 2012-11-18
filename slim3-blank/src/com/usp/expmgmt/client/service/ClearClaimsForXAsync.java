package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ClearClaimsForXAsync {

    public void clearClaims(String userEmail, AsyncCallback<String> callback);

}
