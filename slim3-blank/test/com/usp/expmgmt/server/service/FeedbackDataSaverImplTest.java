package com.usp.expmgmt.server.service;

import org.slim3.tester.ServletTestCase;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class FeedbackDataSaverImplTest extends ServletTestCase {

    private FeedbackDataSaverImpl service = new FeedbackDataSaverImpl();

    @Test
    public void test() throws Exception {
        assertThat(service, is(notNullValue()));
    }
}
