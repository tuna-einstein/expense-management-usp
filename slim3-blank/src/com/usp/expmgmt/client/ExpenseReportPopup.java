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
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.ChangeLogRetriever;
import com.usp.expmgmt.client.service.ChangeLogRetrieverAsync;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.client.service.ExpenseReportSaverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.ExpenseReportJSO;

public class ExpenseReportPopup extends PopupPanel{
    private ExpenseReportJSO report ;
    private Grid grid ;
    private final TextArea logMessage = new TextArea();
    private final Anchor showLogAnchor = new Anchor("Show Logs");
    private final VerticalPanel vp = new VerticalPanel();

    public  ExpenseReportPopup () {
        super(true);
        logMessage.setVisibleLines(2);
        logMessage.setCharacterWidth(30);
        setShowLogHandler();
        this.add(vp);
    }

    private void setShowLogHandler() {
        final PopupPanel thisPopup = this;
        showLogAnchor.addClickHandler(new ClickHandler() {
            ChangeLogRetrieverAsync logRetriver = GWT.create(ChangeLogRetriever.class);
            
            public void onClick(ClickEvent event) {
                
                AsyncCallback<String> callback = new AsyncCallback<String>() {

                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }

                    public void onSuccess(String json) {
                       // thisPopup.hide(true);
                        ChangeLogsPopup pop = new ChangeLogsPopup();
                        pop.init(json);
                        pop.setAnimationEnabled(true);
                        pop.setPopupPosition(showLogAnchor.getAbsoluteLeft() + showLogAnchor.getOffsetWidth(), showLogAnchor.getAbsoluteTop() + showLogAnchor.getOffsetHeight());
                        pop.show();
                        
                       // Window.alert(json);
                    }
                };
                logRetriver.getChangeLogsAsJson(report.getEncodedKey(), callback);
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
         vp.add(new Label("OwnerEmail:  " + report.getOwnerEmail()));
         
         vp.add(new Label("Expense Description: "));
         vp.add(new Label(report.getDescription()));
         
         vp.add(new Label("Date: " + report.getDate()));
         
         grid = new Grid(report.getEmailList().length() + 2, 2);
         
         for (int i=0; i< report.getEmailList().length(); i++) {
             addToGrid(
                     report.getEmailList().get(i),
                     report.getAmountList().get(i),
                     i /* row number */
                     );
         }
         
         

         grid.setWidget(report.getEmailList().length(), 0, new HTML("LogMessage"));
         grid.setWidget(report.getEmailList().length(), 1, logMessage);


         grid.setWidget(report.getEmailList().length() + 1, 0, getAnchor("Delete"));
         grid.setWidget(report.getEmailList().length() + 1, 1, getAnchor("Save"));
    grid.getCellFormatter().setAlignment(report.getEmailList().length() + 1, 1, HasHorizontalAlignment.ALIGN_RIGHT, HasVerticalAlignment.ALIGN_MIDDLE);
    vp.add(grid);
    vp.add(showLogAnchor);
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
        while (vp.getWidgetCount() != 0){
            remove(vp.getWidget(0));
        }
    }
    
    private static class AnchorClickHandler implements ClickHandler {
        final Anchor uiObject;
        ExpenseReportPopup popup;
        AnchorClickHandler(Anchor uiObject, ExpenseReportPopup popup) {
            this.uiObject = uiObject;
            this.popup = popup;
        }
     private static final ExpenseReportSaverAsync service = GWT.create(ExpenseReportSaver.class);
     
     

     AsyncCallback<String> callback = new AsyncCallback<String>() {
         
        
         public void onFailure(Throwable caught) {
             Window.alert(caught.getMessage());
         }

         public void onSuccess(String json) {
             
             Window.alert(json);
             
         }
     };
        public void onClick(ClickEvent event) {
            if (uiObject.getName().equals("Save")) {
            service.save(popup.getJson(), callback);
            } else if (uiObject.getName().equals("Delete")) {
                service.delete(popup.getJson(), callback);
                popup.removeFromParent();
            } 
        }
    }
    
    
    
    
 }
