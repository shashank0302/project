import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Top10Service } from '../top10.service';

@Component({
  selector: 'app-top10-details',
  templateUrl: './top10-details.component.html',
  styleUrls: ['./top10-details.component.css']
})
export class Top10DetailsComponent implements OnInit {
  req:any
  objid:any
  display:any
  constructor(private data:ActivatedRoute,private dsObj:Top10Service) { }

  ngOnInit() {
  
    this.req=this.dsObj.getdata()
    this.objid=this.dsObj.getid()
    this.display=this.req[this.objid-1]
  }
  
  

}
