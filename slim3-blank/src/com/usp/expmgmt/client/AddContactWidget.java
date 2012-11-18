package com.usp.expmgmt.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.usp.expmgmt.client.service.AddUserContact;
import com.usp.expmgmt.client.service.AddUserContactAsync;

public class AddContactWidget extends Composite {

    private static AddContactWidgetUiBinder uiBinder = GWT
            .create(AddContactWidgetUiBinder.class);

    interface AddContactWidgetUiBinder extends
    UiBinder<Widget, AddContactWidget> {
    }

    @UiField Anchor addMoreAnchor;
    @UiField FlowPanel contentPanel;
    List<TextBox> emailBoxList;

    public AddContactWidget() {
        initWidget(uiBinder.createAndBindUi(this));
        emailBoxList = new ArrayList<TextBox>();
    }

    @UiHandler("addMoreAnchor")
    public void onClickAddMore(ClickEvent event) {
        contentPanel.add(getContactWidget());
    }

    @UiHandler("submit")
    public void onClickSubmit(ClickEvent event) {
        AddUserContactAsync addUserContact = GWT.create(AddUserContact.class);
        List<String> list = new ArrayList<String>();
        
        for (TextBox textBox : emailBoxList) {
            if (!textBox.getText().equals("")) {
                list.add(textBox.getText());
            }
        }
        
        addUserContact.addUserContacts(list, new AsyncCallback<String>() {
            
            public void onSuccess(String result) {
                Window.alert(result);
            }
            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }
        });
        
        
    }

    private Widget getContactWidget() {
        final HorizontalPanel hp = new HorizontalPanel();
        hp.setSpacing(5);
        final TextBox emailBox = new TextBox();
        emailBox.setVisibleLength(50);
        emailBoxList.add(emailBox);
        hp.add(emailBox);
        hp.addStyleName("alignCenter");

        Anchor remove = new Anchor("Remove");
        remove.setHref("javascript:;");
        hp.add(remove);

        remove.addClickHandler(new ClickHandler() {

            public void onClick(ClickEvent event) {
                hp.removeFromParent();
                emailBoxList.remove(emailBox);
            }
        });

        return hp;
    }
}
