package com.usp.expmgmt.server.service;

import java.util.HashMap;
import java.util.Map;

import org.slim3.datastore.Datastore;
import org.slim3.tester.ServletTestCase;
import org.junit.Test;

import com.usp.expmgmt.shared.model.ExpenseReport;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class ExpenseReportSaverImplTest extends ServletTestCase {

    private ExpenseReportSaverImpl service = new ExpenseReportSaverImpl();

    @Test
    public void test() throws Exception {
        assertThat(service, is(notNullValue()));
    }
    
    @Test
    public void save() throws Exception {
        Map<String, Object> input = new HashMap<String, Object>();
        String emailArray[] = {"umasankar@gmail.com", "tuna@gmail.com"};
        String amountArray[] ={"200.50", "300.60"};
        input.put("emailArray", emailArray);
        input.put("amountArray", amountArray);
        
        ExpenseReport reported = service.save(input);
        assertThat(reported, is(notNullValue()));
        ExpenseReport stored = Datastore.get(ExpenseReport.class, reported.getKey());
        assertThat(stored.getEmailList().get(0), is("umasankar@gmail.com"));
        assertThat(stored.getEmailList().get(1), is("tuna@gmail.com"));

        assertThat(stored.getAmountList().get(0), is(200.50));
        assertThat(stored.getAmountList().get(1), is(300.60));
    }
}
