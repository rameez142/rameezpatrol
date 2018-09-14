import { Component, OnInit ,ViewChild} from '@angular/core';
import { CommonService } from '../../services/common.service';
import { DxDataGridComponent } from "../../../../node_modules/devextreme-angular"
import notify from '../../../../node_modules/devextreme/ui/notify';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  loadingVisible = false;

  constructor(private svc:CommonService) {
    this.showLoadPanel();
   }
   onShown() {
    setTimeout(() => {
        this.loadingVisible = false;
    }, 3000);
  }
  
  showLoadPanel() {
    this.loadingVisible = true;
  }
  dataSource: any;
 
  ngOnInit() {

    this.LoadData();
  }

LoadData()
{
  this.svc.GetDevicesList().subscribe(resp => 
    {
       
       this.dataSource = JSON.parse(resp);
      console.log('resp' + resp);
      this.dataGrid.dataSource = this.dataSource;
      this.dataGrid.instance.refresh();

  },
    error => {
       
    });
}
onToolbarPreparing(e) {
  e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'Organization'
  }, {
          location: 'before',
          widget: 'dxSelectBox',
          options: {
              width: 200,
              items: [{
                  value: 'Org1',
                  text: 'Grouping by Org1'
              }, {
                  value: 'Org2',
                  text: 'Grouping by Org2'
              }],
              displayExpr: 'text',
              valueExpr: 'value',
              value: 'CustomerStoreState',
              onValueChanged: this.groupChanged.bind(this)
          }
      }, {
          location: 'after',
          widget: 'dxButton',
          options: {
              icon: 'refresh',
              onClick: this.refreshDataGrid.bind(this)
          }
      });
}

groupChanged(e) {
  this.dataGrid.instance.clearGrouping();
  this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
}



refreshDataGrid() {
  this.dataGrid.instance.refresh();
}

}
