import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  materials: any;
  materialCounts: any;

  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getMaterials()
  }

  getMaterials()
  {
    this.apiAdminService.getMaterials().subscribe(
      response => this.materials = response
    )
  }

  view(id)
  {
    console.log(id)
    this.getMaterialsCountAvailable(id) 
    document.getElementById("openModel").click();
  }

  getMaterialsCountAvailable(materialId)
  {
    this.apiAdminService.getMaterialsCountAvailableService(materialId).subscribe(
      response => this.materialCounts = response
    )
  }

}
