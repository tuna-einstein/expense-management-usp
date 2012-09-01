package com.usp.expmgmt.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.FormHandler;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormSubmitCompleteEvent;
import com.google.gwt.user.client.ui.FormSubmitEvent;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.datepicker.client.DateBox;
import com.usp.expmgmt.client.service.GetUserContacts;
import com.usp.expmgmt.client.service.GetUserContactsAsync;

public class ExpenseForm extends FormPanel {
    public static final String EMAIL = "emailArray";
    public static final String AMOUNT = "amountArray";
    private final Anchor anchor;
    private final VerticalPanel verticalPanel;
    private  MultiWordSuggestOracle oracle;
    private final Button button;
    private final DateBox dateBox;
    private final TextArea descriptionText;
    private final TextBox ownerEmail;
    private final List<SuggestBox> textBoxList = new ArrayList();
    private final List<TextBox> amountBoxList = new ArrayList();
    private final TextBox totalAmount = new TextBox();
    final Anchor addMoreDetails = new Anchor("Add More Details to this Expense and Submit");
    final CheckBox checkBox = new CheckBox();
    private final HorizontalPanel sendEmailPanel = new HorizontalPanel();

    HandlerRegistration registration;

    public ExpenseForm() {
        this.anchor = new Anchor("Add More People to this expense");
        anchor.setTitle("Add a person");
        this.verticalPanel = new VerticalPanel();
        this.verticalPanel.setSpacing(8);
        this.oracle = new MultiWordSuggestOracle();
        this.button = new Button("Submit");
        this.dateBox = new DateBox();
        this.ownerEmail = new TextBox();
        this.ownerEmail.setName("ownerEmail");
        this.ownerEmail.setVisibleLength(35);
        dateBox.setValue(new Date());
        dateBox.getTextBox().setName("date");
        dateBox.getTextBox().setVisibleLength(30);
        this.descriptionText = new TextArea();
        descriptionText.setCharacterWidth(100);
        descriptionText.setVisibleLines(1);
        descriptionText.setName("description");

        checkBox.setName("sendMail");
        checkBox.setFormValue("set");
        sendEmailPanel.add(new Label("Notify through Email: "));
        sendEmailPanel.add(checkBox);
        sendEmailPanel.setSpacing(8);

        totalAmount.addKeyUpHandler(new KeyUpHandler() {

            public void onKeyUp(KeyUpEvent event) {
                distributeTotal();

            }
        });

        anchor.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                verticalPanel.add(getEmailAndAmount(""));
                verticalPanel.add(anchor);
                verticalPanel.add(new HTML(" "));
                verticalPanel.add(sendEmailPanel);
                verticalPanel.add(button);


                distributeTotal();
            }
        });
        button.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                submit();
            }
        });


        addFormHandler(new FormHandler() {



            public void onSubmitComplete(FormSubmitCompleteEvent event) {

                descriptionText.setText("");
                Window.alert(event.getResults());
                while (verticalPanel.getWidgetCount() != 0) {
                    verticalPanel.remove(0);
                }
                registration.removeHandler();
                textBoxList.clear();
                amountBoxList.clear();
                init(ownerEmail.getText());
            }

            private boolean checkDuplicacy() {
                int length = textBoxList.size();
                for (int i = 0; i < length ; i++ ) {
                    String parent = textBoxList.get(i).getText();
                    for (int j= i + 1; j< length ; j++) {
                        if (parent.equals(textBoxList.get(j).getText())) {
                            Window.alert("Duplicates :" + parent);
                            textBoxList.get(i).getElement().getStyle().setProperty("background-color", "blue");
                            textBoxList.get(j).getElement().getStyle().setProperty("background-color", "blue");
                            return true;
                        }
                    }
                }
                return false;
            }

            public void onSubmit(FormSubmitEvent event) {

                for (SuggestBox box : textBoxList) {
                    if (!checkEmail(box)) {

                        event.setCancelled(true);

                    }
                }

                if (event.isCancelled()) {
                    Window.alert("Invalid email");
                    return;
                }
                // Check amount boxes
                for (TextBox box : amountBoxList) {
                    if(!checkAmount(box)) {

                        event.setCancelled(true);

                    }
                }

                if (event.isCancelled()) {
                    Window.alert("Invalid amount");
                    return;
                }

                if(descriptionText.getText().length() > 100) {
                    Window.alert("Description length can't be more than 100 characters");
                    event.setCancelled(true);
                    return;
                }

                if (checkDuplicacy()) {
                    event.setCancelled(true);
                }
                // TODO Auto-generated method stub

            }
        });


    }

    private void distributeTotal() {
        Double tamount= 0.0;
        try {
            tamount = Double.valueOf(totalAmount.getText());
            tamount = tamount / amountBoxList.size();
        } catch (Exception e) {
            return;
        }

        for (TextBox box : amountBoxList) {
            box.setText(tamount.toString());
        }
    }

    /**
     * arranges the components on the form
     */
    public ExpenseForm init(final String email) {
        // Autofill for logged in user
        ownerEmail.setText(email);
        ownerEmail.setReadOnly(true);
        addMoreDetails.setVisible(true);

        HorizontalPanel hp = new HorizontalPanel();
        hp.setWidth("800px");
        hp.add(dateBox);

        HorizontalPanel hpForTotal = new HorizontalPanel();
        hpForTotal.add(new HTML("<b>Total Amount: "));
        hpForTotal.add(totalAmount);

        hp.add(hpForTotal);





        hp.add(ownerEmail);
        ownerEmail.setVisible(false);
        verticalPanel.add(hp);



        // Add expense description
        verticalPanel.add(new HTML("<b>Expense Description: "));
        verticalPanel.add(descriptionText);


        verticalPanel.add(addMoreDetails);
        registration = addMoreDetails.addClickHandler(new ClickHandler() {

            public void onClick(ClickEvent event) {
                addMoreDetails.setVisible(false);
                verticalPanel.add(getEmailAndAmount(email));
                verticalPanel.add(anchor);
                verticalPanel.add(new HTML(" "));
                verticalPanel.add(sendEmailPanel);
                verticalPanel.add(button);
                distributeTotal();
            }
        });



        // add the verticalPanel to form
        this.setWidget(verticalPanel);

        // Add action destination
        setAction("/save_expense");



        return this;
    }

    public void setOracle(MultiWordSuggestOracle oracle) {
        this.oracle = oracle;
    }
    private HorizontalPanel getEmailAndAmount(String userEmail) {
        final SuggestBox box = new SuggestBox(oracle);
        textBoxList.add(box);
        box.setWidth("200px");



        final TextBox amount = new TextBox();

        box.getTextBox().setName(EMAIL);
        box.getTextBox().setText(userEmail);

        box.getTextBox().addValueChangeHandler(new ValueChangeHandler<String>() {
            public void onValueChange(ValueChangeEvent<String> event) {
                if(!checkEmail(box)) {
                    //  Window.alert("invalid email");
                }

            }
        });


        amount.setName(AMOUNT);
        amount.setText("0");
        amountBoxList.add(amount);
        amount.addValueChangeHandler(new ValueChangeHandler<String>() {

            public void onValueChange(ValueChangeEvent<String> event) {
                if(!checkAmount(amount)) {
                    //  Window.alert("Invalid amount");
                }

            }
        });


        final HorizontalPanel hp = new HorizontalPanel();
        hp.add(box);
        hp.setSpacing(5);
        hp.add(amount);


        Anchor remove = new Anchor(" Remove");
        remove.setTitle("Remove");

        hp.add(remove);
        remove.addClickHandler(new ClickHandler() {

            public void onClick(ClickEvent event) {
                hp.removeFromParent();

                textBoxList.remove(box);
                amountBoxList.remove(amount);

                distributeTotal();
                if (amountBoxList.isEmpty()) {
                    addMoreDetails.setVisible(true);
                    anchor.removeFromParent();
                    button.removeFromParent();
                }
            }
        });

        return hp;
    }

    private native boolean isValidEmail(String email) /*-{ 
    var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid 
    var reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/; // valid 
    return !reg1.test(email) && reg2.test(email); 
}-*/; 

    private boolean checkEmail(SuggestBox box) {
        String str = box.getText();
        if (str.contains("<")) {
            int begin = str.indexOf("<");
            int end = str.indexOf(">");
            str = str.substring(begin + 1, end);
        }
        if (isValidEmail(str)) {
            box.setText(str);
            box.getElement().getStyle().setProperty("background-color", "white");
            return true;
        } else {
            box.getElement().getStyle().setProperty("background-color", "red");
            return false;
        }
    }

    private boolean checkAmount(TextBox box) {
        try {
            Double am = Double.valueOf(box.getText());
            if (am < 0.1) {
                box.getElement().getStyle().setProperty("background-color", "red");
                return false;
            }
            box.getElement().getStyle().setProperty("background-color", "white");
            return true;
        } catch (Exception e) {
            box.getElement().getStyle().setProperty("background-color", "red");
            return false;
        }
    }

    /*
    public void setContacts() {
        LoggedInUserFetcherAsync ownerEmailfetcher = GWT.create(LoggedInUserFetcher.class);
        ownerEmailfetcher.getOwnerEmail(new AsyncCallback<String>() {

            public void onFailure(Throwable caught) {
                Window.Location.replace("/logoutURL");
            }

            public void onSuccess(String result) {
                LogInInfoJSO info= LogInInfoJSO.asLogInInfoJSO(result);
                if (info.getLoginUrl().equals("")) {
                    oracle.addAll(info.getContactList());
                    setOracle(oracle);
                } else {
                    Window.open(info.getLoginUrl(),  "_self", "");
                }
            }
        });
    } */

    public void setContacts() {
        GetUserContactsAsync userContactfetcher = GWT.create(GetUserContacts.class);
        userContactfetcher.getUserContacts(new AsyncCallback<List<String>>() {

            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }

            public void onSuccess(List<String> result) {
                oracle.addAll(result);
                setOracle(oracle);
            }
        });
    }
}
