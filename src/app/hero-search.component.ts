import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroe-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService, private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    gotoDetail(hero: Hero): void {
      this.router.navigate(['/detail', hero.id]);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
          .debounceTime(50)        // wait 300ms after each keystroke before considering the term
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.heroService.search(term)
            // or the observable of empty heroes if there was no search term
            : Observable.of<Hero[]>([]))
          .catch(error => {
            // TODO: add real error handling
            console.log(error);
            return Observable.of<Hero[]>([]);
          });
    }

}
