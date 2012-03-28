package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface DemoGetSingleExpenseReportAsync {

    void getReport(String key, AsyncCallback<String> callback);

}
