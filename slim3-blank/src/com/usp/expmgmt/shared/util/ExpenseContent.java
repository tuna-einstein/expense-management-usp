package com.usp.expmgmt.shared.util;

import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.gson.annotations.Expose;
import com.usp.expmgmt.shared.model.ExpenseReport;

/**
 * @author umasankar
 *
 * It is similar to the class {@link ExpenseReport}.  It is basically used to transfer data to and from browser
 */
public class ExpenseContent {
    @Expose
    private String encodedKey;
    @Expose
    private String description;
    @Expose
    private String ownerEmail;
    @Expose
    private String date;
    @Expose
    private List<String> emailList;
    @Expose
    private List<Double> amountList;

    public String getEncodedKey() {
        return encodedKey;
    }
    public void setEncodedKey(String encodedKey) {
        this.encodedKey = encodedKey;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getOwnerEmail() {
        return ownerEmail;
    }
    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }
    public List<String> getEmailList() {
        return emailList;
    }
    public void setEmailList(List<String> emailList) {
        this.emailList = emailList;
    }
    public List<Double> getAmountList() {
        return amountList;
    }
    public void setAmountList(List<Double> amountList) {
        this.amountList = amountList;
    }

    public ExpenseReport toExpenseReport() {
        ExpenseReport report = new ExpenseReport();
        Key key = KeyFactory.stringToKey(encodedKey);
        report.setKey(key);
        report.setOwnerEmail(ownerEmail);
        report.setDate(date);
        report.setDescription(description);
        report.setEmailList(new ArrayList<String>(emailList));
        report.setAmountList(new ArrayList<Double>(amountList));
        return report;
    }

    public static ExpenseContent fromExpenseReport(ExpenseReport report) {
        ExpenseContent content = new ExpenseContent();
        String key = KeyFactory.keyToString(report.getKey());
        content.setEncodedKey(key);
        content.setOwnerEmail(report.getOwnerEmail());
        content.setDate(report.getDate());
        content.setDescription(report.getDescription());
        content.setEmailList(new ArrayList<String>(report.getEmailList()));
        content.setAmountList(new ArrayList<Double>(report.getAmountList()));
        return content;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
}
