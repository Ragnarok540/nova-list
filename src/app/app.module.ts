import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { TaskService } from './services/task.service';
import { OptionsService } from './services/options.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { OptionsComponent } from './components/options/options.component';
import { SearchComponent } from './components/search/search.component';
import { TaskItemComponent } from './components/shared/task-item/task-item.component';
import { StateChangeModalComponent } from './components/shared/state-change-modal/state-change-modal.component';
import { DeleteModalComponent } from './components/shared/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/shared/edit-modal/edit-modal.component';

import { PriorityPipe } from './pipes/priority.pipe';
import { StatePipe } from './pipes/state.pipe';

import { OcticonDirective } from './directives/octicon.directive';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BoardComponent,
    TaskComponent,
    FooterComponent,
    TaskDetailComponent,
    ArchiveComponent,
    OptionsComponent,
    SearchComponent,
    TaskItemComponent,
    StateChangeModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    PriorityPipe,
    StatePipe,
    OcticonDirective,
    UnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
