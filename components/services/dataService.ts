import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {

  // Class constructor with Jsonp injected
  constructor(public http: Http) {
  console.log("in data service const")}
  // let _ = this;
   res = {};

  // Base URL for Petfinder API
  // private url = "https://www.quandl.com/api/v3/datasets/EOD/BA.json?api_key=UUNtsJFG5beZanhcAzzx&start_date=2016-05-31";

   private url:string[]=["https://www.quandl.com/api/v3/datasets/EOD/BA.json?api_key=UUNtsJFG5beZanhcAzzx&start_date=2016-05-31",
                          "https://www.quandl.com/api/v3/datasets/EOD/CSCO.json?api_key=UUNtsJFG5beZanhcAzzx&start_date=2016-05-31",
                          "https://www.quandl.com/api/v3/datasets/EOD/MSFT.json?api_key=UUNtsJFG5beZanhcAzzx&start_date=2016-05-31"
                        ];

  response= {
    dataset: {
      name: "none!",
      data: [],
      column_names: []
    }
  };
  getComments(id : string) {
      let returnData = function(res:Response){
        return res.json()
      };

       // ...using get request
       return this.http.get(this.url[id])
                      // ...and calling .json() on the response to return data
                       .map(returnData)
                       //...errors if any
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }

  returnDataById() {
    return this.http.get(this.url)
            // .map(response => {
            //
            //   console.log(response.json());
            //   return  response.json()
            // });
    // this.http.get(this.url)
    //   .subscribe(
    //     response => {
    //       res = response.json()
    //     },
    //     error => this.response = error.text(),
    //     () =>{
    //     //	this.response = res
    //          this.formatTable(res)
    //            this.plotResponse=[
    //              res.dataset.data.map((x,i)=>[i,x[1]]),
    //              res.dataset.data.map((x,i)=>[i,x[2]])
    //            ]
    //         }
    //   );
  }
  formatTable(res){
  this.response.dataset.data = res.dataset.data.map((x)=>[x[1],x[2], x[3],x[4],x[5]])
  this.response.dataset.column_names=[res.dataset.column_names[1],res.dataset.column_names[2],res.dataset.column_names[3],res.dataset.column_names[4],res.dataset.column_names[5]]
  return this.response
  }
 }
