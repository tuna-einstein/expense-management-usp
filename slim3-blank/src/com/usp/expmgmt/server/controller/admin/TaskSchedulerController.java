package com.usp.expmgmt.server.controller.admin;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskHandle;
import com.google.appengine.api.taskqueue.TaskOptions;

public class TaskSchedulerController extends Controller {

    @Override
    public Navigation run() throws Exception {
        String taskUrl = (String) request.getParameter("taskUrl");
        response.setContentType("text/html");
        if (taskUrl == null && taskUrl.equals("")) {
            response.getWriter().print("taskUrl is empty");
            response.getWriter().flush();
            return null;
        }
        Queue queue = QueueFactory.getDefaultQueue();
        TaskHandle handle = queue.add(TaskOptions.Builder.withUrl(taskUrl));
        response.getWriter().print(handle.getName() + " is scheduled in queue:" + handle.getQueueName());
        return null;
    }
}
