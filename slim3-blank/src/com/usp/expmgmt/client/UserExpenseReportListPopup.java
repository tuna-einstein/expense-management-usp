package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.PopupPanel;
import com.usp.expmgmt.client.service.DemoGetSingleExpenseReport;
import com.usp.expmgmt.client.service.DemoGetSingleExpenseReportAsync;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.client.service.ExpenseReportRetrieverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserExpenseReportJSO;

public class UserExpenseReportListPopup extends PopupPanel {
        Grid grid;
        public UserExpenseReportListPopup()
        {
            super(true);
        }
       public void init(String json) {
        JsArray<UserExpenseReportJSO> reports = UserExpenseReportJSO.asArrayOfUserExpenseReportJSO(json);
        grid = new Grid(reports.length(), 4);
        for (int i = 0; i < reports.length(); i++) {
            addToGrid(reports.get(i), i);
        }
        
        add(grid);
    }
 
    private void addToGrid(UserExpenseReportJSO report, int row) {
        grid.setText(row, 0, report.getEmail());
        grid.setText(row, 1, String.valueOf(report.getAmount()));
        grid.setText(row, 2, "(" + report.getDate() + ")");
        grid.setWidget(row, 3, getAnchor(report.getKey()));
    }

    private Anchor getAnchor(String value) {
        Anchor anchor = new Anchor("Show");
        anchor.setName(value);
        anchor.addClickHandler(new AnchorClickHandler(anchor));
        return anchor;
    }
    
    private static class AnchorClickHandler implements ClickHandler {
        Anchor uiObject;
        AnchorClickHandler(Anchor uiObject) {
            this.uiObject = uiObject;
        }
     private static final ExpenseReportRetrieverAsync service = GWT.create(ExpenseReportRetriever.class);


        public void onClick(ClickEvent event) {
            service.getExpenseReportAsJson(uiObject.getName(), new AsyncCallback<String>() {
                        public void onFailure(Throwable caught) {
                    Window.alert(caught.getMessage());
                }

                public void onSuccess(String json) {
                    //      Window.alert(result);
                    ExpenseReportPopup pop = new ExpenseReportPopup();
                    pop.init(json);
                    pop.setAnimationEnabled(true);
                    pop.setPopupPosition(uiObject.getAbsoluteLeft() + uiObject.getOffsetWidth(), uiObject.getAbsoluteTop() + uiObject.getOffsetHeight());
                    pop.show();
                }
            });
        }
    }
}
