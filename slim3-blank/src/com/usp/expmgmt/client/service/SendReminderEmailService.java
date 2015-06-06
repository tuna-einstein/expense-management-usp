package com.usp.expmgmt.client.service;

import java.io.IOException;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.usp.expmgmt.shared.model.ReminderEmailData;

@RemoteServiceRelativePath("service.s3gwt")
public interface SendReminderEmailService extends RemoteService {

    public void sendEmail(ReminderEmailData data) throws IOException;
}
