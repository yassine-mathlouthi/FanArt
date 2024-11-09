import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements AfterViewInit, OnInit {
  jobData: any;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  selectedData: any;
  dataSource: any; // Define dataSource here

  ngOnInit(): void {
    // Fetch job data
    this.http.get("http://127.0.0.1:3000/offre/All").subscribe(
        (jobData: any) => {
            // Fetch candidate data
            this.http.get("http://127.0.0.1:3000/postule/All").subscribe(
                (candidateData: any) => {
                    this.selectedData = candidateData.map((candidate: any) => {
                        // Find the job corresponding to the jobId
                        const job = jobData.find((job: { _id: any; }) => job._id === candidate.jobId);
                        // Add jobName property to the candidate object
                        candidate.jobName = job ? job.titre : 'Unknown';
                        return candidate;
                    });
                    this.dataSource = new MatTableDataSource(this.selectedData);
                    console.log("hne", this.dataSource);
                },
                (error) => {
                    console.log('Error fetching candidate data:', error);
                });
        },
        (error) => {
            console.log('Error fetching job data:', error);
        });
}




  displayedColumns: string[] = ['jobName','fullName', 'email', 'phoneNumber', 'resume', 'coverLetter','btn'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
  
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }













}
