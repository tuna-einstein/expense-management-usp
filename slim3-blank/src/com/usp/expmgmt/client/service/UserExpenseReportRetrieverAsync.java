package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.usp.expmgmt.shared.util.UserExpenseReport;

public interface UserExpenseReportRetrieverAsync {

    public void getUserExpenseReports(String ownerEmail, String userEmail,
            AsyncCallback<List<UserExpenseReport>> callback);

    public void getUserExpenseReportsAsJson(String ownerEmail, String userEmail,
            AsyncCallback<String> callback);
}
