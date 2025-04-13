#clients

ng g c clients/new-client &&
ng g c clients/list-client &&
ng g c clients/edit-client &&
ng g c clients/components/client-form &&
ng g c clients/components/client-table &&

touch src/app/clients/client.models.ts &&

#schedules
ng g c schedules/schedules-month &&
ng g c schedules/components/schedules-calendar &&

touch src/app/schedules/schedules.models.ts &&

#commons components

ng g c commons/components/card-header &&
ng g c commons/components/menu-bar &&
ng g c commons/components/yes-no-dialog &&

#service
ng g c services/dialog-manager &&
ng g c services/snackbar-manager &&
ng g c services/api-client/clients/clients &&
ng g c services/api-client/schedules/schedules &&

touch src/app/services/dialog-manager.service.ts &&
touch src/app/services/snackbar-manager.service.ts &&
touch src/app/services/service.token.ts &&

touch src/app/services/api-client/schedules/schedules.service.ts &&
touch src/app/services/api-client/schedules/schedules.model.ts &&

npm install @angular/cdk bootstrap ngx-mask