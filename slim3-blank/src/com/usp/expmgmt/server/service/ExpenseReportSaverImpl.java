package com.usp.expmgmt.server.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slim3.datastore.Datastore;
import org.slim3.util.BeanUtil;
import org.slim3.util.RequestLocator;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Transaction;
import com.google.gson.Gson;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.shared.model.ChangeLogMessage;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.model.OneToOneRecord;
import com.usp.expmgmt.shared.util.EmailSender;
import com.usp.expmgmt.shared.util.ExpenseContent;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class ExpenseReportSaverImpl implements ExpenseReportSaver {
    private final EmailSender sender = new EmailSender();
    public ExpenseReport save(Map<String, Object> input) {
        ExpenseReport report = new ExpenseReport();
        BeanUtil.copy(input, report);
        report.setDateAndTime(dateFromString(report.getDate()));
        
        Key parentKey = ServerSideUtil.getParentKey(report.getOwnerEmail());
        Key childKey = Datastore.allocateId(parentKey, ExpenseReport.class);
        report.setKey(childKey);
        
        List<OneToOneRecord> records = new ArrayList<OneToOneRecord>();
       for (int i = 0; i < report.getEmailList().size(); i++) {
           String slaveEmail = report.getEmailList().get(i);
           double amount = report.getAmountList().get(i);
           OneToOneRecord record = ServerSideUtil.getRecord(report.getOwnerEmail(), slaveEmail, parentKey);
           record.setAmount(record.getAmount() + amount);
           records.add(record);
       }
        
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(report);
        Datastore.put(records);
        tx.commit();
        String checkedValue = (String) input.get("sendMail");
        if ("set".equals(checkedValue)) {
            sender.sendEmail(report.getOwnerEmail(), "Expenses Report from:" + report.getOwnerEmail(), getBodyOfMail(report), report.getEmailList());
        }
        return report;
    }

    private String getBodyOfMail(final ExpenseReport report) {
        String res = "Expense Description : " + report.getDescription();
        res = res + "\n Date : " + report.getDate();
        
        res = res + "\nPeople involved:";
        for (int i=0; i< report.getEmailList().size(); i++) {
            res = res + "\n" + report.getEmailList().get(i) + " : "+report.getAmountList().get(i);
        }
        res = res + "\nPlease visit usp0000.appspot.com for more details.";
        return res;
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
        
        Key parentKey = ServerSideUtil.getParentKey(report.getOwnerEmail());
        List<OneToOneRecord> records = new ArrayList<OneToOneRecord>();
        for (int i = 0; i < report.getEmailList().size(); i++) {
            String slaveEmail = report.getEmailList().get(i);
            double amount = report.getAmountList().get(i) - oldReport.getAmountList().get(i);
            OneToOneRecord record = ServerSideUtil.getRecord(report.getOwnerEmail(), slaveEmail, parentKey);
            record.setAmount(record.getAmount() + amount);
            records.add(record);
        }
        
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(report);
        Datastore.put(records);
        tx.commit();
        sender.sendEmail(report.getOwnerEmail(), "Updated Report from:" + report.getOwnerEmail(), getBodyOfMail(report) + "\n" + change, report.getEmailList());
        
        tx = Datastore.beginTransaction();
        Datastore.put(msg);
        tx.commit();
        
        return "Successfully Updated....";
    }
    
    public String delete(String json) {
        Gson gson = new Gson();
        ExpenseContent content = gson.fromJson(json, ExpenseContent.class);
        ExpenseReport report = content.toExpenseReport();
        ExpenseReport oldReport = Datastore.get(ExpenseReport.class, report.getKey());
        if (!report.getOwnerEmail().equals(getLoggedInUser())) {
            return getLoggedInUser() + " can't delete this transaction :)";
        }
        //gson.
       // BeanUtil.copy(input, report);
        
        Key parentKey = ServerSideUtil.getParentKey(report.getOwnerEmail());
        List<OneToOneRecord> records = new ArrayList<OneToOneRecord>();
        for (int i = 0; i < report.getEmailList().size(); i++) {
            String slaveEmail = report.getEmailList().get(i);
            double amount = - oldReport.getAmountList().get(i);
            OneToOneRecord record = ServerSideUtil.getRecord(report.getOwnerEmail(), slaveEmail, parentKey);
            record.setAmount(record.getAmount() + amount);
            records.add(record);
        }

        Transaction tx = Datastore.beginTransaction();
        Datastore.delete(report.getKey());
        Datastore.put(records);
        tx.commit();
        sender.sendEmail(report.getOwnerEmail(), "Deleted Report by:" + report.getOwnerEmail(), getBodyOfMail(oldReport) , report.getEmailList());
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
    
    private Date dateFromString(String dateString) {
        if (dateString == null || dateString.equals("")) {
            return null;
        }
        //2012 Sep 2 01:55:12
        Date date = null;
        try {
            date = new SimpleDateFormat("yyyy MMM d hh:mm:ss", Locale.ENGLISH).parse(dateString);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return date;
    }
}
