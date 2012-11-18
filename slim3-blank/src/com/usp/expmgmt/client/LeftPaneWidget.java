package com.usp.expmgmt.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.Widget;
import com.usp.expmgmt.client.DisplayTransactionsPanel.Type;
import com.usp.expmgmt.client.service.ExpenseReportRetriever;
import com.usp.expmgmt.client.service.ExpenseReportRetrieverAsync;

public class LeftPaneWidget extends Composite {

	private static LeftPaneWidgetUiBinder uiBinder = GWT
			.create(LeftPaneWidgetUiBinder.class);

	interface LeftPaneWidgetUiBinder extends UiBinder<Widget, LeftPaneWidget> {
	}

	@UiField Anchor addTransaction;
	@UiField Anchor viewClaims;
	@UiField Anchor viewDebts;
	@UiField Anchor netPayments;
	@UiField Anchor addContact;
	@UiField Anchor feedback;
	@UiField Anchor helpAndSupport;
	Anchor currentSelection;
	Widget currentWidget;
	final MultiWordSuggestOracle oracle = new MultiWordSuggestOracle();
	
	final DisplayTransactionsPanel dcPanelClaims = new DisplayTransactionsPanel(Type.CLAIM);
    final DisplayTransactionsPanel dcPanelDebts = new DisplayTransactionsPanel(Type.DEBT);
    final DisplayTransactionsPanel dcPanelNetpays = new DisplayTransactionsPanel(Type.NET);
    final ExpenseForm expenseForm = new ExpenseForm();
    final FeedbackForm feedbackForm = new FeedbackForm();
    final AddContactWidget addContactWidget = new AddContactWidget();
    
    final ScrollPanel centerContentWidget;
    
    private static ExpenseReportRetrieverAsync service = GWT.create(ExpenseReportRetriever.class);
	
	public LeftPaneWidget(ScrollPanel centerContentWidget) {
		initWidget(uiBinder.createAndBindUi(this));
		currentSelection = addTransaction;
		currentWidget = expenseForm;
		this.centerContentWidget = centerContentWidget;
	}

	@UiHandler("addTransaction")
	void handleClickAddTransaction(ClickEvent e) {
		currentSelection.getElement().removeClassName("selected");
	  addTransaction.getElement().addClassName("selected");
	  currentSelection = addTransaction;
	  
	  centerContentWidget.clear();
      centerContentWidget.add(expenseForm);
	}
	
	@UiHandler("viewClaims")
	void handleClickViewClaims(ClickEvent e) {
	  currentSelection.getElement().removeClassName("selected");
	  viewClaims.getElement().addClassName("selected");
	  currentSelection = viewClaims;
	  
	  initClaims();
	  centerContentWidget.clear();
	  centerContentWidget.add(dcPanelClaims);
	}
	
	@UiHandler("viewDebts")
	void handleClickViewDebts(ClickEvent e) {
		currentSelection.getElement().removeClassName("selected");
	  viewDebts.getElement().addClassName("selected");
	  currentSelection = viewDebts;
	  
	  initDebts();
	  centerContentWidget.clear();
      centerContentWidget.add(dcPanelDebts);
	}
	
	@UiHandler("feedback")
	void handleClickFeedback(ClickEvent e) {
		currentSelection.getElement().removeClassName("selected");
	  feedback.getElement().addClassName("selected");
	  currentSelection = feedback;
	  
	  centerContentWidget.clear();
      centerContentWidget.add(feedbackForm);
	  }
	
	@UiHandler("netPayments")
	void handleClickNetPayments(ClickEvent e) {
		currentSelection.getElement().removeClassName("selected");
	  netPayments.getElement().addClassName("selected");
	  currentSelection = netPayments;
	  
	  initNetPayments();
	  centerContentWidget.clear();
      centerContentWidget.add(dcPanelNetpays);
	}
	
	@UiHandler("addContact")
    void handleClickAddContact(ClickEvent e) {
        currentSelection.getElement().removeClassName("selected");
      addContact.getElement().addClassName("selected");
      currentSelection = addContact;
      
      centerContentWidget.clear();
      centerContentWidget.add(addContactWidget);
    }
	
	@UiHandler("helpAndSupport")
	void handleClickHelpAndSupport(ClickEvent e) {
		currentSelection.getElement().removeClassName("selected");
	  helpAndSupport.getElement().addClassName("selected");
	  currentSelection = helpAndSupport;
	  
	  centerContentWidget.clear();
      centerContentWidget.add(getHelpContent());
	}
	
	public void init(String ownerEmail) {
	    dcPanelClaims.setOwnerEmail(ownerEmail);
        dcPanelDebts.setOwnerEmail(ownerEmail);
        dcPanelNetpays.setOwnerEmail(ownerEmail);
        expenseForm.init(ownerEmail);
       // if (!"test@example.com".equals(ownerEmail)) {
        expenseForm.setContacts();
       // }
	}
	
	private void initClaims() {
	    service.getClaimsAsJson(dcPanelClaims.getOwnerEmail(), getCallback(dcPanelClaims));
	}

	private void initDebts() {
	    service.getDebtsAsJson(dcPanelDebts.getOwnerEmail(), getCallback(dcPanelDebts));
	}

	private void initNetPayments() {
	    service.getNetPaymentAsJson(dcPanelDebts.getOwnerEmail(), getCallback(dcPanelNetpays));
	}

	private AsyncCallback<String> getCallback(final DisplayTransactionsPanel dp) {
	    return new AsyncCallback<String>() {
	        public void onFailure(Throwable caught) {
	            Window.alert(caught.getMessage());
	        }
	        public void onSuccess(String result) {
	            dp.init(result);
	        }
	    };
	}
	
	 private HTML getHelpContent() {
	        HTML html = new HTML();
	        html.setHTML("<iframe WIDTH=990 HEIGHT=800 src=\"https://docs.google.com/document/pub?id=1Yiz-EKi16-9zzxzlOWJiIvB6Qwc7UjdgKIQz2AnMfi4&amp;embedded=true\"></iframe>"); 
	        return html;
	    }
}
