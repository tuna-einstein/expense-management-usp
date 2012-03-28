package com.usp.expmgmt.shared.util;

import com.google.gson.annotations.Expose;

/**
 * Contains contacts information of a user
 * Add more fields as per requirement
 * 
 */
public class ContactInfo {
    @Expose
    private String firstName;
    @Expose
    private String lastName;
    @Expose
    private String email;
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

}
