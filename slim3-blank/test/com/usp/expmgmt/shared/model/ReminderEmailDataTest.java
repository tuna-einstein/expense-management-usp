package com.usp.expmgmt.shared.model;

import org.slim3.tester.AppEngineTestCase;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class ReminderEmailDataTest extends AppEngineTestCase {

    private ReminderEmailData model = new ReminderEmailData();

    @Test
    public void test() throws Exception {
        assertThat(model, is(notNullValue()));
    }
}
