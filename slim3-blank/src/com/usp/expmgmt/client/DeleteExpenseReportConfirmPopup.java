package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Widget;
import com.usp.expmgmt.client.service.ExpenseReportSaver;
import com.usp.expmgmt.client.service.ExpenseReportSaverAsync;

public class DeleteExpenseReportConfirmPopup extends DialogBox implements HasText {

    private static ConfirmPopupUiBinder uiBinder = GWT
            .create(ConfirmPopupUiBinder.class);

    interface ConfirmPopupUiBinder extends UiBinder<Widget, DeleteExpenseReportConfirmPopup> {
    }

    public DeleteExpenseReportConfirmPopup() {
        setWidget(uiBinder.createAndBindUi(this));
        getElement().getStyle().setZIndex(999);
        setText("Delete Expense Report");
    }

    @UiField Button cancelButton;
    @UiField Button okButton;
    private String requestString;
    private Widget widgetToBeRemoved;

    @UiHandler("okButton")
    void handleOkClick(ClickEvent e) {
        hide();
        final ExpenseReportSaverAsync service = GWT.create(ExpenseReportSaver.class);
        service.delete(requestString, new AsyncCallback<String>() {
            
            public void onSuccess(String result) {
               Widget w = widgetToBeRemoved.getParent();
                widgetToBeRemoved.removeFromParent();
                w.removeFromParent();
            }
            
            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }
        });
    }

    @UiHandler("cancelButton")
    void handleCancelClick(ClickEvent e) {
        hide();
        
    }
    
    public void setRequestString(String requestString) {
        this.requestString = requestString;
    }
    
    public void setWidgetTobeRemoved(Widget widget) {
        this.widgetToBeRemoved = widget;
    }
}
