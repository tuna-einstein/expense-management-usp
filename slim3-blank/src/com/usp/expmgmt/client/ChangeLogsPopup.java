package com.usp.expmgmt.client;

import com.google.gwt.core.client.JsArray;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.PopupPanel;
import com.usp.expmgmt.shared.jso.JavaScriptObjects.ChangeLogMessageJSO;

public class ChangeLogsPopup extends PopupPanel {
        Grid grid;
        public  ChangeLogsPopup()
        {
            super(true);
        }
       public void init(String json) {
        JsArray<ChangeLogMessageJSO> reports = ChangeLogMessageJSO.asArrayOfChangeLogMessageJSO(json);
        grid = new Grid(reports.length() + 1, 4);

        grid.setWidget(0, 0, new HTML("<b>Actor Name"));
        grid.setWidget(0, 1, new HTML("<b>Date"));
        grid.setWidget(0, 2, new HTML("<b>Changes Made"));
        grid.setWidget(0, 3, new HTML("<b>Log Message"));

        for (int i = 0; i < reports.length() ; i++) {
            addToGrid(reports.get(i), i + 1);
        }
        
        add(grid);
        }
 
    private void addToGrid(ChangeLogMessageJSO report, int row) {
        grid.setText(row, 0, report.getActorName());
        grid.setText(row, 1, "(" + report.getDate() + ")");
        grid.setWidget(row, 2, new HTML(report.getChangeMessage()));
        grid.setText(row, 3, report.getLogMessage());
    }
}
