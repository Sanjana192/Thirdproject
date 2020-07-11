import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'India',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'UK',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Sri Lanka',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Russia',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'New Zealand',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Australia',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Austria',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Algeria',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Argentina',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Malaysia',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Mexico',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'Finland',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'France',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'Ethiopia',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Russia',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Romania',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Philippines',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Chile',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Norway',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DecimalPipe]
})
export class TableComponent {

  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}
