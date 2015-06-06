package com.usp.expmgmt.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.usp.expmgmt.shared.model.ReminderEmailData;

public interface SendReminderEmailServiceAsync {

    void sendEmail(ReminderEmailData data, AsyncCallback<Void> callback);

}
