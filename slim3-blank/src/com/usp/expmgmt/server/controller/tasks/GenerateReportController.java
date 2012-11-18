package com.usp.expmgmt.server.controller.tasks;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;

import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;

public class GenerateReportController extends Controller {

    @Override
    public Navigation run() throws Exception {
//        String ownerEmail = request.getParameter("ownerEmail");
//        if (ownerEmail == null) {
//            return null;
//        }
//        String dateString = request.getParameter("date");
//        Date upperDate = dateFromString(dateString);
//        if (upperDate == null) {
//            return null;
//        }
//        
//        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
//        List<ExpenseReport> claims = Datastore.query(reportMeta)
//                .filter(reportMeta.ownerEmail.equal(ownerEmail))
//                .asList();
//        List<ExpenseReport> claimsBelowDate = new ArrayList<ExpenseReport>();
//        for (ExpenseReport claim : claims) {
//            Date date = dateFromString(claim.getDate());
//            if (date == null) {
//                continue;
//            }
//            if (date.getTime() < upperDate.getTime()) {
//                claimsBelowDate.add(claim);
//            }
//        }
//        List<UserAndAmount> userAndAmountList = UserMapperAmountReducer.mapReducerForClaims(claimsBelowDate);
        
        
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
