package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.client.service.ExpenseReportSaverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.ExpenseReportJSO;

public class ExpenseReportPopup  extends PopupPanel {
    private ExpenseReportJSO report ;
    private Grid grid ;
    public  ExpenseReportPopup () {
        super(true);
      
  // show();
   //add
    }
    private final String getJson() {
        String json;
        String[] list = listToString();
        
        json = "{\"ownerEmail\":\"" + report.getOwnerEmail() + "\","
                + "\"description\":\"" + report.getDescription() + "\","
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
        for (int i=0 ; i < grid.getRowCount() - 1; i++) {
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
       report =  JavaScriptObjects.ExpenseReportJSO.asExpenseReportJSO("(" + json + ")");
       
       VerticalPanel vpanel = new VerticalPanel();
       //  Window.alert("umasankar");
         vpanel.add(new Label("OwnerEmail:  " + report.getOwnerEmail()));
         
         vpanel.add(new Label("Expense Description: "));
         vpanel.add(new Label(report.getDescription()));
         
         vpanel.add(new Label("Date: " + report.getDate()));
         
         grid = new Grid(report.getEmailList().length() + 1, 2);
         
         for (int i=0; i< report.getEmailList().length(); i++) {
             addToGrid(
                     report.getEmailList().get(i),
                     report.getAmountList().get(i),
                     i /* row number */
                     );
         }
    grid.setWidget(report.getEmailList().length(), 0, getAnchor("Delete"));
    grid.setWidget(report.getEmailList().length(), 1, getAnchor("Save"));
    grid.getCellFormatter().setAlignment(report.getEmailList().length(), 1, HasHorizontalAlignment.ALIGN_RIGHT, HasVerticalAlignment.ALIGN_MIDDLE);
    vpanel.add(grid);


    add(vpanel);
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
    
    private static class AnchorClickHandler implements ClickHandler {
        Anchor uiObject;
        ExpenseReportPopup popup;
        AnchorClickHandler(Anchor uiObject, ExpenseReportPopup popup) {
            this.uiObject = uiObject;
            this.popup = popup;
        }
     private static final ExpenseReportSaverAsync service = GWT.create(ExpenseReportSaver.class);


        public void onClick(ClickEvent event) {
            service.save(popup.getJson(), new AsyncCallback<String>() {
                
                        public void onFailure(Throwable caught) {
                    Window.alert(caught.getMessage());
                }

                public void onSuccess(String json) {
                    Window.alert("Update Successfull");
                }
            });
        }
    }
    
 //   private Horizontal
}
