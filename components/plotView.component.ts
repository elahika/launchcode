import{Component, OnInit, Input, OnChanges} from '@angular/core'
import {DataService} from './services/dataService.ts'

@Component({
  selector: 'my-plotView',
  templateUrl: 'components/templates/plotView.html',
   providers: [DataService]
})

export class PlotViewComponent implements OnChanges {
  data={}
  @Input() id;
  constructor(private dataService: DataService){
    let _ = this
    readFile("data/my-line-chart-config.json",
              config => {_.config = config})
  }
//   ngOnInit() {
//    // Pass retreived pets to the property
//    let _ = this;
//
//
//    this.dataService.getComments(_.id)
//                          .subscribe(
//                              comments =>{
//
//                               _.data = comments
//                             }, //Bind to view
//                               err => {
//                                   // Log errors if any
//                                   console.log(err);
//                               },
//                               () => _.showPlot()
//                             );
//   // this.data = this.dataService.returnDataById();
// //   this.data.subscribe(value => console.log(value))
//    console.log("in plot view");
//
//
//  }
 ngOnChanges(changes: {[ propName: string]: SimpleChange}) {
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
                              () => _.showPlot()
                            );
 }

  showPlot(){
    let _=this
    let plotResponse=[
                _.data.dataset.data.map((x,i)=>[i,x[1]]),
                _.data.dataset.data.map((x,i)=>[i,x[2]])
              ]
    $.plot($("#plotView-container"),plotResponse ,    _.config )
  }


}
