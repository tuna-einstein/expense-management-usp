package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.SerializableWhitelist;

@RemoteServiceRelativePath("service.s3gwt")
public interface ExpenseReportRetriever extends RemoteService {

    public String getClaimsAsJson (String email);

    public List<ExpenseReport> getClaims (String email) ;

    public String getExpenseReportAsJson(String encodedKey);

    public String getDebtsAsJson(String email);

}
