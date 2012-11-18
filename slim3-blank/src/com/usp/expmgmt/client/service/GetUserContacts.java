package com.usp.expmgmt.client.service;

import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("service.s3gwt")
public interface GetUserContacts extends RemoteService {
    public List<String> getUserContacts();
}
