import { Component, OnInit } from '@angular/core';
import {dataService} from '../data.service';
import {Input} from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DataGridComponent implements OnInit {
  fullData:any;
  data:any;
  @Input() enableFilter = true;
  query = "";
  filteredList;

  cityList = [ { city_name: "Bandung", prov_name: "Jawa Barat" },
               { city_name: "Jakarta", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Semarang", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "Bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor(private _dataService:dataService) { }

  ngOnInit() {
    console.log("City Component Init");
    this.getData();
  }

  getData(){
    this._dataService.getData().subscribe(res =>{
      this.fullData = JSON.parse(res['_body']);
      this.data = JSON.parse(res['_body']);
    })
  }

  filter(){
    let filteredData = [];
    this.fullData.forEach(element =>{
      if(element.name.toLowerCase().indexOf(this.query.toLowerCase())>-1){
          filteredData.push(element);
      }
    });
    this.data = filteredData;
  }
}
