package com.usp.expmgmt.server.controller;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;
import org.slim3.util.RequestLocator;
import org.slim3.util.ResponseLocator;
import org.slim3.util.ServletContextLocator;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gdata.client.authn.oauth.GoogleOAuthHelper;
import com.google.gdata.client.authn.oauth.GoogleOAuthParameters;
import com.google.gdata.client.authn.oauth.OAuthException;
import com.google.gdata.client.authn.oauth.OAuthHmacSha1Signer;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.server.meta.GoogleLoginInfoMeta;
import com.usp.expmgmt.shared.model.GoogleLoginInfo;

public class LoginController extends Controller {
    
    public static String CONSUMER_KEY = "usp0000.appspot.com";
    public static String CONSUMER_SECRET = "4wWDFCgyLlk3Sfpfou_7ml68";

    @Override
    public Navigation run() throws Exception {
        HttpServletRequest request = RequestLocator.get();
        HttpServletResponse response = ResponseLocator.get();
        String ownerEmail = getOwnerEmail();
        if (ownerEmail == null) {
            UserService userService = UserServiceFactory.getUserService();
            response.sendRedirect(userService.createLoginURL("/login"));
        }
        
        GoogleLoginInfoMeta loginMeta = GoogleLoginInfoMeta.get();
        List<GoogleLoginInfo> list =Datastore.query(loginMeta)
                .filter(loginMeta.ownerEmail.equal(ownerEmail))
                .asList();
        
        if (!list.isEmpty()) {
            request.getSession().setAttribute("GoogleLoginInfo", list.get(0));
            return forward("/login.html");
        }
        
        request.getSession().setAttribute("ownerEmail", ownerEmail);
        GoogleOAuthParameters oauthParameters = new GoogleOAuthParameters();
        oauthParameters.setOAuthConsumerKey(CONSUMER_KEY);
        oauthParameters.setOAuthConsumerSecret(CONSUMER_SECRET);
        
     // Set the scope. In general, we want to limit the scope as much as 
        // possible. For this example, we just ask for access to all feeds.
        // oauthParameters.setScope("https://docs.google.com/feeds/");
        oauthParameters.setScope("http://www.google.com/m8/feeds/contacts/default/full");

        // This sets the callback URL. This is where we want the user to be 
        // sent after they have granted us access. Sometimes, developers 
        // generate different URLs based on the environment. You should set 
        // this value to "http://localhost:8888/step2" if you are running 
        // the development server locally.
        oauthParameters.setOAuthCallback("http://usp0000.appspot.com/oauthCallbackForContactAccess");

        GoogleOAuthHelper oauthHelper = new GoogleOAuthHelper(
                new OAuthHmacSha1Signer());

        try {
            // Remember that your request token is still unauthorized. We 
            // need to first get a unique token for the user to promote.
            oauthHelper.getUnauthorizedRequestToken(oauthParameters);

            // Generate the authorization URL
            String approvalPageUrl = oauthHelper
                    .createUserAuthorizationUrl(oauthParameters);

            // Store the token secret in the session. We use this later after 
            // the user grants access. Note that this method isn't foolproof
            //  or even close. This assumes the user won't sign out of their 
            // browser or the sessions are swept between the time the user 
            // is redirected and the callback is invoked. 
            request.getSession().setAttribute("oauthTokenSecret",
                    oauthParameters.getOAuthTokenSecret());
           

//            response.getWriter()
//            .print("<a href=\""
//                    + approvalPageUrl
//                    + "\">Request token for Google contacts Scope</a>");
            response.sendRedirect(approvalPageUrl);
//            return forward(approvalPageUrl);
        } catch (OAuthException e) {
            response.getWriter().print("OAuth Error");
            // We probably want to do something about this error
        }
        
//        UserService userService = UserServiceFactory.getUserService();
//        String thisURL = request.getRequestURI();
//       // return forward(userService.createLoginURL(thisURL));
//        if (request.getUserPrincipal() != null) {
//            servletContext.setAttribute("ownerEmail", request.getUserPrincipal().getName());
//            return forward("/");
//        }
//        else {
//            response.getWriter().println("<p>Please <a href=\"" +
//                                     userService.createLoginURL(thisURL) +
//                                     "\">sign in</a>.</p>");
//        }
      return null;
    }
    
    private String getOwnerEmail() {
        HttpServletRequest request = RequestLocator.get();
        if (request.getUserPrincipal() != null) {
            String ownerEmail = request.getUserPrincipal().getName();
            if (ownerEmail.contains("@")) {
            return ownerEmail;
            }
        }
        return null;
    }
}
