package com.usp.expmgmt.server.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.slim3.datastore.Datastore;

import com.usp.expmgmt.client.service.FeedbackDataSaver;
import com.usp.expmgmt.shared.model.FeedbackData;

public class FeedbackDataSaverImpl implements FeedbackDataSaver {

    public String saveFeedback(String feedback) {
        FeedbackData feed = new FeedbackData();
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        feed.setDate(dateFormat.format(System.currentTimeMillis()));
 
        feed.setFeedback(feedback);
        feed.setOwnerEmail(ExpenseReportSaverImpl.getLoggedInUser());
        
        Datastore.put(feed);
        
        return "Thanks for your valuable suggestions.... We will surely take a look on it.";
    }
}
