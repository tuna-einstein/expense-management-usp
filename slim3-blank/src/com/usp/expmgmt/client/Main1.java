package com.usp.expmgmt.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.NamedFrame;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.usp.expmgmt.client.service.GetLoggedInUserEmail;
import com.usp.expmgmt.client.service.GetLoggedInUserEmailAsync;

public class Main1 implements EntryPoint {

    public static final String EMAIL = "emailArray";
    public static final String AMOUNT = "amountArray";

    final Anchor anchor = new Anchor("Add More");
    final FormPanel form = new FormPanel(new NamedFrame("_self"));
    final VerticalPanel panel = new VerticalPanel();

    int count = 0;
    final HTML projectName = new HTML();

    final Hyperlink refresh = new Hyperlink();

    final DockLayoutPanel dockLayoutPanel = new DockLayoutPanel(Unit.PX);
    final TopPaneWidget topPane = new TopPaneWidget();
    final ContentPaneWidget contentPane = new ContentPaneWidget();
    final LeftPaneWidget leftPane = new LeftPaneWidget(contentPane.contentPanel);
    Image im = new Image();

    private void init() {
        dockLayoutPanel.addNorth(topPane, 80);
        dockLayoutPanel.addWest(leftPane, 250);
        dockLayoutPanel.add(contentPane);
        dockLayoutPanel.setSize("100%", "100%");
        RootPanel.get("umasankar").remove(im);
        RootLayoutPanel.get().add(dockLayoutPanel);
    }

    public void onModuleLoad() {


        im.setUrl("loading37.gif");
        RootPanel.get("umasankar").add(im);
        GetLoggedInUserEmailAsync ownerEmailfetcher = GWT.create(GetLoggedInUserEmail.class);
        ownerEmailfetcher.getLoggedInUserEmail( new AsyncCallback<String>() {

            public void onFailure(Throwable caught) {
                Window.Location.replace("/logoutURL");

            }
            public void onSuccess(String result) {
                if (result.contains("@")) {
                    topPane.setOwnerEmail(result);
                    leftPane.init(result);
                    init();
                } else {
                    Window.open(result,  "_self", "");
                }
            }
        });


    }
}

