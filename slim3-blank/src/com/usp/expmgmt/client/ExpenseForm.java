package com.usp.expmgmt.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
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
    }

    private void distributeTotal() {
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

    /**
     * arranges the components on the form
     */
    public ExpenseForm init(String email) {
        // Autofill for logged in user
        ownerEmail.setText(email);
        ownerEmail.setReadOnly(true);
        
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
        
        HorizontalPanel hp1 = new HorizontalPanel();
        hp1.add(new HTML("<b>Email........................................."));
        hp1.add(new HTML("<b>Amount"));
        verticalPanel.add(hp1);
        
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
                 verticalPanel.add(new HTML(" "));
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
            
             private native boolean isValidEmail(String email) /*-{ 
             var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid 
             var reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/; // valid 
             return !reg1.test(email) && reg2.test(email); 
     }-*/; 
             
            public void onSubmitComplete(FormSubmitCompleteEvent event) {
                
                descriptionText.setText("");
                Window.alert(event.getResults());
               while (verticalPanel.getWidgetCount() != 0) {
                   verticalPanel.remove(0);
               }
               
                init(ownerEmail.getText());
            }
            
            private boolean checkDuplicacy() {
                int length = textBoxList.size();
                for (int i = 0; i < length ; i++ ) {
                    String parent = textBoxList.get(i).getText();
                    for (int j= i + 1; j< length ; j++) {
                        if (parent.equals(textBoxList.get(j).getText())) {
                          Window.alert("Duplicates :" + parent);
                          return true;
                        }
                    }
                }
                return false;
            }
            
            public void onSubmit(FormSubmitEvent event) {
               for (SuggestBox box : textBoxList) {
                   String str = box.getText();
                   if (str.contains("<")) {
                       int begin = str.indexOf("<");
                       int end = str.indexOf(">");
                       str = str.substring(begin + 1, end);
                       
                   }
                   if (isValidEmail(str)) {
                   box.setText(str);
                   } else {
                       Window.alert("Invalid email:" + str);
                       event.setCancelled(true);
                   }
               }
               
               // Check amount boxes
               for (TextBox box : amountBoxList) {
                   try {
                       Double.valueOf(box.getText());
                   } catch (Exception e) {
                       Window.alert("Invalid amount:" + box.getText());
                       event.setCancelled(true);
                   }
               }
               
               if(descriptionText.getText().length() > 100) {
                   Window.alert("Description length can't be more than 100 characters");
                   event.setCancelled(true);
               }
               
               if (checkDuplicacy()) {
                   event.setCancelled(true);
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
        final SuggestBox box = new SuggestBox(oracle);
              textBoxList.add(box);
              box.setWidth("200px");
              
        final TextBox amount = new TextBox();
        box.getTextBox().setName(EMAIL);
        box.getTextBox().setText("");
        amount.setName(AMOUNT);
        amount.setText("0.00");
        amountBoxList.add(amount);
        
        final HorizontalPanel hp = new HorizontalPanel();
        hp.add(box);
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
            }
        });
        
        return hp;
    }
 }
