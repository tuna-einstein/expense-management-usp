package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class TopPaneWidget extends Composite {

	private static TopPaneWidgetUiBinder uiBinder = GWT
			.create(TopPaneWidgetUiBinder.class);

	interface TopPaneWidgetUiBinder extends UiBinder<Widget, TopPaneWidget> {
	}
	
	@UiField Label ownerEmail;
	
	public TopPaneWidget() {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	public void setOwnerEmail(String ownerEmail) {
	    this.ownerEmail.setText(ownerEmail);
	}
	
	@UiHandler("logout")
	public void clickHandleLogout(ClickEvent event) {
	    Window.Location.replace("/logoutURL");
	}
}
