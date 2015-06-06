package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLTable.Cell;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.usp.expmgmt.client.service.ClearClaimsForX;
import com.usp.expmgmt.client.service.ClearClaimsForXAsync;
import com.usp.expmgmt.client.service.SendReminderEmailService;
import com.usp.expmgmt.client.service.SendReminderEmailServiceAsync;
import com.usp.expmgmt.client.service.UserExpenseReportRetriever;
import com.usp.expmgmt.client.service.UserExpenseReportRetrieverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserAndAmountJSO;
import com.usp.expmgmt.shared.model.ReminderEmailData;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;

public class DisplayTransactionsPanel extends ScrollPanel {
    public static enum Type  {
        CLAIM, DEBT, NET
    };
    
    private final Type type;
    private String ownerEmail;
    private final FlexTable flexTable = new FlexTable();
    private final DisplayUserExpenseReportList reportList;
    public DisplayTransactionsPanel(Type type ) {
        this.type = type;
        flexTable.setCellSpacing(5);
        flexTable.setCellPadding(2);
        reportList = new DisplayUserExpenseReportList(type);
        addClickHandler() ;
    }

    private void removeAll() {
        if(this.getWidget() != null) {
        this.remove(this.getWidget());
        }
    }
    public Type getType() {
        return type;
    }
    
    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }
    
    public String getOwnerEmail() {
        return ownerEmail;
    }
    public void init(String json) {
        removeAll();
        add(flexTable);
        flexTable.removeAllRows();
        JsArray<UserAndAmountJSO> userAndAmountArray = UserAndAmountJSO.asArrayOfUserAndAmountJSO(json);
        for (int i=0; i< userAndAmountArray.length(); i++) {
            addUserAndAmountJSO(userAndAmountArray.get(i));
        }
    }

    private void addUserAndAmountJSO(UserAndAmountJSO userAndAmount) {
        flexTable.insertRow(flexTable.getRowCount());
        flexTable.setWidget(flexTable.getRowCount() - 1, 0,
            new HTML(userAndAmount.getEmail()));
        
        Button showTab = new Button("Show");
        if (type == Type.CLAIM) {
            showTab.setTitle("Show All Claim in Detail");
        }else if (type == Type.DEBT) {
            showTab.setTitle("Show All Debts in Detail");
        } else if (type == Type.NET) {
            showTab.setText("Poke");
        }
        
      
        
        showTab.addClickHandler(new ShowClickHandler(userAndAmount));

       flexTable.setText(flexTable.getRowCount() - 1, 1, String.valueOf(userAndAmount.getAmount()));
       //if (type != Type.NET) {
           flexTable.setWidget(flexTable.getRowCount() - 1, 2, showTab);
       //}
       
       if (type == Type.CLAIM) {
//           Anchor anchorClear = new Anchor("Clear", true);
//           anchorClear.setTitle("Resets amount to 0");
//           anchorClear.setName(userAndAmount.getEmail());
//        //   anchorClear.addClickHandler(getClearAnchorClickHandler(userAndAmount.getEmail(), anchorClear));
//           flexTable.setWidget(flexTable.getRowCount() - 1, 3, anchorClear);
           
       }
    }

    private void addClickHandler() {
        flexTable.addClickHandler(new ClickHandler() {
            private  UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);
            public void onClick(ClickEvent event) {
                Cell cell = flexTable.getCellForEvent(event);
                int col = cell.getCellIndex();
                final int row = cell.getRowIndex();

                // clear anchor index
                if (col != 3) {
                    return;
                }
                Anchor anchor = (Anchor)  flexTable.getWidget(row, col);
                String userEmail = anchor.getName();
                final ClearClaimsForXAsync service = GWT.create(ClearClaimsForX.class);
                if(!Window.confirm("Click Ok to clear all the claims for " + userEmail)){
                    return;
                }
                service.clearClaims(userEmail, new AsyncCallback<String>() {
                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }
                    public void onSuccess(String result) {
                        Window.alert(result);
                        flexTable.removeRow(row);
                    }
                });
            }
        });       
    }

    private class ShowClickHandler implements ClickHandler {
        UserAndAmountJSO userAndAmount;
        ShowClickHandler(UserAndAmountJSO userAndAmount) {
            this.userAndAmount = userAndAmount;
        }
     private final UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);

     AsyncCallback<String> callback =  new AsyncCallback<String>() {
         public void onFailure(Throwable caught) {
             Window.Location.replace("/logoutURL");
         }

         public void onSuccess(String json) {
//             UserExpenseReportListPopup pop = new UserExpenseReportListPopup();
//             pop.init(json);
//             pop.setAnimationEnabled(true);
//             pop.setPopupPosition(
//                 anchor.getAbsoluteLeft() + anchor.getOffsetWidth(),
//                 anchor.getAbsoluteTop() + anchor.getOffsetHeight()
//                 );
//             pop.show();
             String header = "";
             if (type == Type.CLAIM) {
                 header = "Claims for " + userAndAmount.getEmail();
             } else if (type == Type.DEBT) {
                 header = "Debts for " + userAndAmount.getEmail();
             }
             reportList.init(json, header);
             removeAll();
             add(reportList);
         }
         
     };
    
        public void onClick(ClickEvent event) {
            if (type == Type.CLAIM) {
                service.getUserExpenseReportsAsJson(ownerEmail, userAndAmount.getEmail(), callback);
            } else if (type == Type.DEBT) {
                service.getUserExpenseReportsAsJson(userAndAmount.getEmail(), ownerEmail, callback);
            } else if (type == Type.NET) {
                sendReminderEmail(userAndAmount);
            }
        }
        
        private void sendReminderEmail(final UserAndAmountJSO userAndAmount) {
            SendReminderEmailServiceAsync service = GWT.create(SendReminderEmailService.class);
            ReminderEmailData data = new ReminderEmailData();
            data.setAmount(String.valueOf(userAndAmount.getAmount()));
            data.setEmailTo(userAndAmount.getEmail());
            service.sendEmail(data, new AsyncCallback<Void>() {
                
                public void onSuccess(Void result) {
                    Window.alert("Poked " + userAndAmount.getEmail());   
                }
                
                public void onFailure(Throwable caught) {
                 Window.alert("Poking failed : " + caught);   
                }
            });
        }
    }
}

