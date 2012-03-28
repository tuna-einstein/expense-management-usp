package com.usp.expmgmt.shared.util;

import com.google.appengine.api.datastore.KeyFactory;
import com.google.gson.annotations.Expose;
import com.usp.expmgmt.shared.model.ExpenseReport;

public class UserExpenseReport {
    @Expose
    private String email;
    @Expose
    private String date;
    @Expose
    private double amount;
    @Expose
    private String key;
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    public String getKey() {
        return key;
    }
    public void setKey(String key) {
        this.key = key;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
 
    public static UserExpenseReport newUserExpenseReport(ExpenseReport report, String email) {
        UserExpenseReport userReport = new UserExpenseReport();
        userReport.setEmail(email);
        userReport.setDate(report.getDate());
        userReport.setKey(KeyFactory.keyToString(report.getKey()));
        int index = report.getEmailList().indexOf(email);
        userReport.setAmount(report.getAmountList().get(index));
        return userReport;
    }
}
