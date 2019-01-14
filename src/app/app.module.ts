import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BoardService } from './services/board.service';
import { TaskService } from './services/task.service';
import { TaskDetailService } from './services/task-detail.service';
import { ArchiveService } from './services/archive.service';
import { OptionsService } from './services/options.service';
import { SearchService } from './services/search.service';

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
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BoardService,
    TaskService,
    TaskDetailService,
    ArchiveService,
    OptionsService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
