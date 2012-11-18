package com.usp.expmgmt.server.service;

import com.usp.expmgmt.client.service.GetLoggedInUserEmail;
import com.usp.expmgmt.shared.util.ServerSideUtil;

public class GetLoggedInUserEmailImpl implements GetLoggedInUserEmail {

    public String getLoggedInUserEmail() {
        String ownerEmail = ServerSideUtil.getOwnerEmail();
        if (ownerEmail == null) {
            return ServerSideUtil.getGoogleLoginUrl();
        }
        return ownerEmail;
    }

}
