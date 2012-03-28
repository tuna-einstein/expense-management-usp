package com.usp.expmgmt.server.controller;

import javax.servlet.http.HttpServletRequest;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.util.RequestLocator;

import com.google.gdata.client.authn.oauth.GoogleOAuthHelper;
import com.google.gdata.client.authn.oauth.GoogleOAuthParameters;
import com.google.gdata.client.authn.oauth.OAuthException;
import com.google.gdata.client.authn.oauth.OAuthHmacSha1Signer;

public class OauthCallbackForContactAccessController extends Controller {

    public static String CONSUMER_KEY = "usp0000.appspot.com";
    public static String CONSUMER_SECRET = "4wWDFCgyLlk3Sfpfou_7ml68";
    private static final String USER_INTERFACE_URI = "http://usp0000.appspot.com/index.html";
    @Override
    public Navigation run() throws Exception {
        GoogleOAuthParameters oauthParameters = new GoogleOAuthParameters();
        oauthParameters.setOAuthConsumerKey(CONSUMER_KEY);
        oauthParameters.setOAuthConsumerSecret(CONSUMER_SECRET);
        oauthParameters.setScope("http://www.google.com/m8/feeds/contacts/default/full");
        
        GoogleOAuthHelper oauthHelper = new GoogleOAuthHelper(
            new OAuthHmacSha1Signer());
        

        // Remember the token secret that we stashed? Let's get it back
        // now. We need to add it to oauthParameters
        HttpServletRequest req = RequestLocator.get(); 
        String oauthTokenSecret = (String) req.getSession().getAttribute(
                "oauthTokenSecret");
        oauthParameters.setOAuthTokenSecret(oauthTokenSecret);

        // The query string should contain the oauth token, so we can just
        // pass the query string to our helper object to correctly
        // parse and add the parameters to our instance of oauthParameters
        oauthHelper.getOAuthParametersFromCallback(req.getQueryString(),
            oauthParameters);
        
        try {
            // Now that we have all the OAuth parameters we need, we can
            // generate an access token and access token secret. These
            // are the values we want to keep around, as they are 
            // valid for all API calls in the future until a user revokes
            // our access.
            req.getSession().setAttribute("accessToken", oauthHelper.getAccessToken(oauthParameters));
            req.getSession().setAttribute("accessTokenSecret", oauthParameters.getOAuthTokenSecret());
            
        } catch (OAuthException e) {
            // Something went wrong. Usually, you'll end up here if we have invalid
            // oauth tokens
        } 
        return forward("/");
      //  return forward(USER_INTERFACE_URI);
    }
}
