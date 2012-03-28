package com.usp.expmgmt.client;

import com.google.gwt.core.client.JsArray;
import com.google.gwt.junit.client.GWTTestCase;

public class DisplayTransactionsPanelTest extends  GWTTestCase{

    public static final String json = 
            "[{\"key\":{\"kind\":\"ExpenseReport\",\"id\":801},\"version\":1,\"emailList\":[\"umasankar@gmail.com\",\"tuna@gmail.com\"]," +
            "\"amountList\":[200.5,300.6],\"description\":\"a lot of expenses\",\"ownerEmail\":\"owner@email.com\"}]"; 
    @Override
    public String getModuleName() {
        return "com.usp.expmgmt.main";
    }

    public void testAsArrayofExpenseReport() {
   
//        DisplayTransactionsPanel panel = new DisplayTransactionsPanel();
//        JsArray<ExpenseReportObject> objectArray = panel.asArrayofExpenseReport(json);
//       assertEquals("umasankar@gmail.com",  objectArray.get(0).getEmailList().get(0));
//       assertEquals("tuna@gmail.com",  objectArray.get(0).getEmailList().get(1));
//       
//       assertEquals(200.5,  objectArray.get(0).getAmountList().get(0));
//       assertEquals(300.6,  objectArray.get(0).getAmountList().get(1));
//       
//       assertEquals("a lot of expenses",  objectArray.get(0).getDescription());
//       assertEquals("owner@email.com",  objectArray.get(0).getOwnerEmail());
       
    }
    
    public static String singleJson = "({\"emailList\":[\"umasankar@gmail.com\",\"tuna@gmail.com\"],\"amountList\":[200.5,300.6],\"ownerEmail\":\"noEmail\",\"description\":" +
    "\"Its a demo expense\",\"date\":\"12thMay, 2013\"})";
    

    public void testAddExpenseReport() {
        
//        DisplayTransactionsPanel panel = new DisplayTransactionsPanel();
//        panel.init(json);
    }
  }