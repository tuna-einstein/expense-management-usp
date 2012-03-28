package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.usp.expmgmt.client.service.DemoGetSingleExpenseReport;
import com.usp.expmgmt.shared.model.ExpenseReport;

public class DemoGetSingleExpenseReportImpl implements DemoGetSingleExpenseReport {

    public String getReport (String key) {
        ExpenseReport report = new ExpenseReport();
        List<String> emailList = new ArrayList<String>();
        emailList.add("umasankar@gmail.com");
        emailList.add("tuna@gmail.com");
        List<Double> amountList = new ArrayList<Double>();
        amountList.add(200.5);
        amountList.add(300.6);
        
        report.setEmailList(emailList);
        report.setAmountList(amountList);
        report.setDate("12thMay, 2013");
        report.setDescription("Its a demo expense");
       return "(" + new Gson().toJson(report) + ")";
    }
}
