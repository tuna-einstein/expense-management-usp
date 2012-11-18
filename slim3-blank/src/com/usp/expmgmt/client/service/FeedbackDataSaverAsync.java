package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface FeedbackDataSaverAsync {

    public void saveFeedback(String feedback, AsyncCallback<String> callback);

}
