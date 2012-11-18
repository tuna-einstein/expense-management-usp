package com.usp.expmgmt.shared.util;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.Expose;

public class LogInInfo {
    @Expose 
    private String email ;
    @Expose 
    private String loginUrl ;
    @Expose 
    private String logoutUrl ;
    @Expose
    private List<ContactInfo> contacts;
    public LogInInfo() {
        email ="";
        loginUrl = "";
        logoutUrl = "";
        setContacts(new ArrayList<ContactInfo>());
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getLoginUrl() {
        return loginUrl;
    }
    public void setLoginUrl(String loginUrl) {
        this.loginUrl = loginUrl;
    }
    public String getLogoutUrl() {
        return logoutUrl;
    }
    public void setLogoutUrl(String logoutUrl) {
        this.logoutUrl = logoutUrl;
    }
    public List<ContactInfo> getContacts() {
        return contacts;
    }
    public void setContacts(List<ContactInfo> contacts) {
        this.contacts = contacts;
    }
}
