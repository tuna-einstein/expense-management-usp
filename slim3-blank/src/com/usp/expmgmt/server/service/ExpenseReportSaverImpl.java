package com.usp.expmgmt.server.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slim3.datastore.Datastore;
import org.slim3.util.BeanUtil;
import org.slim3.util.CopyOptions;
import org.slim3.util.RequestLocator;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Transaction;
import com.google.gdata.data.dublincore.Date;
import com.google.gson.Gson;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.shared.model.ChangeLogMessage;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.ExpenseContent;

public class ExpenseReportSaverImpl implements ExpenseReportSaver {
    
    public ExpenseReport save(Map<String, Object> input) {
        ExpenseReport report = new ExpenseReport();
        BeanUtil.copy(input, report);
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(report);
        tx.commit();
        return report;
    }
    
    public static String getLoggedInUser() {
        HttpServletRequest request = RequestLocator.get();
        if (request.getUserPrincipal() != null) {
            String ownerEmail = request.getUserPrincipal().getName();
            return ownerEmail;
        }
        return "";
    }
    
    public String save(String json) {
        Gson gson = new Gson();
        ExpenseContent content = gson.fromJson(json, ExpenseContent.class);
        ExpenseReport report = content.toExpenseReport();
        //gson.
       // BeanUtil.copy(input, report);
        ExpenseReport oldReport = Datastore.get(ExpenseReport.class, report.getKey());
        String change = diff(oldReport, report);
        
        ChangeLogMessage msg = getLogMessage(report.getKey(), content.getLogMessage(), change);
        
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(report);
        tx.commit();
        
        
        tx = Datastore.beginTransaction();
        Datastore.put(msg);
        tx.commit();
        
        return change;
    }
    
    public String delete(String json) {
        Gson gson = new Gson();
        ExpenseContent content = gson.fromJson(json, ExpenseContent.class);
        ExpenseReport report = content.toExpenseReport();
        
        if (!report.getOwnerEmail().equals(getLoggedInUser())) {
            return getLoggedInUser() + " can delete this transaction :)";
        }
        //gson.
       // BeanUtil.copy(input, report);
        
        
        Transaction tx = Datastore.beginTransaction();
        Datastore.delete(report.getKey());
        tx.commit();
        return "Delete Successful";
    }
    
    public static ChangeLogMessage getLogMessage(Key parentKey, String logMessage, String change) {
        ChangeLogMessage msg = new ChangeLogMessage();
        Key childKey = Datastore.allocateId(parentKey, ChangeLogMessage.class);
        msg.setKey(childKey);
        msg.setExpenseReportKey(KeyFactory.keyToString(parentKey));
        msg.setChangeMessage(change);
        msg.setLogMessage(logMessage);
        
        msg.setActorName(getLoggedInUser());
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        msg.setDate(dateFormat.format(System.currentTimeMillis()));
        
       return msg;
    }
    
    public static String diff(ExpenseReport oldCopy, ExpenseReport newCopy ) {
        String change = "";
        for (int i = 0; i < oldCopy.getAmountList().size(); i++) {
            Double oldAmount = oldCopy.getAmountList().get(i);
            Double newAmount = newCopy.getAmountList().get(i);
            if (Math.abs(oldAmount - newAmount) > 0.000001) {
                change += newCopy.getEmailList().get(i) + ": from " + oldAmount + " to " + newAmount + "<br>";
            }
        }
        return change;
    }
}
