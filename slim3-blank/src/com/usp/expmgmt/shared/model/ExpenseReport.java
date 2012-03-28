package com.usp.expmgmt.shared.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

import org.slim3.datastore.Attribute;
import org.slim3.datastore.Model;

@Model(schemaVersion = 1)
public class ExpenseReport implements Serializable {

    private static final long serialVersionUID = 1L;

    @Attribute(primaryKey = true)
    private Key key;

    @Attribute(version = true)
    private Long version;

    @Attribute(persistent = false)
    private String[] emailArray;

   @Attribute(persistent = false)
    private String[] amountArray;
    
    private List<String> emailList;
    
    private List<Double> amountList;
    
    private String ownerEmail = "noEmail";
    
    private String description = "no description";
    
    private String date = "12th Jan, 2014";
    
    /**
     * Returns the key.
     *
     * @return the key
     */
    public Key getKey() {
        return key;
    }

    /**
     * Sets the key.
     *
     * @param key
     *            the key
     */
    public void setKey(Key key) {
        this.key = key;
    }

    /**
     * Returns the version.
     *
     * @return the version
     */
    public Long getVersion() {
        return version;
    }

    /**
     * Sets the version.
     *
     * @param version
     *            the version
     */
    public void setVersion(Long version) {
        this.version = version;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((key == null) ? 0 : key.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        ExpenseReport other = (ExpenseReport) obj;
        if (key == null) {
            if (other.key != null) {
                return false;
            }
        } else if (!key.equals(other.key)) {
            return false;
        }
        return true;
    }

    public String[] getEmailArray() {
        return emailArray;
    }

    public void setEmailArray(String[] emailArray) {
        this.emailArray = emailArray;
        this.emailList = Arrays.asList(emailArray);
    }

    public String[] getAmountArray() {
        return amountArray;
    }

    public void setAmountArray(String[] amountArray) {
        this.amountArray = amountArray;
        this.amountList = new ArrayList<Double>(amountArray.length);  
        for (int i = 0; i < amountArray.length; i++) {  
           this.amountList.add(Double.valueOf(amountArray[i]));  
        }  
    }

    public List<String> getEmailList() {
        return emailList;
    }

    public void setEmailList(List<String> emailList) {
        if (emailList != null) {
            this.emailList = emailList;
        }
    }

    public List<Double> getAmountList() {
        return amountList;
    }

    public void setAmountList(List<Double> amountList) {
        if (amountList != null) {
            this.amountList = amountList;
        }
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    
    private String getEmail(String str) {
        if (!str.contains("<")) {
            return str;
        }
        int begin = str.indexOf("<");
        int end = str.indexOf(">");
        return str.substring(begin + 1, end);
    }
}
