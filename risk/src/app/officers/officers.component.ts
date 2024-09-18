import { Component } from '@angular/core';
import { Officer } from '../models/officer.model';
import { OFFICERS } from '../data/officers.data';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})

export class OfficersComponent {
  companyName: string = 'BBC Limited';
  companyNumber: string = '06500244';
  officers: Array<Officer> = OFFICERS;
}
