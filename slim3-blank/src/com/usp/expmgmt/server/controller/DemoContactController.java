package com.usp.expmgmt.server.controller;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.util.RequestLocator;
import org.slim3.util.ResponseLocator;

import com.google.gdata.client.Query;
import com.google.gdata.client.authn.oauth.GoogleOAuthParameters;
import com.google.gdata.client.authn.oauth.OAuthException;
import com.google.gdata.client.authn.oauth.OAuthHmacSha1Signer;
import com.google.gdata.client.contacts.ContactsService;
import com.google.gdata.data.contacts.ContactEntry;
import com.google.gdata.data.contacts.ContactFeed;
import com.google.gdata.util.ServiceException;
public class DemoContactController extends Controller {

 // Note the repetition here - see my comments in step1
    static String CONSUMER_KEY = "usp0000.appspot.com";
    static String CONSUMER_SECRET = "4wWDFCgyLlk3Sfpfou_7ml68";
    
    @Override
    public Navigation run() throws Exception {
        
        HttpServletRequest req = RequestLocator.get();
        HttpServletResponse resp = ResponseLocator.get();
        // Now that we have all the OAuth parameters we need, we can
        // generate an access token and access token secret. These
        // are the values we want to keep around, as they are 
        // valid for all API calls in the future until a user revokes
        // our access.
        
        String accessToken = (String) req.getSession().getAttribute("accessToken");
        
        String accessTokenSecret = (String) req.getSession().getAttribute(
                "accessTokenSecret");

        // In a real application, we want to redirect the user to a new
        // servlet that makes API calls. For the safe of clarity and simplicity,
        // we'll just reuse this servlet for making API calls.
        GoogleOAuthParameters oauthParameters = new GoogleOAuthParameters();
        oauthParameters.setOAuthConsumerKey(CONSUMER_KEY);
        oauthParameters.setOAuthConsumerSecret(CONSUMER_SECRET);

        // This is interesting: we set the OAuth token and the token secret
        // to the values extracted by oauthHelper earlier. These values are
        // already in scope in this example code, but they can be populated
        // from reading from the datastore or some other persistence mechanism.
        oauthParameters.setOAuthToken(accessToken);
        oauthParameters.setOAuthTokenSecret(accessTokenSecret);
        
        ContactsService contactsService = new ContactsService("OAuthTest");
        contactsService.setOAuthCredentials(oauthParameters, new OAuthHmacSha1Signer());
        
        URL feedUrl = new URL("http://www.google.com/m8/feeds/contacts/default/full");
        Query myQuery = new Query(feedUrl);
        myQuery.setMaxResults(1000);
        ContactFeed resultFeed = contactsService.getFeed(myQuery, ContactFeed.class);
      
        for (ContactEntry entry : resultFeed.getEntries()) {
           resp.getWriter().write(entry.toString());
            }
   
      
        return null;
    }
}
