import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getRandomNumber() : Observable<number> {
    return this.http.get<number[]>("https://www.randomnumberapi.com/api/v1.0/random")
      .pipe(
        map(response => response[0])
      );
  }
}
