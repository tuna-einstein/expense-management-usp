package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.Widget;

public class ContentPaneWidget extends Composite {

    private static ContentPaneWidgetUiBinder uiBinder = GWT
            .create(ContentPaneWidgetUiBinder.class);

    interface ContentPaneWidgetUiBinder extends
    UiBinder<Widget, ContentPaneWidget> {
    }

    @UiField ScrollPanel contentPanel;
    public ContentPaneWidget() {
        initWidget(uiBinder.createAndBindUi(this));
    }

    public void addWidget(Widget w) {
        contentPanel.setSize("100%", "100%");
        contentPanel.add(w);
    }
}
