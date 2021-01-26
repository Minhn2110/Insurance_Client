import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.scss']
})
export class ClaimListComponent implements OnInit {

  constructor(private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    ) { }

  displayedColumns = ['id', 'name', 'numberPlate', 'partnerCode', 'partnerName', 'status'];

  displayedColumnsBinding = [
    { matColumnDef: 'id', header: 'Id' },
    { matColumnDef: 'name', header: 'First Name' },
    { matColumnDef: 'numberPlate', header: 'Last Name' },
    { matColumnDef: 'partnerCode', header: 'Username' },
    { matColumnDef: 'partnerName', header: 'Phone Number' },
    // { matColumnDef: 'status', header: 'Email' },
    // { matColumnDef: 'address', header: 'Address' },
  ];

  length: number;
  loading$:boolean;
  pageIndex: any; 
  pageSize:any;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {read: true, static: false}) paginator: MatPaginator;
  ngOnInit() {
    this.pageIndex = 1;
    this.pageSize = 5;
    this.getData();
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.appService.getClaimList('', this.pageIndex, this.pageSize, 'desc').subscribe((res) => {
      console.log('res', res);
      if (res && res.data.length > 0 ) {
        const data = res.data;
        this.dataSource = new MatTableDataSource(res.data);
        console.log('this datasoource', this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.length = res.totalItems;
        this.loading$ = false;
      } 
    })
  }

  
  getItemCssClassByStatus(status: any): string {
		switch (status) {
			case 'Approved':
				return 'success';
			case 'Pending':
				return 'metal';
		}
		return '';
  }
  
  editClaim(id) {
    // this.openDialog(id)
  }

  onPaginate(event) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getData();
    console.log(event);
  }
}
