package com.usp.expmgmt.shared.model;

import org.slim3.tester.AppEngineTestCase;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class ChangeLogMessageTest extends AppEngineTestCase {

    private ChangeLogMessage model = new ChangeLogMessage();

    @Test
    public void test() throws Exception {
        assertThat(model, is(notNullValue()));
    }
}
