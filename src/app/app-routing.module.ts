import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { OptionsComponent } from './components/options/options.component';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'board', component: BoardComponent},
  {path: 'task', component: TaskComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'task-detail/:code', component: TaskDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
