package com.usp.expmgmt.server.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.usp.expmgmt.client.service.SendReminderEmailService;
import com.usp.expmgmt.shared.model.ReminderEmailData;
import com.usp.expmgmt.shared.util.EmailSender;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class SendReminderEmailServiceImpl implements SendReminderEmailService {

    private final EmailSender sender = new EmailSender();
    public void sendEmail(ReminderEmailData data) throws IOException {
        String ownerEmail = ServerSideUtil.getOwnerEmail();
        if (ownerEmail == null) {
            ServerSideUtil.redirectToLoginPage();
            return;
        }
        List<String> emails = new ArrayList<String>();
        emails.add(data.getEmailTo());
        sender.sendEmail(ownerEmail, "Payment reminder from " + ownerEmail,
            getBodyOfMail(ownerEmail, data.getAmount()), emails); 
    }
    
    private String getBodyOfMail(String ownerEmail, String amount) {
        String res = "Hello, \n";
        res = res + "\n" + ownerEmail + " poked you.";
        res = res + "\n" + "Payment amount : " + amount;
        res = res + "\n\nPlease visit usp0000.appspot.com for more details.";
        return res;
    }
}
