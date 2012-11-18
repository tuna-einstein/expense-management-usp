package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ChangeLogRetrieverAsync {

    void getChangeLogsAsJson(String expenseReportKey,
            AsyncCallback<String> callback);

}
