package com.usp.expmgmt.server.controller.tasks;

import java.util.Iterator;
import java.util.logging.Logger;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import com.usp.expmgmt.shared.model.UserInfo;

public class ScheduleOneToOneAccountUpdateController extends Controller {
    private static final Logger log = Logger.getLogger(UpdateExpenseReportParentKeyController.class.getName());
    @Override
    public Navigation run() throws Exception {
        Iterator<UserInfo> users = Datastore.query(UserInfo.class)
                .asIterator();
        Queue queue = QueueFactory.getDefaultQueue(); while (users.hasNext()) {
            String email = users.next().getEmail();
            queue.add(TaskOptions.Builder
                .withUrl("/tasks/updateOneToOneAccount")
                .param("email", email));
            log.info("UpdateOneToOneAccount claims for : " + email);
        }
        return  null;
    }
}
