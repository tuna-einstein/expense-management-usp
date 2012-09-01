package com.usp.expmgmt.server.controller;

import javax.servlet.http.HttpServletRequest;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.util.RequestLocator;

import com.usp.expmgmt.shared.util.ServerSideUtil;

public class LoginController extends Controller {
   
    @Override
    public Navigation run() throws Exception {
        HttpServletRequest request = RequestLocator.get();
        String ownerEmail = ServerSideUtil.getOwnerEmail();
        
        
        if (ownerEmail == null) {
            ServerSideUtil.redirectToLoginPage();
            return null;
        }
        request.getSession().setAttribute("ownerEmail", ownerEmail);
        return forward("/login.html");
    }
}
