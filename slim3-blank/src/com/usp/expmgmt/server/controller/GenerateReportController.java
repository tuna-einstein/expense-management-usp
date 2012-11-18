package com.usp.expmgmt.server.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;
import org.slim3.util.RequestLocator;

import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class GenerateReportController extends Controller {

    @Override
    public Navigation run() throws Exception {
        HttpServletRequest request = RequestLocator.get();
        String ownerEmail = ServerSideUtil.getOwnerEmail();

        if (ownerEmail == null) {
           ServerSideUtil.redirectToLoginPage();
        }
        
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        List<ExpenseReport> espenseReports = Datastore.query(reportMeta)
                .filter(reportMeta.ownerEmail.equal(ownerEmail))
                .asList();
        return forward("GenerateReport.jsp");
    }
}
