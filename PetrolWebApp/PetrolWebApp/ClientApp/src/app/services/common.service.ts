
import { Injectable , Output,EventEmitter} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
@Injectable()
export class CommonService {
  private api_url: any = 'http://localhost:50504';

  constructor(private http: HttpClient) { }
  public GetDevicesList(){
    return this.http.post(this.api_url + "/api/maintainence/deviceslist2", null, { responseType: 'text' })
    }

    public GetDevicesInventoryList(){
      return this.http.post(this.api_url + "/api/maintainence/devicesinventory", null, { responseType: 'text' })
      }

      public GetDispatchList(){
        return this.http.post(this.api_url + "/api/maintainence/dispatchlist", null, { responseType: 'text' })
        }
}
