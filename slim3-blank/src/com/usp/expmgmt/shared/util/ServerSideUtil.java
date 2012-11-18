package com.usp.expmgmt.shared.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slim3.datastore.Datastore;
import org.slim3.util.RequestLocator;
import org.slim3.util.ResponseLocator;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.server.meta.OneToOneRecordMeta;
import com.usp.expmgmt.server.meta.UserInfoMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.model.OneToOneRecord;
import com.usp.expmgmt.shared.model.UserInfo;

public class ServerSideUtil {

    public static String getOwnerEmail() {
        HttpServletRequest request = RequestLocator.get();
        if (request.getUserPrincipal() != null) {
            String ownerEmail = request.getUserPrincipal().getName();
            if (ownerEmail.contains("@")) {
                return ownerEmail;
            }
        }
        return null;
    }

    public static void redirectToLoginPage() throws IOException {
        HttpServletRequest request = RequestLocator.get();
        HttpServletResponse response = ResponseLocator.get();
        request.getSession().setAttribute("logoutFromGmail", "yes");
        UserService userService = UserServiceFactory.getUserService();
        response.sendRedirect(userService.createLoginURL(request.getRequestURI()));
    }
    
    public static String getGoogleLoginUrl() {
        UserService userService = UserServiceFactory.getUserService();
        return userService.createLoginURL("/login.html");
    }
    
    
    public static Key getParentKey(String ownerEmail) {
        UserInfoMeta meta = UserInfoMeta.get();
        UserInfo user = Datastore.query(UserInfo.class)
            .filter(meta.email.equal(ownerEmail))
            .asSingle();
        if (user == null) {
            user = new UserInfo();
            user.setEmail(ownerEmail);
            return Datastore.put(user);
        } else {
            return user.getKey();
        }
    }
    
    public static String getStatementTillDate(String email, Date date) {
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        List<ExpenseReport> claims = Datastore.query(reportMeta)
                .filter(reportMeta.ownerEmail.equal(email))
                .filter(reportMeta.dateAndTime.lessThanOrEqual(date))
                .sort(reportMeta.dateAndTime.asc)
                .asList();
        ByteArrayOutputStream bs = new ByteArrayOutputStream();
        PrintWriter pw = new PrintWriter(bs);
        pw.println("<h1>Statement till : " + date + "</h1>");
        pw.println("<h2>Caims:</h2>");
        pw.println("<ol>");
        for (ExpenseReport report : claims) {
            pw.println("<li>");
            printExpenseReport(pw, report);
            pw.println("</li>");
        }
        
        
        List<ExpenseReport> debts = Datastore.query(reportMeta)
                .filter(reportMeta.emailList.equal(email))
                .filter(reportMeta.dateAndTime.lessThanOrEqual(date))
                .sort(reportMeta.dateAndTime.asc)
                .asList();
        
        pw.println("<h2>Debts:</h2>");
        for (ExpenseReport report : debts) {
            if (report.getOwnerEmail().equals(email)) {
                continue;
            }
            pw.println("<li>");
            printExpenseReport(pw, report);
            pw.println("</li>");
        }
        pw.println("</ol>");
        pw.flush();
        return bs.toString();
    }
    
    private static void printExpenseReport(PrintWriter pw, ExpenseReport report) {
        pw.println("<table border=\"1\" bordercolor=\"red\">");
        pw.println("<tr><td>OwnerEmail : </td><td>" + report.getOwnerEmail() + "</td></tr>");
        pw.println("<tr><td>Date : </td><td>" + report.getDateAndTime() + "</td></tr>");
        pw.println("<tr><td>Descrription : </td><td>" + report.getDescription() + "</td></tr>");
        
        int i = 0;
        
        for (double amount : report.getAmountList()) {
            pw.println("<tr>");
            pw.println("<td>" + report.getEmailList().get(i) + "</td>");
            pw.println("<td>" + amount + "</td>");
            i++;
            pw.println("</tr>");
        }
        pw.println("</table>");
    }
    
    public static  OneToOneRecord getRecord(String masterEmail, String slaveEmail, Key parentKey) {
        OneToOneRecordMeta meta = OneToOneRecordMeta.get();
        OneToOneRecord record =Datastore.query(meta)
        .filter(meta.masterEmail.equal(masterEmail))
        .filter(meta.slaveEmail.equal(slaveEmail))
        .asSingle();
        if (record == null) {
            record = new OneToOneRecord();
            record.setMasterEmail(masterEmail);
            record.setSlaveEmail(slaveEmail);
            record.setKey(Datastore.allocateId(parentKey, OneToOneRecord.class));
        }
        return record;
    }
}

