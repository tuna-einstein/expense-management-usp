package com.usp.expmgmt.server.controller.save_expense;

import org.slim3.datastore.Datastore;
import org.slim3.tester.ControllerTestCase;
import org.junit.Test;

import com.usp.expmgmt.shared.model.ExpenseReport;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class IndexControllerTest extends ControllerTestCase {

    @Test
    public void run() throws Exception {
  
        String emailArray[] = {"umasankar@gmail.com", "tuna@gmail.com"};
        String amountArray[] ={"200.50", "300.60"};
        tester.paramValues("emailArray", emailArray);
        tester.paramValues("amountArray", amountArray);
     
        tester.start("/save_expense/");
        IndexController controller = tester.getController();
        assertThat(controller, is(notNullValue()));
        assertThat(tester.isRedirect(), is(false));
        assertThat(tester.getDestinationPath(), is("/save_expense/index.jsp"));
        
        ExpenseReport stored = Datastore.query(ExpenseReport.class).asSingle();
        assertThat(stored, is(notNullValue()));
        assertThat(stored.getEmailList().get(0), is("umasankar@gmail.com"));
        assertThat(stored.getEmailList().get(1), is("tuna@gmail.com"));

        assertThat(stored.getAmountList().get(0), is(200.50));
        assertThat(stored.getAmountList().get(1), is(300.60));
    }
}
