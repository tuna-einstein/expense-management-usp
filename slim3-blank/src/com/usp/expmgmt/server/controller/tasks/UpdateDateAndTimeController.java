package com.usp.expmgmt.server.controller.tasks;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Locale;
import java.util.logging.Logger;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;

import com.usp.expmgmt.shared.model.ExpenseReport;

public class UpdateDateAndTimeController extends Controller {

    private static final Logger log = Logger.getLogger(UpdateExpenseReportParentKeyController.class.getName());
    @Override
    public Navigation run() throws Exception {
        Iterator<ExpenseReport> reports = Datastore.query(ExpenseReport.class)
                .asIterator();
        int count = 0;
        response.setContentType("text/html");
        while (reports.hasNext()) {
            ExpenseReport report = reports.next();
            if (report.getDateAndTime() == null && report.getDate() != null && !report.getDate().equals("")) {
                report.setDateAndTime(dateFromString(report.getDate()));
                Datastore.put(report);
                count ++;
            }
        }
    log.info(count + " Dates are updated.");
    response.getWriter().print(count + " Dates are updated.");
    response.getWriter().flush();
    return null;
}

    private Date dateFromString(String dateString) {
        //2012 Sep 2 01:55:12
        Date date = null;
        try {
            date = new SimpleDateFormat("yyyy MMM d hh:mm:ss", Locale.ENGLISH).parse(dateString);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return date;
    }
}
