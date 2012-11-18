package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.ChangeLogRetriever;
import com.usp.expmgmt.client.service.ChangeLogRetrieverAsync;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.client.service.ExpenseReportSaverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.ExpenseReportJSO;

public class DisplayExpenseReport extends VerticalPanel{
    private ExpenseReportJSO report ;
    private Grid grid ;
    private final TextArea logMessage = new TextArea();
    private final Anchor showLogAnchor = new Anchor("Show Logs");
    private final DisplayTransactionsPanel.Type type;
    
    
    public  DisplayExpenseReport (DisplayTransactionsPanel.Type type) {
        logMessage.setVisibleLines(2);
        logMessage.setCharacterWidth(30);
        this.type = type;
        setShowLogHandler();
    }
    
    private void setShowLogHandler() {
        
        showLogAnchor.addClickHandler(new ClickHandler() {
            ChangeLogRetrieverAsync logRetriver = GWT.create(ChangeLogRetriever.class);
            
            public void onClick(ClickEvent event) {
                
                AsyncCallback<String> callback = new AsyncCallback<String>() {

                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }

                    public void onSuccess(String json) {
                        
                        ChangeLogsPopup pop = new ChangeLogsPopup();
                        pop.init(json);
                        pop.setAnimationEnabled(true);
                        pop.setPopupPosition(showLogAnchor.getAbsoluteLeft() + showLogAnchor.getOffsetWidth(), showLogAnchor.getAbsoluteTop() + showLogAnchor.getOffsetHeight());
                        pop.show();
                        
                       // Window.alert(json);
                    }
                };
                logRetriver.getChangeLogsAsJson(report.getEncodedKey(), callback);
                // TODO Auto-generated method stub
                
            }
        });
        
    }
    
    private final String getJson() {
        String json;
        String[] list = listToString();
        
        json = "{\"ownerEmail\":\"" + report.getOwnerEmail() + "\","
                + "\"description\":\"" + report.getDescription() + "\","
                + "\"logMessage\":\"" + logMessage.getText() + "\","
                +  "\"date\":\"" + report.getDate() + "\","
                + "\"encodedKey\":\""  + report.getEncodedKey() + "\","
                + "\"emailList\":" + list[0] +"," 
                + "\"amountList\":" + list[1]
                + "}";
        return json;
    }
    
    private String[] listToString() {
        String emailString ="[";
        String amountString = "[";
        for (int i=0 ; i < grid.getRowCount() - 2; i++) {
            emailString = emailString + "\"" + ((Label) grid.getWidget(i, 0)).getText() + "\",";
            amountString = amountString +  ((TextBox) grid.getWidget(i, 1)).getText() + ",";
        }
       emailString = emailString.substring(0, emailString.length() - 1);
       emailString = emailString + "]";
       amountString = amountString.substring(0, amountString.length() - 1);
       amountString = amountString + "]";
       String[] result = new String[2];
       result[0] = emailString;
       result[1] = amountString;
       return result;
    }

 

    public void init(String json) {
       removeAll();
       report =  JavaScriptObjects.ExpenseReportJSO.asExpenseReportJSO("(" + json + ")");
       
       //  Window.alert("umasankar");
       HorizontalPanel hp = new HorizontalPanel();
       hp.add(new HTML("<pre><b>OwnerEmail: "+report.getOwnerEmail() + "             "+ report.getDate()+"</pre"));
         add(hp);
         
        // add(new Label("Expense Description: "));
        // add(new Label(report.getDescription()));
         
         grid = new Grid(report.getEmailList().length() + 2, 2);
         
         for (int i=0; i< report.getEmailList().length(); i++) {
             addToGrid(
                     report.getEmailList().get(i),
                     report.getAmountList().get(i),
                     i /* row number */
                     );
         }
         
         

         
         if (type == DisplayTransactionsPanel.Type.CLAIM) {
             grid.setWidget(report.getEmailList().length(), 0, new HTML("LogMessage"));
             grid.setWidget(report.getEmailList().length(), 1, logMessage);

             grid.setWidget(report.getEmailList().length() + 1, 0, getAnchor("Delete"));
             grid.setWidget(report.getEmailList().length() + 1, 1, getAnchor("Save"));
             grid.getCellFormatter().setAlignment(report.getEmailList().length() + 1, 1, HasHorizontalAlignment.ALIGN_RIGHT, HasVerticalAlignment.ALIGN_MIDDLE);
         }
    add(grid);
    add(showLogAnchor);
    }
    
    private void addToGrid(String email, Double amount, int row) {
        TextBox amountBox = new TextBox();
        amountBox.setText(String.valueOf(amount));
        grid.setWidget(row, 0, new Label(email));
        grid.setWidget(row, 1, amountBox);
    }
    
    private Anchor getAnchor(String value) {
        Anchor anchor = new Anchor(value);
        anchor.setName(value);
       anchor.addClickHandler(new AnchorClickHandler(anchor, this));
        return anchor;
    }
    
    public void removeAll() {
        while (getWidgetCount() != 0){
            remove(getWidget(0));
        }
    }
    
    private static class AnchorClickHandler implements ClickHandler {
        final Anchor uiObject;
        DisplayExpenseReport popup;
        private final DeleteExpenseReportConfirmPopup deleteExpenseReportConfirm;
        AnchorClickHandler(Anchor uiObject, DisplayExpenseReport popup) {
            this.uiObject = uiObject;
            this.popup = popup;
            this.deleteExpenseReportConfirm = new DeleteExpenseReportConfirmPopup();
        }
     private static final ExpenseReportSaverAsync service = GWT.create(ExpenseReportSaver.class);
     
     

     AsyncCallback<String> callback = new AsyncCallback<String>() {
         
        
         public void onFailure(Throwable caught) {
             Window.alert(caught.getMessage());
             uiObject.setEnabled(true);
         }

         public void onSuccess(String json) {
             uiObject.setEnabled(true);
             Window.alert(json);
             
         }
     };
        public void onClick(ClickEvent event) {
            uiObject.setEnabled(false);
            if (uiObject.getName().equals("Save")) {         
            service.save(popup.getJson(), callback);
            } else if (uiObject.getName().equals("Delete")) {
                deleteExpenseReportConfirm.setRequestString(popup.getJson());
                deleteExpenseReportConfirm.setWidgetTobeRemoved(popup);
                deleteExpenseReportConfirm.center();
            } 
        }
    }
    
 }
