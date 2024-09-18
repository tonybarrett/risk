import { Component } from '@angular/core';
import { Company } from '../models/company.model';
import { COMPANIES } from '../data/company.data';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  companies: Array<Company> = COMPANIES;
}
