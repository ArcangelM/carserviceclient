import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
     return this.http.get(this.OWNER_API);
  }

  get(id: string) {
    return this.http.get(this.OWNER_API + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car.href) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.OWNER_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
  removeAssociation(ownerId: string) {
    this.getAll().subscribe(data => {
      for (const car of data) {
        if (ownerId === car.ownerDni) {
          const newCar = {...car, ownerDni: null};
          this.save(newCar).pipe(take(1)).subscribe();
        }
      }
    });
  }
}

