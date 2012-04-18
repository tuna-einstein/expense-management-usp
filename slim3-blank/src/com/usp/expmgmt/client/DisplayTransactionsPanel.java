package com.usp.expmgmt.client;

import net.sourceforge.htmlunit.corejs.javascript.ast.DoLoop;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.usp.expmgmt.client.service.ClearClaimsForX;
import com.usp.expmgmt.client.service.ClearClaimsForXAsync;
import com.usp.expmgmt.client.service.UserExpenseReportRetriever;
import com.usp.expmgmt.client.service.UserExpenseReportRetrieverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserAndAmountJSO;

public class DisplayTransactionsPanel extends ScrollPanel {
    public static enum Type  {
        CLAIM, DEBT, NET
    };
    
    private final Type type;
    private String ownerEmail;
    private final FlexTable flexTable = new FlexTable();
    private final DisplayUserExpenseReportList reportList = new DisplayUserExpenseReportList();
    public DisplayTransactionsPanel(Type type ) {
        this.type = type;
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

//       addClickHandler(new ClickHandler() {
//           private  UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);
//            public void onClick(ClickEvent event) {
//                Cell cell = getCellForEvent(event);
//                final int row = cell.getRowIndex();
//                final HTML htmlEmail = (HTML)  getWidget(row, 0);
//                final int col = getCellCount(row);
//                
//                AsyncCallback callback =  new AsyncCallback<String>() {
//                    public void onFailure(Throwable caught) {
//                        Window.alert(caught.getMessage());
//                    }
//
//                    public void onSuccess(String json) {
//                        UserExpenseReportListPopup pop = new UserExpenseReportListPopup();
//                        pop.init(json);
//                        pop.setAnimationEnabled(true);
//                        pop.setPopupPosition(
//                            getWidget(row, col - 1).getAbsoluteLeft() + getWidget(row, col - 1).getOffsetWidth(),
//                            getWidget(row, col - 1).getAbsoluteTop() + getWidget(row, col - 1).getOffsetHeight()
//                            );
//                        pop.show();
//                    }
//                };
//                if (type == Type.CLAIM) {
//                    service.getUserExpenseReportsAsJson(ownerEmail, htmlEmail.getHTML(), callback);
//                } else if (type == Type.DEBT) {
//                    service.getUserExpenseReportsAsJson(htmlEmail.getHTML(), ownerEmail, callback);
//                }
//            }
//        });       
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
        flexTable.insertRow(flexTable.getRowCount());
        flexTable.setWidget(flexTable.getRowCount() - 1, 0,
            new HTML(userAndAmount.getEmail()));
        
        Anchor anchorShow = new Anchor("Show");
        
        anchorShow.setName(userAndAmount.getEmail());
        
        anchorShow.addClickHandler(new AnchorClickHandler(anchorShow));

       flexTable.setText(flexTable.getRowCount() - 1, 1, String.valueOf(userAndAmount.getAmount()));
       if (type != Type.NET) {
           flexTable.setWidget(flexTable.getRowCount() - 1, 2, anchorShow);
       }
       
       if (type == Type.CLAIM) {
           Anchor anchorClear = new Anchor("<pre>  <b>Clear </pre>", true);
           anchorClear.addClickHandler(getClearAnchorClickHandler(userAndAmount.getEmail()));
           flexTable.setWidget(flexTable.getRowCount() - 1, 3, anchorClear);
       }
    }

    private ClickHandler getClearAnchorClickHandler(final String userEmail) {
       final ClearClaimsForXAsync service = GWT.create(ClearClaimsForX.class);
        
        ClickHandler handler = new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                
                if(!Window.confirm("Click Ok to clear all the claims for " + userEmail)){
                    return;
                }
                service.clearClaims(userEmail, new AsyncCallback<String>() {

                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }

                    public void onSuccess(String result) {
                        Window.alert(result);
                    }
                });
            }
        };
        return handler;
    }

    private class AnchorClickHandler implements ClickHandler {
        Anchor anchor;
        AnchorClickHandler(Anchor anchor) {
            this.anchor = anchor;
        }
     private final UserExpenseReportRetrieverAsync service = GWT.create(UserExpenseReportRetriever.class);

     AsyncCallback<String> callback =  new AsyncCallback<String>() {
         public void onFailure(Throwable caught) {
             Window.alert(caught.getMessage());
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
                 header = "Claims for " + anchor.getName();
             } else if (type == Type.DEBT) {
                 header = "Debts for " + anchor.getName();
             }
             reportList.init(json, header);
             removeAll();
             add(reportList);
         }
         
     };
    
        public void onClick(ClickEvent event) {
            if (type == Type.CLAIM) {
                service.getUserExpenseReportsAsJson(ownerEmail, anchor.getName(), callback);
            } else if (type == Type.DEBT) {
                service.getUserExpenseReportsAsJson(anchor.getName(), ownerEmail, callback);
            }
        }
    }
}

