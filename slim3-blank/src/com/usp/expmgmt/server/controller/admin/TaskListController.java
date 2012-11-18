package com.usp.expmgmt.server.controller.admin;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;

public class TaskListController extends Controller {

    @Override
    public Navigation run() throws Exception {
        return forward("/admin.TaskList.jsp");
    }
}
