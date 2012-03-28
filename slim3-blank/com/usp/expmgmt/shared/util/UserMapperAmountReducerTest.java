package com.usp.expmgmt.shared.util;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;
public class UserMapperAmountReducerTest extends TestCase {
    
    private ExpenseReport report1Owner1;
    private ExpenseReport report2Owner1;
    private ExpenseReport report3Owner1;
    private ExpenseReport report4Owner2;
    private ExpenseReport report5Owner3;
    
    private final String requesterEmail = "requester@gmail.com";
    private final String friendEmail1 = "friendEmail1@gmail.com";
    private final String friendEmail2= "friendEmail2@gmail.com";
    private final String friendEmail3 = "friendEmail3@gmail.com";
 
    @Override
    protected void setUp() {
         report1Owner1 = new ExpenseReport();
         report1Owner1.setOwnerEmail(requesterEmail);
         
         List<String> emailList = new ArrayList<String>();
         emailList.add(friendEmail1);
         emailList.add(friendEmail2);
         report1Owner1.setEmailList(emailList);
         
         List<Double> amountList = new ArrayList<Double>();
         amountList.add(100.00);
         amountList.add(200.00);
         report1Owner1.setAmountList(amountList);
         
         report2Owner1 = new ExpenseReport();
         report2Owner1.setOwnerEmail(requesterEmail);
         
         emailList = new ArrayList<String>();
         emailList.add(friendEmail2);
         emailList.add(friendEmail3);
         report2Owner1.setEmailList(emailList);
         
         amountList = new ArrayList<Double>();
         amountList.add(200.00);
         amountList.add(300.00);
         report2Owner1.setAmountList(amountList);
         
         report3Owner1 = new ExpenseReport();
         report3Owner1.setOwnerEmail(requesterEmail);
         
         emailList = new ArrayList<String>();
         emailList.add(friendEmail3);
         emailList.add(friendEmail1);
         report3Owner1.setEmailList(emailList);
         
         amountList = new ArrayList<Double>();
         amountList.add(300.00);
         amountList.add(100.00);
         report3Owner1.setAmountList(amountList);
         
         report4Owner2 = new ExpenseReport();
         report4Owner2.setOwnerEmail(friendEmail2);
         
         emailList = new ArrayList<String>();
         emailList.add(friendEmail1);
         emailList.add(requesterEmail);
         report4Owner2.setEmailList(emailList);
         
         amountList = new ArrayList<Double>();
         amountList.add(100.00);
         amountList.add(500.00);
         report4Owner2.setAmountList(amountList);
         
         report5Owner3 = new ExpenseReport();
         report5Owner3.setOwnerEmail(friendEmail3);
         
         emailList = new ArrayList<String>();
         emailList.add(friendEmail2);
         emailList.add(requesterEmail);
         report5Owner3.setEmailList(emailList);
         
         amountList = new ArrayList<Double>();
         amountList.add(200.00);
         amountList.add(600.00);
         report5Owner3.setAmountList(amountList);
    }
    
    public void testMapreducerForClaims() {
        List<ExpenseReport> reportList = new ArrayList<ExpenseReport>();
        reportList.add(report1Owner1);
        reportList.add(report2Owner1);
        reportList.add(report3Owner1);
        List<UserAndAmount> result = UserMapperAmountReducer.mapReducerForClaims(reportList);
        assertEquals(3, result.size());
        
        assertEquals(friendEmail2, result.get(0).getEmail());
        assertEquals(400.00, result.get(0).getAmount());
        
        assertEquals(friendEmail3, result.get(1).getEmail());
        assertEquals(600.00, result.get(1).getAmount());
        
        assertEquals(friendEmail1, result.get(2).getEmail());
        assertEquals(200.00, result.get(2).getAmount());
    }
 
    public void testMapreducerForDebts() {
        List<ExpenseReport> reportList = new ArrayList<ExpenseReport>();
        reportList.add(report4Owner2);
        reportList.add(report5Owner3);
        reportList.add(report4Owner2);
        reportList.add(report5Owner3);
        
        List<UserAndAmount> result = UserMapperAmountReducer.mapReducerForDebts(reportList, requesterEmail);
        assertEquals(2, result.size());
        
        assertEquals(friendEmail2, result.get(0).getEmail());
        assertEquals(1000.00, result.get(0).getAmount());
        
        assertEquals(friendEmail3, result.get(1).getEmail());
        assertEquals(1200.00, result.get(1).getAmount());
    }
}
