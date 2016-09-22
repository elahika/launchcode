import {DataService} from './services/dataService.ts'
import { Component, OnInit, Input, OnChanges } from '@angular/core';



@Component({
  selector : 'my-tableView',
  styleUrl  :    'css/plugins/footable/footable.core.css',
  templateUrl : 'components/templates/tableView.html',
  // Providers
   providers: [DataService]
   // Directives

})

export class TableViewComponent implements OnChanges {
   @Input() id;
   data = {}
   constructor(private dataService: DataService){}
  //  ngOnInit() {
  //    let _ = this;
  //    this.dataService.getComments(_.id)
  //                        .subscribe(
  //                            comments =>{
  //
  //                             _.data = comments
  //                           }, //Bind to view
  //                             err => {
  //                                 // Log errors if any
  //                                 console.log(err);
  //                             },
  //                             () => _.generateTable()
  //                           );
  //  console.log("in table view");
  // }
  ngOnChanges(changes: {[ propName: string]: SimpleChange}) {
    console.log("in table view");
  console.log('Change detected:', changes.id.currentValue);
  let _ = this;
  this.dataService.getComments(_.id)
                      .subscribe(
                          comments =>{

                           _.data = comments
                         }, //Bind to view
                           err => {
                               // Log errors if any
                               console.log(err);
                           },
                           () => _.generateTable()
                         );
}

  generateTable() {
    var data1=this.data.dataset.data;
    data1=data1.map((x)=>[x[1],x[2], x[3],x[4],x[5]])
    var columns=[this.data.dataset.column_names[1],this.data.dataset.column_names[2],this.data.dataset.column_names[3],this.data.dataset.column_names[4],this.data.dataset.column_names[5]]
    var table = $('<table class="footable table table-stripped toggle-arrow-tiny"/>');
    var head = $('<thead />');
    var row = $('<tr />');
    for(var x in columns) {
        row.append(`<th>${columns[x]}</th>`);
    }
    head.append(row);
    table.append(head);
    table.append(`<tbody>`)

    // Add table body
    for (var y=0; y < data1.length; y++) {
        var cells = data1[y]
        var row = $('<tr />');
        for(var x in cells) {
            row.append('<td  width="150">'+cells[x]+'</td>');
        }
        table.append(row);
    }
    table.append(`  </tbody>
      <tfoot>
      <tr>
          <td colspan="6">
              <ul class="pagination pull-right"></ul>
          </td>
      </tr>
      </tfoot>`)

    // Insert into DOM
    $('#excel_table').html(table);
      $('.footable').footable();
  }
}
