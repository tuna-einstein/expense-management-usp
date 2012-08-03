package com.usp.expmgmt.server.service;

import java.util.List;

import org.slim3.datastore.Datastore;

import com.google.gson.Gson;
import com.usp.expmgmt.client.service.ChangeLogRetriever;
import com.usp.expmgmt.server.meta.ChangeLogMessageMeta;
import com.usp.expmgmt.shared.model.ChangeLogMessage;

public class ChangeLogRetrieverImpl implements ChangeLogRetriever {
    
    public String getChangeLogsAsJson(String expenseReportKey) {
      return  new Gson().toJson(getChangeLogs(expenseReportKey));
    }

    private List<ChangeLogMessage> getChangeLogs(String expenseReportKey) {
        
        ChangeLogMessageMeta logMeta = ChangeLogMessageMeta.get();
        List<ChangeLogMessage> logs =  Datastore.query(logMeta)
                .filter(logMeta.expenseReportKey.equal(expenseReportKey))
                .asList();
        return logs;
    }
}
