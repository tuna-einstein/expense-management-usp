package com.usp.expmgmt.server.service;

import java.util.ArrayList;
import java.util.List;

import org.slim3.datastore.Datastore;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.server.meta.OneToOneRecordMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.model.OneToOneRecord;
import com.usp.expmgmt.shared.util.ExpenseContent;
import com.usp.expmgmt.shared.util.SerializableWhitelist;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;

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
//        return gson.toJson(
//            UserMapperAmountReducer.mapReducerForClaims(getClaims(email)).toArray()
//            );
        
        return gson.toJson(
            getClaimsAsUserAndAmount(email).toArray()
            );

    }

    public List<UserAndAmount> getClaimsAsUserAndAmount(String email) {
        OneToOneRecordMeta meta = OneToOneRecordMeta.get();
        List<OneToOneRecord> records =  Datastore.query(meta)
                .filter(meta.masterEmail.equal(email))
                .sort(meta.slaveEmail.asc)
                .asList();
        List<UserAndAmount> results = new ArrayList<UserAndAmount>();
        for (OneToOneRecord record : records) {
            UserAndAmount r = new UserAndAmount();
            r.setAmount(record.getAmount());
            r.setEmail(record.getSlaveEmail());
            results.add(r);
        }
        return results;
        
    }
 
    public List<ExpenseReport> getDebts (String email) {
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        return Datastore.query(reportMeta)
                .filter(reportMeta.emailList.equal(email))
                .asList();
    }

    public String getNetPaymentAsJson (String loggedInUser) {
//        List<UserAndAmount> claims = UserMapperAmountReducer.mapReducerForClaims(getClaims(loggedInUser));
//        List<UserAndAmount> debts = UserMapperAmountReducer.mapReducerForDebts(getDebts(loggedInUser), loggedInUser);
        
        List<UserAndAmount> claims = getClaimsAsUserAndAmount(loggedInUser);
        List<UserAndAmount> debts = getDebtsAsUserAndAmount(loggedInUser);
        
        
        List<UserAndAmount> nets = UserMapperAmountReducer.mapReducerForNetPayment(claims, debts);
        
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return gson.toJson(nets.toArray());
    }

    public String getDebtsAsJson (String email) {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
//        return gson.toJson(
//            UserMapperAmountReducer.mapReducerForDebts(getDebts(email), email).toArray()
//            );
      return gson.toJson(
      getDebtsAsUserAndAmount(email).toArray()
      );
        
    }

    public List<UserAndAmount> getDebtsAsUserAndAmount (String email) {
        OneToOneRecordMeta meta = OneToOneRecordMeta.get();
        List<OneToOneRecord> records =  Datastore.query(meta)
                .filter(meta.slaveEmail.equal(email))
                .sort(meta.masterEmail.asc)
                .asList();
        List<UserAndAmount> results = new ArrayList<UserAndAmount>();
        for (OneToOneRecord record : records) {
            UserAndAmount r = new UserAndAmount();
            r.setAmount(record.getAmount());
            r.setEmail(record.getMasterEmail());
            results.add(r);
        }
        return results;
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