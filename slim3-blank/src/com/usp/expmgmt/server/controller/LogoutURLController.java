package com.usp.expmgmt.server.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.util.RequestLocator;
import org.slim3.util.ResponseLocator;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class LogoutURLController extends Controller {

    @Override
    public Navigation run() throws Exception {
        HttpServletRequest request = RequestLocator.get();
        UserService userService = UserServiceFactory.getUserService();
        String logoutFromGmail = (String) request.getSession().getAttribute("logoutFromGmail");
        String logoutUrl = "/";
        if (logoutFromGmail != null ) {
            logoutUrl = userService.createLogoutURL("/");
        }
        logoutUrl = userService.createLogoutURL("/");
        request.getSession().invalidate();
        HttpServletResponse response = ResponseLocator.get();
        response.sendRedirect(logoutUrl);
        return null;
    }
}
