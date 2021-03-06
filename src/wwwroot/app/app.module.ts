import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { IndividualsComponent }      from './individuals.component';
import { IndividualDetailComponent }  from './individual-detail.component';
import { OrganisationsComponent }      from './organisations.component';
import { OrganisationDetailComponent }  from './organisation-detail.component';
import { CrewsComponent }      from './crews.component';
import { CrewDetailComponent }  from '././crew-detail.component';
import { DepartmentsComponent }      from './departments.component';
import { DepartmentDetailComponent }  from '././department-detail.component';
import { WorkPlacesComponent }      from './workplaces.component';
import { WorkPlaceDetailComponent }  from './workplace-detail.component';
import { GenericService }          from './generic.service';
// import { IndividualSearchComponent }  from './individual-search.component';
import { routing }              from './app.routing';
import { FileUploadModule } from 'ng2-file-upload/';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FileUploadModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    IndividualDetailComponent,
    IndividualsComponent,
    OrganisationDetailComponent,
    OrganisationsComponent,
    CrewDetailComponent,
    CrewsComponent,
    DepartmentDetailComponent,
    DepartmentsComponent,
    WorkPlaceDetailComponent,
    WorkPlacesComponent
  ],
  providers: [
    GenericService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
