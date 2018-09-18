
import { Injectable , Output,EventEmitter} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import {devicecls} from '../maintainence/devices/devicecls';
@Injectable()


export class CommonService {
  private api_url: any = 'http://localhost:50624';

  constructor(private http: HttpClient) { }
  public GetDevicesList(){
    return this.http.post(this.api_url + "/api/maintainence/deviceslist", null, { responseType: 'text' })
    }

    public AddDevices(frm:devicecls){
      return this.http.post(this.api_url + "/api/maintainence/adddevices", frm, { responseType: 'text' })
      }

      public UpdateDevices(frm:devicecls){
        return this.http.post(this.api_url + "/api/maintainence/updatedevices", frm, { responseType: 'text' })
        }

        public DeleteDevices(frm:devicecls){
          console.log(frm);
          return this.http.post(this.api_url + "/api/maintainence/deldevices", frm, { responseType: 'text' })
          }

          
        public GetDeviceTypesList(){
          
          return this.http.post(this.api_url + "/api/maintainence/devicetypeslist", null, { responseType: 'text' })
          }
          
          public GetOrganizationList(){
          
            return this.http.post(this.api_url + "/api/maintainence/organizationlist", null, { responseType: 'text' })
            }
        

    public GetDevicesInventoryList(){
      return this.http.post(this.api_url + "/api/maintainence/devicesinventory", null, { responseType: 'text' })
      }

      public GetDispatchList(){
        return this.http.post(this.api_url + "/api/maintainence/dispatchlist", null, { responseType: 'text' })
        }

        public GetDeviceTypes(){
          return this.http.post(this.api_url + "/api/maintainence/devicetypes", null, { responseType: 'text' })
          }
}
