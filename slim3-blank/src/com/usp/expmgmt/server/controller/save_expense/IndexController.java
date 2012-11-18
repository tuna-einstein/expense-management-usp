package com.usp.expmgmt.server.controller.save_expense;

import javax.servlet.http.HttpServletRequest;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.util.RequestLocator;
import org.slim3.util.RequestMap;

import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.server.service.ExpenseReportSaverImpl;

public class IndexController extends Controller {

    @Override
    public Navigation run() throws Exception {
        HttpServletRequest request = RequestLocator.get();
        ExpenseReportSaver saver = new ExpenseReportSaverImpl();
        saver.save(new RequestMap(request));
        return forward("index.jsp");
    }
}
