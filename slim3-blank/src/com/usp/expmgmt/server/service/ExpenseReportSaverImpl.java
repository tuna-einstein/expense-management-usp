package com.usp.expmgmt.server.service;

import java.util.Map;

import org.slim3.datastore.Datastore;
import org.slim3.util.BeanUtil;
import org.slim3.util.CopyOptions;

import com.google.appengine.api.datastore.Transaction;
import com.google.gson.Gson;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
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
    
    public String save(String json) {
        Gson gson = new Gson();
        ExpenseContent content = gson.fromJson(json, ExpenseContent.class);
        ExpenseReport report = content.toExpenseReport();
        //gson.
       // BeanUtil.copy(input, report);
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(report);
        tx.commit();
        return gson.toJson(ExpenseContent.fromExpenseReport(report));
    }
    
    public String delete(String json) {
        Gson gson = new Gson();
        ExpenseContent content = gson.fromJson(json, ExpenseContent.class);
        ExpenseReport report = content.toExpenseReport();
        //gson.
       // BeanUtil.copy(input, report);
        Transaction tx = Datastore.beginTransaction();
        Datastore.delete(report.getKey());
        tx.commit();
        return gson.toJson(ExpenseContent.fromExpenseReport(report));
    }
}
