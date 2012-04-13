package com.usp.expmgmt.client.service;

import java.util.Map;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.usp.expmgmt.shared.model.ExpenseReport;

public interface ExpenseReportSaverAsync {
    public void save(Map<String, Object> input, AsyncCallback<ExpenseReport> callback);

    public void save(String name, AsyncCallback<String> asyncCallback);

    public void delete(String json, AsyncCallback<String> callback);
}
