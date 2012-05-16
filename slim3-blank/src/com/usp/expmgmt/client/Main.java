package com.usp.expmgmt.client;

import org.hamcrest.core.IsInstanceOf;

import com.gargoylesoftware.htmlunit.javascript.host.Document;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.NamedFrame;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SourcesTabEvents;
import com.google.gwt.user.client.ui.TabListener;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.usp.expmgmt.client.DisplayTransactionsPanel.Type;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.client.service.ExpenseReportRetrieverAsync;
import com.usp.expmgmt.client.service.LoggedInUserFetcher;
import com.usp.expmgmt.client.service.LoggedInUserFetcherAsync;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.LogInInfoJSO;
import com.usp.expmgmt.shared.util.LogInInfo;

public class Main implements EntryPoint {

    public static final String EMAIL = "emailArray";
    public static final String AMOUNT = "amountArray";

    final Anchor anchor = new Anchor("Add More");
    final FormPanel form = new FormPanel(new NamedFrame("_self"));
    final VerticalPanel panel = new VerticalPanel();
    final MultiWordSuggestOracle oracle = new MultiWordSuggestOracle();
    final Button button = new Button("Submit");
    final ExpenseForm expenseForm = new ExpenseForm();
    int count = 0;
    final HTML htmlLogout = new HTML();
    final Button logoutButton = new Button("Logout");
    final HTML projectName = new HTML();
    
    final Hyperlink refresh = new Hyperlink();
    private String ownerEmail;
    private String logoutUrl;

    final DisplayTransactionsPanel dcPanelClaims = new DisplayTransactionsPanel(Type.CLAIM);
    final DisplayTransactionsPanel dcPanelDebts = new DisplayTransactionsPanel(Type.DEBT);

    final DisplayTransactionsPanel dcPanelNetpays = new DisplayTransactionsPanel(Type.NET);
    
    final TabPanel displayTransactionsTabs = new TabPanel();
    
    private HTML getHelpContent() {
        HTML html = new HTML();
        html.setHTML("<iframe WIDTH=800 HEIGHT=1200 src=\"https://docs.google.com/document/pub?id=1Yiz-EKi16-9zzxzlOWJiIvB6Qwc7UjdgKIQz2AnMfi4&amp;embedded=true\"></iframe>"); 
        return html;
    }

