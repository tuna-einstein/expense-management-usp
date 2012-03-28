package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.SerializableWhitelist;

public interface ExpenseReportRetrieverAsync {

    void getClaimsAsJson(String email, AsyncCallback<String> callback);

    void getClaims(String email, AsyncCallback<List<ExpenseReport>> callback);

    void getExpenseReportAsJson(String encodedKey,
            AsyncCallback<String> callback);

    void getDebtsAsJson(String email, AsyncCallback<String> callback);

 
}
