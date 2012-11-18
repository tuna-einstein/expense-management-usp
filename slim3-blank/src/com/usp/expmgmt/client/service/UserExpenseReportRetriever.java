package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.usp.expmgmt.shared.util.UserExpenseReport;

@RemoteServiceRelativePath("service.s3gwt")
public interface UserExpenseReportRetriever extends RemoteService {

    public List<UserExpenseReport> getUserExpenseReports(String ownerEmail,
            String userEmail);

   public  String getUserExpenseReportsAsJson(String ownerEmail, String userEmail);

}
