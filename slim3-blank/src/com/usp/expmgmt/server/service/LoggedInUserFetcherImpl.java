package com.usp.expmgmt.server.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slim3.util.RequestLocator;
import org.slim3.util.ResponseLocator;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gdata.client.Query;
import com.google.gdata.client.authn.oauth.GoogleOAuthParameters;
import com.google.gdata.client.authn.oauth.OAuthException;
import com.google.gdata.client.authn.oauth.OAuthHmacSha1Signer;
import com.google.gdata.client.contacts.ContactsService;
import com.google.gdata.data.contacts.ContactEntry;
import com.google.gdata.data.contacts.ContactFeed;
import com.google.gdata.util.ServiceException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.usp.expmgmt.client.service.LoggedInUserFetcher;
import com.usp.expmgmt.shared.model.GoogleLoginInfo;
import com.usp.expmgmt.shared.util.ContactInfo;
import com.usp.expmgmt.shared.util.LogInInfo;

public class LoggedInUserFetcherImpl implements LoggedInUserFetcher {

    // Note the repetition here - see my comments in step1
    static String CONSUMER_KEY = "usp0000.appspot.com";
    static String CONSUMER_SECRET = "4wWDFCgyLlk3Sfpfou_7ml68";

    public String getOwnerEmail() {
        HttpServletRequest request = RequestLocator.get();
        LogInInfo info = new LogInInfo();
        UserService userService = UserServiceFactory.getUserService();
        GoogleLoginInfo googleLoginInfo = (GoogleLoginInfo) request.getSession().getAttribute(
            "GoogleLoginInfo");
        if (googleLoginInfo == null) {
            info.setLoginUrl(userService.createLoginURL("/login.html"));
        } else {

            info.setEmail(googleLoginInfo.getOwnerEmail());

            info.setContacts(getContacts(googleLoginInfo.getAccessToken(),
                googleLoginInfo.getAccessTokenSecrete()));
        }

        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return "(" + gson.toJson(info) +")";
    }
    
    public String getLoggedInUserEmail() {
        HttpServletRequest request = RequestLocator.get();
        LogInInfo info = new LogInInfo();
        UserService userService = UserServiceFactory.getUserService();
        GoogleLoginInfo googleLoginInfo = (GoogleLoginInfo) request.getSession().getAttribute(
            "GoogleLoginInfo");
        if (googleLoginInfo == null) {
            info.setLoginUrl(userService.createLoginURL("/login"));
        } else {

            info.setEmail(googleLoginInfo.getOwnerEmail());
            info.setLogoutUrl(userService.createLogoutURL("/"));
        }

        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.excludeFieldsWithoutExposeAnnotation();
        Gson gson = gsonBuilder.create();
        return "(" + gson.toJson(info) +")";
    }
    
    private List<ContactInfo> getContacts(String accessToken, String accessTokenSecret) {

        // Now that we have all the OAuth parameters we need, we can
        // generate an access token and access token secret. These
        // are the values we want to keep around, as they are 
        // valid for all API calls in the future until a user revokes
        // our access.

        //  String accessToken = (String) req.getSession().getAttribute("accessToken");

        //  String accessTokenSecret = (String) req.getSession().getAttribute(
        //        "accessTokenSecret");

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
        List<ContactInfo> contacts = new ArrayList();
        try {
            contactsService.setOAuthCredentials(oauthParameters, new OAuthHmacSha1Signer());

            URL feedUrl = new URL("http://www.google.com/m8/feeds/contacts/default/full");
            Query myQuery = new Query(feedUrl);
            myQuery.setMaxResults(1000);
            ContactFeed resultFeed = contactsService.getFeed(myQuery, ContactFeed.class);
            for (ContactEntry entry : resultFeed.getEntries()) {
                ContactInfo ent = buildFrom(entry);
                if (ent != null) {
                    contacts.add(ent);
                }
            }


        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (OAuthException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ServiceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return contacts;
    }

    public static ContactInfo buildFrom(ContactEntry entry) {
        ContactInfo cetd= new ContactInfo();
        if (entry.hasEmailAddresses()) {
            cetd.setEmail(entry.getEmailAddresses().get(0).getAddress());

            if (entry.hasName() && entry.getName().hasFamilyName()) {
                cetd.setLastName(entry.getName().getFamilyName().getValue());
            }

            if (entry.hasName() && entry.getName().hasGivenName()) {
                cetd.setFirstName(entry.getName().getGivenName().getValue());
            }
            return cetd;
        }
        return null;
    }
}
