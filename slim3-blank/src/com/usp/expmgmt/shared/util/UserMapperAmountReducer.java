package com.usp.expmgmt.shared.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.annotations.Expose;
import com.usp.expmgmt.shared.model.ExpenseReport;

public class UserMapperAmountReducer {
    
    /**
     * The owner in all the ExpenseReports is the requester.
     * It returns <Email, Amount> where the email represents the person need to pay the requester.
     */
    public static List<UserAndAmount> mapReducerForClaims(List<ExpenseReport> reportList) {
        HashMap<String, Double> map = new HashMap<String, Double>();
        for (ExpenseReport report : reportList) {
            addForClaims(map, report);
        }

        ArrayList<UserAndAmount> result = new ArrayList<UserAndAmount>();
        for (Map.Entry<String, Double> entry : map.entrySet()) {
            UserAndAmount userAndAmount = new UserAndAmount();
             userAndAmount.setEmail(entry.getKey());
             userAndAmount.setAmount(entry.getValue());
            result.add(userAndAmount);
        }
        return result;
    }
    
    /**
     * The owner in all the ExpenseReports is not the requester. The requester appears in the EmailList
     * It returns <Email, Amount> where the email represents the person to whom the requester need to pay.
     */
    public static List<UserAndAmount> mapReducerForDebts(List<ExpenseReport> reportList, String requesterEmail) {
        HashMap<String, Double> map = new HashMap<String, Double>();
        for (ExpenseReport report : reportList) {
            addForDebts(map, report, requesterEmail);
        }

        ArrayList<UserAndAmount> result = new ArrayList<UserAndAmount>();
        for (Map.Entry<String, Double> entry : map.entrySet()) {
            UserAndAmount userAndAmount = new UserAndAmount();
             userAndAmount.setEmail(entry.getKey());
             userAndAmount.setAmount(entry.getValue());
            result.add(userAndAmount);
        }
        return result;
    }
 
    private static void addForClaims(HashMap<String, Double> map, ExpenseReport report) {
        int count = 0;
        for (String email : report.getEmailList()) {
           if  (map.containsKey(email)) {
                map.put(email, map.get(email) + report.getAmountList().get(count)); 
            }  else {
               map.put(email,  report.getAmountList().get(count)); 
            }
           count++;
        }
    }
 
    private static void addForDebts(HashMap<String, Double> map, ExpenseReport report,  String requesterEmail) {
        int count = 0;
        
        for (String email : report.getEmailList()) {
            if (!requesterEmail.equals(email)) {
                count++;
                continue;
            }
           if  (map.containsKey(report.getOwnerEmail())) {
                map.put(report.getOwnerEmail(), map.get(report.getOwnerEmail()) + report.getAmountList().get(count)); 
            }  else {
               map.put(report.getOwnerEmail(),  report.getAmountList().get(count)); 
            }
           count++;
        }
    }
 
    public static class UserAndAmount {
        @Expose
        private String email;
        @Expose
        private double amount;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public double getAmount() {
            return amount;
        }

        public void setAmount(double amount) {
            this.amount = amount;
        }
    }
}

