package com.usp.expmgmt.server.controller.tasks;

import java.io.IOException;
import java.util.Iterator;
import java.util.logging.Logger;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;

import com.google.appengine.api.datastore.Key;
import com.usp.expmgmt.server.meta.UserInfoMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.model.UserInfo;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class UpdateExpenseReportParentKeyController extends Controller {

    private static final Logger log = Logger.getLogger(UpdateExpenseReportParentKeyController.class.getName());
    
    @Override
    public Navigation run() throws Exception {
        Iterator<ExpenseReport> reports = Datastore.query(ExpenseReport.class)
            .asIterator();
       int count = 0;
       response.setContentType("text/html");
        while (reports.hasNext()) {
           ExpenseReport report = reports.next();
           Key key = report.getKey();
           if (report.getKey().getParent() == null) {
               Key parentKey = ServerSideUtil.getParentKey(report.getOwnerEmail());
               Key childKey = Datastore.createKey(parentKey, ExpenseReport.class, key.getId());
               report.setKey(childKey);
               log.info(Datastore.put(report).getId() + "");
               Datastore.delete(key);
               String message = "ExpenseReport :" + key.getId() + ":" + report.getOwnerEmail() + " is Updated";
               log.info(message);
               response.getWriter().print(message + "<br>");
               count ++;
           }     
       }
        log.info(count + " reports are updated:");
        response.getWriter().print(count + " reports are updated:");
        response.getWriter().flush();
        return null;
    }
    
   
}
