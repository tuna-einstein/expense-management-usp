package com.usp.expmgmt.shared.model;

import org.slim3.tester.AppEngineTestCase;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class TEstModelTest extends AppEngineTestCase {

    private TEstModel model = new TEstModel();

    @Test
    public void test() throws Exception {
        assertThat(model, is(notNullValue()));
    }
}
