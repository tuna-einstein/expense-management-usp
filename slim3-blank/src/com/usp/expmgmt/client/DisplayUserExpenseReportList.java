package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.logical.shared.OpenEvent;
import com.google.gwt.event.logical.shared.OpenHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.DisclosurePanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.client.service.ExpenseReportRetrieverAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserExpenseReportJSO;

public class DisplayUserExpenseReportList extends VerticalPanel{
    private String header;
    private final DisplayTransactionsPanel.Type type;
    public DisplayUserExpenseReportList(DisplayTransactionsPanel.Type type) {
        this.type = type;
    }
    
    public void init(String json, String header) {
        removeAll();
        this.header = header;
        add(new HTML("<b><h3>" + this.header));
        JsArray<UserExpenseReportJSO> reports = UserExpenseReportJSO.asArrayOfUserExpenseReportJSO(json);
        for (int i = 0; i < reports.length(); i++) {
            add(getDisclosurePanel(reports.get(i)));
        }
    }

    public void removeAll() {
        while (getWidgetCount() != 0){
            remove(getWidget(0));
        }
    }


 

    private DisclosurePanel getDisclosurePanel(final UserExpenseReportJSO report) {
        String description = report.getDescription();
        if (description.equals("")) {
            description = report.getDate();
        }
        final DisclosurePanel panel = new DisclosurePanel(description + "........" + report.getAmount());
        panel.setTitle("Show in detail");
        panel.addOpenHandler(new OpenHandler<DisclosurePanel>() {
            private  final ExpenseReportRetrieverAsync service = GWT.create(ExpenseReportRetriever.class);
            public void onOpen(OpenEvent<DisclosurePanel> event) { 
                service.getExpenseReportAsJson(report.getKey(), new AsyncCallback<String>() {
                    public void onFailure(Throwable caught) {
                        Window.alert(caught.getMessage());
                    }

                    public void onSuccess(String json) {
                        //      Window.alert(result);
                        panel.clear();
                        DisplayExpenseReport pop = new DisplayExpenseReport(type);
                        pop.init(json);
                        panel.add(pop);
                    }
                });

            }

        });

        return panel;
    }

}
