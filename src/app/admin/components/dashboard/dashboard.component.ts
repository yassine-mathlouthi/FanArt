import { Component, AfterViewInit, ViewChild, inject } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../../layout/components/header/header.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../../../layout/components/footer/footer.component';

export interface Artisan {
  idArtisan: number;
  nom: string;
  prenom: string;
  adresseBoutique: string;
  numeroTelephone: string;
  dateInscription: string;
  nomBoutique: string;
  descriptionBoutique: string;
  InstagramUrl: string;
}

const ARTISAN_DATA: Artisan[] = [
  {
    idArtisan: 1,
    nom: 'Doe',
    prenom: 'John',
    adresseBoutique: '123 Main St',
    numeroTelephone: '555-1234',
    dateInscription: '2024-11-28',
    nomBoutique: 'John’s Crafts',
    descriptionBoutique: 'Handmade wooden crafts.',
    InstagramUrl: 'https://instagram.com/johnscrafts',
  },
  {
    idArtisan: 2,
    nom: 'Smith',
    prenom: 'Jane',
    adresseBoutique: '456 Side St',
    numeroTelephone: '555-5678',
    dateInscription: '2024-10-15',
    nomBoutique: 'Jane’s Jewelry',
    descriptionBoutique: 'Custom-made jewelry.',
    InstagramUrl: 'https://instagram.com/janesjewelry',
  },
  {
    idArtisan: 1,
    nom: 'Doe',
    prenom: 'John',
    adresseBoutique: '123 Main St',
    numeroTelephone: '555-1234',
    dateInscription: '2024-11-28',
    nomBoutique: 'John’s Crafts',
    descriptionBoutique: 'Handmade wooden crafts.',
    InstagramUrl: 'https://instagram.com/johnscrafts',
  },
  {
    idArtisan: 1,
    nom: 'Doe',
    prenom: 'John',
    adresseBoutique: '123 Main St',
    numeroTelephone: '555-1234',
    dateInscription: '2024-11-28',
    nomBoutique: 'John’s Crafts',
    descriptionBoutique: 'Handmade wooden crafts.',
    InstagramUrl: 'https://instagram.com/johnscrafts',
  },
  {
    idArtisan: 1,
    nom: 'Doe',
    prenom: 'John',
    adresseBoutique: '123 Main St',
    numeroTelephone: '555-1234',
    dateInscription: '2024-11-28',
    nomBoutique: 'John’s Crafts',
    descriptionBoutique: 'Handmade wooden crafts.',
    InstagramUrl: 'https://instagram.com/johnscrafts',
  },
];

@Component({
  selector: 'app-dashboard',
  standalone: true , 
  imports: [MatTableModule, MatSortModule,HeaderComponent,BaseChartDirective,MatButtonModule,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['idArtisan', 'nom', 'prenom', 'adresseBoutique', 'numeroTelephone', 'dateInscription', 'nomBoutique', 'actions'];
  dataSource = new MatTableDataSource(ARTISAN_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  deleteRow(idArtisan: number) {
    this.dataSource.data = this.dataSource.data.filter((artisan) => artisan.idArtisan !== idArtisan);
  }
  public chartType: ChartType = 'line'; // Explicitly use the ChartType type.

  // Chart Data
  public chartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 50, 40, 60, 70],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Specify a valid position: 'top', 'left', 'right', 'bottom'.
      },
    },
  };
}