    private void init() {
        HorizontalPanel hpanelForTransactionDisplay = new HorizontalPanel();
        hpanelForTransactionDisplay.setHorizontalAlignment(HasAlignment.ALIGN_CENTER);
        projectName.setHTML("<h1> Expense Management</h1>");
        displayTransactionsTabs.addSelectionHandler(new MyTabListener(displayTransactionsTabs));
        hpanelForTransactionDisplay.add( displayTransactionsTabs);
        hpanelForTransactionDisplay.setWidth("100%");
       // hpanelForTransactionDisplay.add(expenseForm);
        
        expenseForm.setOracle(oracle);
        
        hpanelForTransactionDisplay.add(logoutButton);
        displayTransactionsTabs.add(expenseForm, "Add Transaction");
        displayTransactionsTabs.add(dcPanelClaims, "Claims");
        displayTransactionsTabs.add(dcPanelDebts, "Debts");
        displayTransactionsTabs.add(dcPanelNetpays, "Net-Payments");
        displayTransactionsTabs.add(new FeedbackForm(), "Feedback");

        displayTransactionsTabs.add(getHelpContent(), "Help and Contacts");
        
      
        
      //  displayTransactionsTabs.setWidth("50%");
      //  displayTransactionsTabs.setHeight("50%");
        displayTransactionsTabs.selectTab(0);
        displayTransactionsTabs.setSize("800px", "500px");
        displayTransactionsTabs.setHeight("500px");
        displayTransactionsTabs.addStyleName("table-center");
        RootPanel.get("expense-display").add(hpanelForTransactionDisplay);
        RootPanel.get("project-name").add(projectName);
        RootPanel.get("loggedin_user_name").add(new HTML("<h2>" + ownerEmail + "</h2>"));


    }
    public void onModuleLoad() {
       
        projectName.setHTML("<h1>Loading.....</h1>");
        RootPanel.get("project-name").add(projectName);
        LoggedInUserFetcherAsync ownerEmailfetcher = GWT.create(LoggedInUserFetcher.class);
        ownerEmailfetcher.getLoggedInUserEmail( new AsyncCallback<String>() {

            public void onFailure(Throwable caught) {
                Window.Location.replace("/logoutURL");

            }
            public void onSuccess(String result) {
                LogInInfoJSO info= LogInInfoJSO.asLogInInfoJSO(result);
                if (info.getLoginUrl().equals("")) {
                    ownerEmail = info.getEmail();
                    //oracle.addAll(info.getContactList());
                    dcPanelClaims.setOwnerEmail(ownerEmail);
                    htmlLogout.setHTML("<a href=\"" + info.getLogoutUrl() + "\"> Logout </a>");
                    logoutUrl = info.getLogoutUrl() ;
                    dcPanelDebts.setOwnerEmail(ownerEmail);
                    dcPanelNetpays.setOwnerEmail(ownerEmail);
                    init();
                    expenseForm.init(ownerEmail);
                    getContacts();

                } else {
                    Window.open(info.getLoginUrl(),  "_self", "");
                }
            }
        });
        
      
        
        

        //fetchDataFromServer();




        // displayTransactionsTabs.
        // Add it to the root panel.




        //   RootPanel.get("logout-ref").add(htmlLogout);

        //        form.setAction("/save_expense/");
        //        form.setWidget(panel);

        button.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                form.submit();
            }
        });
        
        
        logoutButton.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                Window.Location.replace(logoutUrl);
            }
        });
    }
    
    private void getContacts() {
        LoggedInUserFetcherAsync ownerEmailfetcher = GWT.create(LoggedInUserFetcher.class);
        ownerEmailfetcher.getOwnerEmail(new AsyncCallback<String>() {

            public void onFailure(Throwable caught) {
                Window.Location.replace("/logoutURL");
            }

            public void onSuccess(String result) {
                LogInInfoJSO info= LogInInfoJSO.asLogInInfoJSO(result);
                if (info.getLoginUrl().equals("")) {
                    oracle.addAll(info.getContactList());
                    expenseForm.setOracle(oracle);
                } else {
                    Window.open(info.getLoginUrl(),  "_self", "");
                }
            }
        });
    }

    private void parseJsonData(String json) {

        Window.alert(json);
        JSONValue value = JSONParser.parse(json);

        JSONArray jsonArray = value.isArray();

        if (jsonArray != null) {
            for (int i=0; i<=jsonArray.size()-1; i++) {
                JSONObject productObj = jsonArray.get(i).isObject();
                String name = productObj.get("fullName").isString().stringValue();
                String email = productObj.get("email").isString().stringValue();
                oracle.add("< " + email +" > " + name);
            }
        }

    } 

    private void fetchDataFromServer() {

        try {

            RequestBuilder rb = new RequestBuilder(
                RequestBuilder.GET, "/contacts");

            rb.setCallback(new RequestCallback() {
                public void onResponseReceived(Request request, Response response) {
                    parseJsonData(response.getText());
                }

                public void onError(Request request, Throwable exception) {
                    Window.alert("Error occurred" + exception.getMessage());
                }
            });
            rb.send();

        } 
        catch (RequestException e) {
            Window.alert("Error occurred" + e.getMessage());
        }
    }

}



class MyTabListener implements SelectionHandler<Integer> {
    private static ExpenseReportRetrieverAsync service = GWT.create(ExpenseReportRetriever.class);
    private TabPanel panel;
    public MyTabListener(TabPanel panel) {
        this.panel = panel;
    }
    public void onSelection(SelectionEvent<Integer> event) {
        // Window.alert(event.getSelectedItem().toString());
        Widget wid = panel.getWidget(event.getSelectedItem());
        if (!(wid instanceof DisplayTransactionsPanel)) {
            return;
        }
        final DisplayTransactionsPanel dp = (DisplayTransactionsPanel) panel.getWidget(event.getSelectedItem());
        AsyncCallback<String> callback = new AsyncCallback<String>() {
            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }
            public void onSuccess(String result) {
                dp.init(result);
            }
        };
        if (dp.getType() == Type.CLAIM) {
            service.getClaimsAsJson(dp.getOwnerEmail(), callback);
        } else if (dp.getType() == Type.DEBT) {
            service.getDebtsAsJson(dp.getOwnerEmail(), callback);
        } else if (dp.getType() == Type.NET) {
           service.getNetPaymentAsJson(dp.getOwnerEmail(), callback);
        }
    }

}

