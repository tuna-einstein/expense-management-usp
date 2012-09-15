package com.usp.expmgmt.shared.util;

import java.io.IOException;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EmailSender {

    public void sendEmail(String from, String subject, String body, List<String> receipients) {
        Message msg = compose(from, subject, body, receipients);
        try {
            Transport.send(msg);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public void sendEmailWithAttachment(String from,
            List<String> receipients,
            String subject,
            String body,
            String attachmentData) {

        Message msg = compose(from, subject, body, receipients);
        MimeBodyPart attachment = new MimeBodyPart();
        MimeMultipart mp = new MimeMultipart();

        try {

            attachment.setFileName(subject + ".html");
            attachment.setContent(attachmentData, "text/html");
            mp.addBodyPart(attachment);
            msg.setContent(mp);
            Transport.send(msg);
        } catch (MessagingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } 
    }
    private Message compose(String from, String subject, String body, List<String> receipients) {
        Properties props = new Properties();
        Session mailSession = Session.getDefaultInstance(props, null);    
        Message msg = new MimeMessage(mailSession);

        try {
            if (from != null) {
                msg.setFrom(new InternetAddress(from));
            } else {
                msg.setFrom(new InternetAddress("tuna.einstein@gmail.com"));
            }

            for (String to : receipients) {
                msg.addRecipient(Message.RecipientType.TO,
                    new InternetAddress(to));
            }
            msg.setSubject(subject);
            msg.setText(body);

        } catch (AddressException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        return msg;
    }

}
