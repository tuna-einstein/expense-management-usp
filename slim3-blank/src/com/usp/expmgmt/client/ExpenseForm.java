package com.usp.expmgmt.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
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
    
    public ExpenseForm() {
        this.anchor = new Anchor("Add More");
        this.verticalPanel = new VerticalPanel();
        this.oracle = new MultiWordSuggestOracle();
        this.button = new Button("Submit");
        this.dateBox = new DateBox();
        this.ownerEmail = new TextBox();
        this.ownerEmail.setName("ownerEmail");
        dateBox.setValue(new Date());
        dateBox.getTextBox().setName("date");
        this.descriptionText = new TextArea();
        descriptionText.setCharacterWidth(40);
        descriptionText.setVisibleLines(4);
        descriptionText.setName("description");
    }

    /**
     * arranges the components on the form
     */
    public ExpenseForm init(String email) {
        // Autofill for logged in user
        verticalPanel.add(new Label("Owner Email: "));
        ownerEmail.setText(email);
        ownerEmail.setReadOnly(true);
        
        verticalPanel.add(ownerEmail);
        
        // Add expense description
        verticalPanel.add(new Label("Expense Description: "));
        verticalPanel.add(descriptionText);
        
        // Add date of expense
        verticalPanel.add(new Label("Date: "));
        verticalPanel.add(dateBox);
        
        verticalPanel.add(new Label("Total Amount"));
        HorizontalPanel hpForTotal = new HorizontalPanel();
        hpForTotal.add(totalAmount);
        Anchor distributeAnchor = new Anchor("Distribute");
        hpForTotal.add(distributeAnchor);
        verticalPanel.add(hpForTotal);
        
        HorizontalPanel hp = new HorizontalPanel();
        hp.add(new HTML("<b>Email....................."));
        hp.add(new HTML("<b>Amount"));
        verticalPanel.add(hp);
        
        distributeAnchor.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                Double tamount= 0.0;
                try {
                tamount = Double.valueOf(totalAmount.getText());
                tamount = tamount / amountBoxList.size();
                } catch (Exception e) {
                    
                }
                
                for (TextBox box : amountBoxList) {
                    box.setText(tamount.toString());
                }
            }
        });
        
        // Add textbox for email and Amount
         verticalPanel.add(anchor);
         verticalPanel.add(button);
         
         // add the verticalPanel to form
         this.setWidget(verticalPanel);
         
         // Add action destination
         setAction("/save_expense");
         
         anchor.addClickHandler(new ClickHandler() {
             public void onClick(ClickEvent event) {
                 verticalPanel.add(getEmailAndAmount());
                 verticalPanel.add(anchor);
                 verticalPanel.add(button);
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
               
                init(ownerEmail.getText());
            }
            
            public void onSubmit(FormSubmitEvent event) {
               for (SuggestBox box : textBoxList) {
                   String str = box.getText();
                   if (str.contains("<")) {
                       int begin = str.indexOf("<");
                       int end = str.indexOf(">");
                       str = str.substring(begin + 1, end);
                       box.setText(str);
                   }
               }
                 // TODO Auto-generated method stub
                
            }
        });
         
         return this;
    }
 
    public void setOracle(MultiWordSuggestOracle oracle) {
        this.oracle = oracle;
    }
    private HorizontalPanel getEmailAndAmount() {
        SuggestBox box = new SuggestBox(oracle);
        textBoxList.add(box);
        TextBox amount = new TextBox();
        box.getTextBox().setName(EMAIL);
        box.getTextBox().setText("");
        amount.setName(AMOUNT);
        amount.setText("0.00");
        amountBoxList.add(amount);
        
        final HorizontalPanel hp = new HorizontalPanel();
        hp.add(box);
        hp.add(amount);
        
        
       Anchor remove = new Anchor( "Remove");
       
        hp.add(remove);
        remove.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                hp.removeFromParent();
            }
        });
        
        return hp;
    }
 }
