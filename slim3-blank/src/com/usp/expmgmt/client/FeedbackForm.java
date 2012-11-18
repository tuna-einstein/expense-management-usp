package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.FeedbackDataSaver;
import com.usp.expmgmt.client.service.FeedbackDataSaverAsync;

public class FeedbackForm extends VerticalPanel{
    private final TextArea textArea = new TextArea();
    private final Button submit = new Button("Send");
    FeedbackForm() {
        add(new HTML("<h2>We value your suggestions...."));
        textArea.setCharacterWidth(100);
        textArea.setVisibleLines(4);
        add(textArea);
        add(submit);
        addSubmitHandler();
    }
    
    private void addSubmitHandler() {
        submit.addClickHandler(new ClickHandler() {
            FeedbackDataSaverAsync saver= GWT.create(FeedbackDataSaver.class);
            public void onClick(ClickEvent event) {
                if (textArea.getText().equals("")) {
                    return;
                }
                 if (textArea.getText().length() > 200) {
                    Window.alert("More than 200 characters are not allowed");
                     return;
                 }
                saver.saveFeedback(textArea.getText(), new AsyncCallback<String>() {
                    
                    public void onSuccess(String result) {
                        Window.alert(result);
                        textArea.setText("");
                        }
                    
                    public void onFailure(Throwable caught) {
                       Window.alert(caught.getMessage()); 
                    }
                });
            }
        });
    }
}
