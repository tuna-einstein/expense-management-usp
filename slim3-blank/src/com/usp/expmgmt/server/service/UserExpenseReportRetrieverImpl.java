package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import org.slim3.datastore.Datastore;

import com.google.gson.Gson;
import com.usp.expmgmt.client.service.UserExpenseReportRetriever;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.UserExpenseReport;

/**
 *  
 */

public class UserExpenseReportRetrieverImpl implements UserExpenseReportRetriever {
 
    /**
     * Fetches all the reports whose ownerEmail matches the ownerEmail and EmailList contains userEmail  
     */
    public List<UserExpenseReport> getUserExpenseReports(String ownerEmail,  String userEmail) {
        List<ExpenseReport> reports = getReports(ownerEmail, userEmail);
        List<UserExpenseReport> userList = new ArrayList<UserExpenseReport>();
        for (ExpenseReport report : reports) {
            userList.add(UserExpenseReport.newUserExpenseReport(report, userEmail));
        }
        return userList;
    }

    /**
     * Fetches all the reports (in json format) whose ownerEmail matches the ownerEmail and EmailList contains userEmail  
     */
    public String getUserExpenseReportsAsJson(String ownerEmail, String userEmail) {
      return  new Gson().toJson(getUserExpenseReports(ownerEmail, userEmail));
    }

    /**
     * fetches expense reports whose ownerEmail matches with OwnerEmail and EmailList contains userEmail
     */
    public static List<ExpenseReport> getReports(String ownerEmail, String userEmail) {
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        List<ExpenseReport> reports =  Datastore.query(reportMeta)
                .filter(reportMeta.ownerEmail.equal(ownerEmail))
                .filter(reportMeta.emailList.equal(userEmail))
                .asList();
        return reports;
    }
}
