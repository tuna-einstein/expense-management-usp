package com.usp.expmgmt.server.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slim3.datastore.Datastore;
import org.slim3.tester.ServletTestCase;
import org.slim3.util.BeanUtil;
import org.junit.Test;

import com.usp.expmgmt.shared.model.ExpenseReport;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class ExpenseReportRetrieverImplTest extends ServletTestCase {

    private ExpenseReportRetrieverImpl service = new ExpenseReportRetrieverImpl();

    @Test
    public void test() throws Exception {
        assertThat(service, is(notNullValue()));
    }
    
    @Test
    public void retrieveClaim() throws Exception {
        Map<String, Object> input = new HashMap<String, Object>();
        String emailArray[] = {"umasankar@gmail.com", "tuna@gmail.com"};
        String amountArray[] ={"200.50", "300.60"};
        input.put("emailArray", emailArray);
        input.put("amountArray", amountArray);
        ExpenseReport report = new ExpenseReport();
        BeanUtil.copy(input, report);
        Datastore.put(report);
        
        input = new HashMap<String, Object>();
        emailArray = new String[] {"hello@gmail.com", "tuna@gmail.com"};
        amountArray =new String[] {"200.50", "300.60"};
        input.put("emailArray", emailArray);
        input.put("amountArray", amountArray);
        
        ExpenseReport report1 = new ExpenseReport();
        BeanUtil.copy(input, report1);
        Datastore.put(report1);
        
        List<ExpenseReport> res = service.getClaims("tuna@gmail.com");
       // assertEquals(2, res.size());
        verifyReport(report, res.get(0));
        verifyReport(report1, res.get(1));
        
        res = service.getClaims("umasankar@gmail.com");
        //assertEquals(2, res.size());
        verifyReport(report, res.get(0));
        verifyReport(report1, res.get(1));
        }
    
    
    @Test
    public void retrieveClaimAsJson() throws Exception {
        Map<String, Object> input = new HashMap<String, Object>();
        String emailArray[] = {"umasankar@gmail.com", "tuna@gmail.com"};
        String amountArray[] ={"200.50", "300.60"};
        input.put("emailArray", emailArray);
        input.put("amountArray", amountArray);
        ExpenseReport report = new ExpenseReport();
        BeanUtil.copy(input, report);
        Datastore.put(report);

        input = new HashMap<String, Object>();
        emailArray = new String[] {"hello@gmail.com", "tuna@gmail.com"};
        amountArray =new String[] {"200.50", "300.60"};
        input.put("emailArray", emailArray);
        input.put("amountArray", amountArray);

        ExpenseReport report1 = new ExpenseReport();
        BeanUtil.copy(input, report1);
        Datastore.put(report1);

        String res = service.getClaimsAsJson("tuna@gmail.com");


        res = service.getClaimsAsJson("umasankar@gmail.com");
    }
    
    private void verifyReport(ExpenseReport reportSrc, ExpenseReport reportDst) {
        assertEquals(reportSrc.getEmailList().size(), reportDst.getEmailList().size());
        for (String email : reportSrc.getEmailList()) {
           reportDst.getEmailList().contains(email);
        }
        
        assertEquals(reportSrc.getAmountList().size(), reportDst.getAmountList().size());
        for (Double amount : reportSrc.getAmountList()) {
           reportDst.getAmountList().contains(amount);
        }
    }
}
