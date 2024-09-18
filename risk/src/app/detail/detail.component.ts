import { Component } from '@angular/core';
import { Company } from '../models/company.model';
import { SINGLECOMPANY } from '../data/company.data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
})

export class DetailComponent  {
  company: Company = SINGLECOMPANY;

}
