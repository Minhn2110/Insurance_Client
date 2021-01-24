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

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'numberPlate', 'partnerCode', 'partnerName', 'status', 'actions'];

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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.loading$ = true;
    this.appService.getClaimList('', 1, 5, 'desc').subscribe((res) => {
      console.log('res', res);
      if (res && res.data.length > 0 ) {
        const data = res.data;
        this.dataSource = new MatTableDataSource(res.data);
        console.log('this datasoource', this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.length = res.data.length;
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

  // openDialog(id ?: any): void {
  //   console.log('code', id);
  //   if (id) {
  //       console.log('id', id);
  //       const dialogRef = this.dialog.open(ClaimInfoComponent, {
  //         data: {
  //           id: id
  //         }
  //       });
    
  //       dialogRef.afterClosed().subscribe(result => {
  //         console.log('The dialog was closed', result);

  //       });
  //   } else {
  //     const dialogRef = this.dialog.open(ClaimInfoComponent,
  //       {
  //         data: {
  //           code: null
  //         }
  //       });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed', result);
  //     });
  //   }

  // }
}
