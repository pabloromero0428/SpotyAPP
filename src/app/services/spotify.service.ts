import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Listo');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQARgEzhZ04fJ7y2K4ta6Jx4Jc9uwgUITAuxyq4Uj8AAyH90RkmdsyKiQN2J8GIC0_HoNRF_qCP5eRq8PC0'
    });

    return this.http.get(url, {headers});

  }

  getNewRelease() {
    // const headers = new HttpHeaders({
    //   Authorization : 'Bearer BQDrAf3QSriEKE8CrnqPlW4LbnTChL7mFUsFP84BGhKJy1eFIT7ny0t98PHq3rXg9MU7OYU6ZNQ_PJwiu9Q'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe( map( data => {
    //   // tslint:disable-next-line: no-string-literal
    //   return data['albums'].items;
    // }));

    return this.getQuery('browse/new-releases').pipe( map( data => {
        // tslint:disable-next-line: no-string-literal
         return data['albums'].items;
        }));

  }

  getArtista(termino: string) {

    // const headers = new HttpHeaders({
    //   Authorization : 'Bearer BQDrAf3QSriEKE8CrnqPlW4LbnTChL7mFUsFP84BGhKJy1eFIT7ny0t98PHq3rXg9MU7OYU6ZNQ_PJwiu9Q'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    // .pipe(map( data => {
    //    // tslint:disable-next-line: no-string-literal
    //    return data['artists'].items;
    // }));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data => {
      // tslint:disable-next-line: no-string-literal
      return data['artists'].items;
      }));

  }
}
