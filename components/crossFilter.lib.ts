// export interface Hero {
//   id: number;
//   name: string;
//   detail: string;
// }
@Injectable()
export class CrossFilter {
  constructor(
    public id:number,
    public name:string,
    public detail: string
  ) { }
}


dataTable = function(data){
  var _ = function(x){
    var res;
    // var n = arguments.length;
    switch (typeof(x)) {
      case "string":  res = _[x]; break;
      case "object":  res = _.getRows(x); break;
      case "number":  res = _.getRow(x); break;
      case "function":res = x(_);break;
      default:        res = data; break;
    }
    return res
  };  data.map((x,i) => _[i]=x);
  _["name"]      = "dataTable";
  _["ncol"]      = data.length;
  _["nrow"]      = data[0].length;
  _["getRow"]    = row  => data.map(col => col[row]),
  _["getRows"]   = rows => rows.map(_.getRow)
  _["transpose"] = () => dataTable(data[0].map((x,i) => data.map(x => x[i])));
  _["sortBy"]    = (col) => {
    decreasing = false;
    f_compare = decreasing? (a,b) => a[0]-b[0] :(a,b) => b[0] - a[0];
    var order = data[col].map((x,i) => [x,i]).sort(f_compare);
    // this.rows = order.map(x => this.rows[x[1]]);
    return dataTable(data.map(a => order.map(x => a[x[1]])));
  }
  return _
}

obj = new dataTable(this.data)
obj([1])

obj(`x==${x}, y:= a + b`)




var handler = {
  get: function(){
    return arguments;
  },
  set: function(){
    return arguments;
  }
};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
