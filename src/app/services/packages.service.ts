import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PackagesDto } from '../pages/packages/packagesDto';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private httpClient: HttpClient) { }
  ApibaseUrl = environment.url


  getAllPackages() {
    return this.httpClient.get<PackagesDto[]>(`${this.ApibaseUrl}/api/get_tracking_numbers`)
  }

  createPackage(packageData: any) {
    return this.httpClient.post(`${this.ApibaseUrl}/api/create_package`, packageData)
  }


  updatePackage(packageData: { packageTracking: any; }, tracking_number: string) {
    return this.httpClient.patch(`${this.ApibaseUrl}/api/update_package/${tracking_number}`, packageData)
  }

  sendMailService(mail: any) {
    return this.httpClient.post(`${this.ApibaseUrl}/api/mails/sendTrackMail`, mail)
  }

  gatMailsService() {
    return this.httpClient.get(`${this.ApibaseUrl}/api/mails/getTrackMails`)
  }
}
