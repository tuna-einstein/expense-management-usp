package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import org.slim3.datastore.Datastore;

import com.google.appengine.api.datastore.Transaction;
import com.usp.expmgmt.client.service.ClearClaimsForX;
import com.usp.expmgmt.shared.model.ChangeLogMessage;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.EmailSender;

public class ClearClaimsForXImpl implements ClearClaimsForX {
 private final EmailSender emailSender = new EmailSender();
    public String clearClaims(String userEmail) {
        String ownerEmail = ExpenseReportSaverImpl.getLoggedInUser();
        if (ownerEmail == null) {
            return "User Not Logged in ";
        }
       
        List<ExpenseReport> reports = UserExpenseReportRetrieverImpl.getReports(ownerEmail, userEmail);
        String body = "";
        List<ChangeLogMessage> logs = new ArrayList<ChangeLogMessage>();
        
        for (ExpenseReport report : reports) {
            String change = clear(report, userEmail);
            if (!change.equals("")) {
            logs.add(ExpenseReportSaverImpl.getLogMessage(report.getKey(), "Clear", change));
            Transaction tx = Datastore.beginTransaction();
            Datastore.put(report);
            tx.commit();
            body = body + change + "\n";
            }
        }
        
       
        
//        //Transaction tx = Datastore.beginTransaction();
//        Datastore.put(reports);
//        //tx.commit();
        
      //  tx = Datastore.beginTransaction();
        Datastore.put(logs);
      //  tx.commit();
        List<String> recepients = new ArrayList<String>();
        recepients.add(userEmail);
        if (!body.equals("")) {
        emailSender.sendEmail(ownerEmail, "cleared debts :)", body, recepients);
        }
        return "Successfully cleared claims for " + userEmail;
    }
    
   
   
    
    private String clear(ExpenseReport report, String userEmail) {
        String change = "";
        for (int i =0; i < report.getEmailList().size(); i++) {
            if (report.getEmailList().get(i).equals(userEmail) && 
                    Math.abs(report.getAmountList().get(i)) > 0.00001) {
                    change = report.getEmailList().get(i) + ": from " + report.getAmountList().get(i) + " to " + 0.0 + "<br>";
                    report.getAmountList().set(i, 0.0);
               }
        }
        return change;
    }
}
