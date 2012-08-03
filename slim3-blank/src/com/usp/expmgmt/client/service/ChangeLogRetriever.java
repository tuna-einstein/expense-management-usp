package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("service.s3gwt")
public interface ChangeLogRetriever extends RemoteService {

    String getChangeLogsAsJson(String expenseReportKey);

}
