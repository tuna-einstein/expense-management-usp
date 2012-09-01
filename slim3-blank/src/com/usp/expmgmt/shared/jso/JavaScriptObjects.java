package com.usp.expmgmt.shared.jso;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.JsArrayNumber;
import com.google.gwt.core.client.JsArrayString;
import com.usp.expmgmt.shared.model.ChangeLogMessage;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.util.ExpenseContent;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;

public class JavaScriptObjects {

    /**
     * {@link UserAndAmount}
     */
    public static class UserAndAmountJSO extends JavaScriptObject  {
        // Overlay types always have protected, zero argument constructors.
        protected UserAndAmountJSO() {} 

        public final native String getEmail() /*-{ return this.email; }-*/;
        public final native Double getAmount() /*-{ return this.amount; }-*/;

        /**
         * Convert the string of JSON into JavaScript object array.
         */
        public static final native JsArray<UserAndAmountJSO> asArrayOfUserAndAmountJSO(String json)
        /*-{
          return eval(json);
        }-*/;

        /**
         * Convert the string of JSON into JavaScript object.
         */
        public static final native UserAndAmountJSO asUserAndAmountJSO(String json)
        /*-{
          return eval(json);
        }-*/;
    }

    /**
     * {@link ExpenseReport} and {@link ExpenseContent}
     */
    public static class ExpenseReportJSO extends JavaScriptObject {                              // (1)
        // Overlay types always have protected, zero argument constructors.
        protected ExpenseReportJSO() {}                                              // (2)

        public final native JsArrayString getEmailList() /*-{ return this.emailList; }-*/; // (3)
        public final native JsArrayNumber getAmountList() /*-{ return this.amountList; }-*/;
        public final native String getOwnerEmail() /*-{ return this.ownerEmail; }-*/;
        public final native String getDescription() /*-{ return this.description; }-*/;
        public final native String getDate() /*-{ return this.date; }-*/;
        public final native String getEncodedKey() /*-{return this.encodedKey;}-*/;

        /**
         * Convert the string of JSON into JavaScript object array.
         */
        public static final native JsArray<ExpenseReportJSO> asArrayOfExpenseReportJSO(String json)
        /*-{
          return eval(json);
        }-*/;

        /**
         * Convert the string of JSON into JavaScript object.
         */
        public static final native ExpenseReportJSO asExpenseReportJSO(String json)
        /*-{
          return eval(json);
        }-*/;

    }
    
    /**
     * {@link ExpenseReport}
     */
    public static class UserExpenseReportJSO extends JavaScriptObject {                              // (1)
        // Overlay types always have protected, zero argument constructors.
        protected UserExpenseReportJSO() {}                                              // (2)

        // JSNI methods to get stock data.
        public final native String getEmail() /*-{ return this.email; }-*/;
        public final native Double getAmount() /*-{ return this.amount; }-*/;
        public final native String getDate() /*-{ return this.date; }-*/;
        public final native String getKey() /*-{return this.key;}-*/;
        public final native String getDescription() /*-{return this.description;}-*/;
 
        /**
         * Convert the string of JSON into JavaScript object array.
         */
        public static final native JsArray<UserExpenseReportJSO> asArrayOfUserExpenseReportJSO(String json)
        /*-{
          return eval(json);
        }-*/;

        /**
         * Convert the string of JSON into JavaScript object.
         */
        public static final native UserExpenseReportJSO asUserExpenseReportJSO(String json)
        /*-{
          return eval(json);
        }-*/;

    }
 
    /**
     * {@link ChangeLogMessage}
     */
    
    public static class ChangeLogMessageJSO extends JavaScriptObject {                              // (1)
        // Overlay types always have protected, zero argument constructors.
        protected ChangeLogMessageJSO() {}                                              // (2)

        // JSNI methods to get stock data.
        public final native String getChangeMessage() /*-{ return this.changeMessage; }-*/;
        public final native String getLogMessage() /*-{ return this.logMessage; }-*/;
        public final native String getActorName() /*-{ return this.actorName; }-*/;
        public final native String getDate() /*-{ return this.date; }-*/;

        /**
         * Convert the string of JSON into JavaScript object.
         */
        public static final native ChangeLogMessageJSO  asChangeLogMessageJSO (String json)
        /*-{
          return eval(json);
        }-*/;
        
        /**
         * Convert the string of JSON into JavaScript object array.
         */
        public static final native JsArray<ChangeLogMessageJSO> asArrayOfChangeLogMessageJSO(String json)
        /*-{
          return eval(json);
        }-*/;
    }
}

