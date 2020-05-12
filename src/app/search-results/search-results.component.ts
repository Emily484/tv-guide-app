import { Component, OnInit } from '@angular/core';
import { ISearchresults } from '../isearchresults';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  search: ISearchresults
  constructor() {
    this.search = {
      show: 'Girls',
      premiered: new Date (),
      episodes: 62,
      description: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.',
      image: 'Show Image'

    }
  }


  ngOnInit(): void {
  }

}
