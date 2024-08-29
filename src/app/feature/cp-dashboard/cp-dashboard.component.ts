import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cp-dashboard',
  templateUrl: './cp-dashboard.component.html',
  styleUrls: ['./cp-dashboard.component.scss']
})
export class CpDashboardComponent {
  data: any;
  data2: any;
  options: any;
  items: MenuItem[] = [{ label: 'Početna' }];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        labels: [
            '0 - Nosioci budžet',
            '1 - DBK',
            '2 - IBK',
            '6 - Drugi KJS',
            '7 - Ostali KJS',
            '9 - OOSO',
            '10 - Korisnici RFZO',
            ],
        datasets: [
            {
                data: [	1.93, 10.50, 71.07,  0.42, 12.69, 0.04, 3.35],
                backgroundColor: [
                  documentStyle.getPropertyValue('--red-500'),
                  documentStyle.getPropertyValue('--red-900'),
                  documentStyle.getPropertyValue('--blue-500'),
                  documentStyle.getPropertyValue('--yellow-500'),
                  documentStyle.getPropertyValue('--green-500'),
                  documentStyle.getPropertyValue('--pink-500'),
                  documentStyle.getPropertyValue('--teal-500')
                  ],
                hoverBackgroundColor: [
                  documentStyle.getPropertyValue('--red-400'),
                  documentStyle.getPropertyValue('--red-800'),
                  documentStyle.getPropertyValue('--blue-400'),
                  documentStyle.getPropertyValue('--yellow-400'),
                  documentStyle.getPropertyValue('--green-400'),
                  documentStyle.getPropertyValue('--pink-400'),
                  documentStyle.getPropertyValue('--teal-400')
                ]
            }
        ]
    };

    this.data2 = {
        labels: [
            'Edukacija - Osnovna sredstva',
            'Edukacija - Direktori OŠ i srednjih škola',
            'Edukacija - SPIRI sistem budžeta',
            'Edukacija - eARHIV i digitalizacija',
            'Edukacija - Finansijsko upravljanje i kontrola',
            ],
        datasets: [
            {
                data: [5.26, 21.05, 38.60, 26.32, 8.77],
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--red-900'),
                    documentStyle.getPropertyValue('--blue-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--green-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--red-400'),
                    documentStyle.getPropertyValue('--red-800'),
                    documentStyle.getPropertyValue('--blue-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--green-500')
                ]
            }
        ]
    };

    this.options = {
        cutout: '0%',
        plugins: {
          legend: {
            position: 'left',
            labels: {
                    color: textColor,
                }
          }
        },
        layout: {
            left: 150,
        },

        responsive: true,
        maintainAspectRatio: false,
      }

}

}
