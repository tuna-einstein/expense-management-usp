package com.usp.expmgmt.client.service;

import java.util.Map;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.usp.expmgmt.shared.model.ExpenseReport;

@RemoteServiceRelativePath("service.s3gwt")
public interface ExpenseReportSaver extends RemoteService {
    public String save(String json);

    ExpenseReport save(Map<String, Object> input);
}
