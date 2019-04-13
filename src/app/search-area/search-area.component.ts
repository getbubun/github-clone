import { Component, OnInit } from '@angular/core';
import { CompleterService, RemoteData } from 'ng2-completer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {
  searchStr: string;

  dataService: RemoteData;

  constructor(
    private completerService: CompleterService,
    private router: Router
  ) {
    this.dataService = completerService.remote(null, 'login', 'login');
    this.dataService.urlFormater((term: any) => {
      return `https://api.github.com/search/users?q=${term}&per_page=5`;
    });
    this.dataService.dataField('items');
  }

  ngOnInit() {}
  search() {
    // console.log(this.searchStr);
    if (this.searchStr === '' || this.searchStr.length < 2) {
      alert('Enter More than 3 characters');
    } else {
      this.router.navigate(['/search', this.searchStr]);
    }
  }
}
