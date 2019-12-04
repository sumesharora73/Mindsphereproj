import { Component, OnInit } from '@angular/core';
import { DatamService } from '../datam.service';
declare var $:any;
@Component({
  selector: 'app-machinethree',
  templateUrl: './machinethree.component.html',
  styleUrls: ['./machinethree.component.css']
})
export class MachinethreeComponent implements OnInit {

  public filtered:Object[];
  public datas = [];
 
  public errorMsg;

  constructor(private _datamservice:DatamService ) { }

  ngOnInit() {

    

    this._datamservice.getdata().subscribe ( data => {
      this.datas = data
           error => this.errorMsg = error; 
  });
 }
      

  public pieChartLabels:string[] = ["Idle Time", "Production Auto", "Setting Time", "Emergancy", "MDA","Breakdown Time","Break Time","Job_Load/Unload"];
  public pieChartData:Number[] = [27.5,16.6,15.7,35.1,1.1,0.8,3.3,0.0];
  public pieChartType:string = 'pie';
  public pieChartColors = [
    {
      backgroundColor: [' #1569C7','#C11B17','#728C00','#6960EC','#4EE2EC','#FFA62F','#15317E'],
    },
  ];
  // events on slice click
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels = ["Idle Time", "Production Auto", "Setting Time", "Emergancy", "MDA","Breakdown Time","Break Time","Job_Load/Unload"];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartColors = [
    {
      backgroundColor: [' #1569C7',' #1569C7',' #1569C7',' #1569C7',' #1569C7',' #1569C7',' #1569C7',' #1569C7'],
    },
  ];
  public barChartData = [
    {data: [27.5,16.6,15.7,35.1,1.1,0.8,3.3,0.0], label: 'Series A'}
   
  ];

  downloadCanvas(event) {
    var anchor = event.target;
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    anchor.download = "test.png";
  }

  downloadCanvaspdf(event) {
    var anchor = event.target;
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    anchor.download = "test.pdf";
  }

  downloadCanvasbar(event) {
    var anchor = event.target;
    
    anchor.href = document.getElementsByTagName('canvas')[1].toDataURL();
    anchor.download = "test.png";
  }

}