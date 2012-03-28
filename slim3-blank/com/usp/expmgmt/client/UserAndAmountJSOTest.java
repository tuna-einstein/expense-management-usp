package com.usp.expmgmt.client;

import com.google.gwt.core.client.JsArray;
import com.google.gwt.junit.client.GWTTestCase;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.UserAndAmountJSO;

public class UserAndAmountJSOTest extends GWTTestCase {

    @Override
    public String getModuleName() {
        return "com.usp.expmgmt.main";
    }
    String json = "([{\"email\":\"hello@gmail.com\",\"amount\":5000.00}])";
    public void testAsArrayofExpenseReport() {
        JsArray<UserAndAmountJSO> array = UserAndAmountJSO.asArrayOfUserAndAmountJSO(json);
        assertEquals("hello@gmail.com", array.get(0).getEmail());
        assertEquals(5000.00, array.get(0).getAmount());
    }
}
