package com.usp.expmgmt.server.controller.tasks;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;
import org.slim3.datastore.Datastore;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Transaction;
import com.usp.expmgmt.server.meta.ExpenseReportMeta;
import com.usp.expmgmt.server.meta.OneToOneRecordMeta;
import com.usp.expmgmt.server.meta.UserInfoMeta;
import com.usp.expmgmt.shared.model.ExpenseReport;
import com.usp.expmgmt.shared.model.OneToOneRecord;
import com.usp.expmgmt.shared.model.UserInfo;
import com.usp.expmgmt.shared.util.ServerSideUtil;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer;
import com.usp.expmgmt.shared.util.UserMapperAmountReducer.UserAndAmount;

public class UpdateOneToOneAccountController extends Controller {

    @Override
    public Navigation run() throws Exception {
        String email = request.getParameter("email");
        if (email == null || email.equals("")) {
            return null;
        }
        ExpenseReportMeta reportMeta = ExpenseReportMeta.get();
        List<ExpenseReport> claims = Datastore.query(reportMeta)
                .filter(reportMeta.ownerEmail.equal(email))
                .asList();
        List<UserAndAmount> userAndAmounts = UserMapperAmountReducer.mapReducerForClaims(claims);
        Key parentKey = ServerSideUtil.getParentKey(email);
        List<OneToOneRecord> oneToOneRecords = new ArrayList<OneToOneRecord>();
        for (UserAndAmount userAndAmount : userAndAmounts) {
            OneToOneRecord record = ServerSideUtil.getRecord(email, userAndAmount.getEmail(), parentKey);
            record.setAmount(userAndAmount.getAmount());
            oneToOneRecords.add(record);
        }
        Transaction tx = Datastore.beginTransaction();
        Datastore.put(oneToOneRecords);
        tx.commit();
        return null;
    }
}
