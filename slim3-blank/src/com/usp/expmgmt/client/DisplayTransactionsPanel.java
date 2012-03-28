package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.usp.expmgmt.client.service.UserExpenseReportRetriever;
import com.usp.expmgmt.client.service.UserExpenseReportRetrieverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserAndAmountJSO;

public class DisplayTransactionsPanel extends FlexTable {
    public static enum Type  {
        CLAIM, DEBT, NET
    };
    
    private final Type type;
    private String ownerEmail;
    public DisplayTransactionsPanel(Type type ) {
        this.type = type;
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
        removeAllRows();
        JsArray<UserAndAmountJSO> userAndAmountArray = UserAndAmountJSO.asArrayOfUserAndAmountJSO(json);
        for (int i=0; i< userAndAmountArray.length(); i++) {
            addUserAndAmountJSO(userAndAmountArray.get(i));
        }

       addClickHandler(new ClickHandler() {
           private  UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);
            public void onClick(ClickEvent event) {
                Cell cell = getCellForEvent(event);
                final int row = cell.getRowIndex();
                final HTML htmlEmail = (HTML)  getWidget(row, 0);
                final int col = getCellCount(row);
                
                AsyncCallback callback =  new AsyncCallback<String>() {
                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }

                    public void onSuccess(String json) {
                    //    Window.alert(json);
                        UserExpenseReportListPopup pop = new UserExpenseReportListPopup();
                        pop.init(json);
                        pop.setAnimationEnabled(true);
                        pop.setPopupPosition(
                            getWidget(row, col - 1).getAbsoluteLeft() + getWidget(row, col - 1).getOffsetWidth(),
                            getWidget(row, col - 1).getAbsoluteTop() + getWidget(row, col - 1).getOffsetHeight()
                            );
                        pop.show();
                    }
                };
                if (type == Type.CLAIM) {
                    service.getUserExpenseReportsAsJson(ownerEmail, htmlEmail.getHTML(), callback);
                } else if (type == Type.DEBT) {
                    service.getUserExpenseReportsAsJson(htmlEmail.getHTML(), ownerEmail, callback);
                }
            }
        });       
    }

//    private void addExpenseReport(ExpenseReportJSO report) {
//        flexTable.insertRow(flexTable.getRowCount());
//        flexTable.getFlexCellFormatter().setColSpan(flexTable.getRowCount() - 1, 0, 2);
//        // flexTable.setText(flexTable.getRowCount() - 1, 0,
//        //    report.getOwnerEmail() + "( " + report.getDescription() + " )");
//
//        for (int i = 0; i < report.getEmailList().length(); i++) {
//            flexTable.insertRow(flexTable.getRowCount());
//            flexTable.setText(flexTable.getRowCount() - 1, 0, report.getEmailList().get(i) );
//            flexTable.setText(flexTable.getRowCount() - 1, 1, String.valueOf(report.getAmountList().get(i)));
//        }
//    }

    private void addUserAndAmountJSO(UserAndAmountJSO userAndAmount) {
        insertRow(getRowCount());
        setWidget(getRowCount() - 1, 0,
            new HTML(userAndAmount.getEmail()));
        Anchor anchor = new Anchor("show");
    //    anchor.addClickHandler(new AnchorClickHandler(anchor));

       setText(getRowCount() - 1, 1, String.valueOf(userAndAmount.getAmount()));
       setWidget(getRowCount() - 1, 2, anchor);
        
    }

//    private static class AnchorClickHandler implements ClickHandler {
//        UIObject uiObject;
//        AnchorClickHandler(UIObject uiObject) {
//            this.uiObject = uiObject;
//        }
//     private static final UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);
//
//
//        public void onClick(ClickEvent event) {
//            service.getUserClaimsAsJson("hello@gmail.com", "email1@gmail.com", new AsyncCallback<String>() {
//                        public void onFailure(Throwable caught) {
//                    Window.alert(caught.getMessage());
//                }
//
//                public void onSuccess(String json) {
//                    //      Window.alert(result);
//                    UserExpenseReportListPopup pop = new UserExpenseReportListPopup();
//                    pop.init(json);
//                    pop.setAnimationEnabled(true);
//                    pop.setPopupPosition(uiObject.getAbsoluteLeft(), uiObject.getAbsoluteTop());
//                    pop.show();
//                }
//            });
//        }
//    }
}

