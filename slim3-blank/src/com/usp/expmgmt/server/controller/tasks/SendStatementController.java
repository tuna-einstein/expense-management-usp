package com.usp.expmgmt.server.controller.tasks;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;

import com.usp.expmgmt.shared.util.EmailSender;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class SendStatementController extends Controller {

    @Override
    public Navigation run() throws Exception {
        String email = request.getParameter("email");
        Date date = new Date();
        String hello =  ServerSideUtil.getStatementTillDate(email, date);
        EmailSender sender = new EmailSender();
        List<String> emails = new ArrayList<String>();
        emails.add(email);
        sender.sendEmailWithAttachment(null, emails, "expense statement till : " + date, "Please find the attachment", hello);
        return null;
    }
}
