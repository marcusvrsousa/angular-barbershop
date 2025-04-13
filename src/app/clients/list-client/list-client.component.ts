import { Component, Inject } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclient.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-list-client',
  imports: [],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss',
  providers: [
      {provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService}
    ]
})
export class ListClientComponent {
  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService){}

}
