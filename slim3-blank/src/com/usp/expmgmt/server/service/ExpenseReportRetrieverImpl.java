package com.usp.expmgmt.server.service;

import java.util.List;

import org.slim3.datastore.Datastore;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.ExpenseContent;
import com.usp.expmgmt.shared.util.SerializableWhitelist;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer;

public class ExpenseReportRetrieverImpl implements ExpenseReportRetriever {
    public List<ExpenseReport> getClaims (String email) {
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        return Datastore.query(reportMeta)
                .filter(reportMeta.ownerEmail.equal(email))
                .asList();
    }
 
    public String getClaimsAsJson (String email) {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return gson.toJson(
            UserMapperAmountReducer.mapReducerForClaims(getClaims(email)).toArray()
            );
    }
    
    public List<ExpenseReport> getDebts (String email) {
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        return Datastore.query(reportMeta)
                .filter(reportMeta.emailList.equal(email))
                .asList();
    }

    public String getDebtsAsJson (String email) {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return gson.toJson(
            UserMapperAmountReducer.mapReducerForDebts(getDebts(email), email).toArray()
            );
    }
    
    public String getExpenseReportAsJson(String encodedKey) {
        Key key = KeyFactory.stringToKey(encodedKey);
        ExpenseReport report = Datastore.get(ExpenseReport.class, key);
        ExpenseContent content = ExpenseContent.fromExpenseReport(report);
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return "(" + gson.toJson(content) + ")";
    }
    
}