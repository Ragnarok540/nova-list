import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArchiveComponent } from './archive.component';
import { TaskItemComponent } from '../shared/task-item/task-item.component';
import { StateChangeModalComponent } from '../shared/state-change-modal/state-change-modal.component';
import { DeleteModalComponent } from '../shared/delete-modal/delete-modal.component';
import { EditModalComponent } from '../shared/edit-modal/edit-modal.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { BoardComponent } from '../board/board.component';
import { TaskComponent } from '../task/task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { OptionsComponent } from '../options/options.component';
import { SearchComponent } from '../search/search.component';
import { PriorityPipe } from '../../pipes/priority.pipe';
import { StatePipe } from '../../pipes/state.pipe';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ArchiveComponent,
        TaskItemComponent,
        StateChangeModalComponent,
        DeleteModalComponent,
        EditModalComponent,
        HomeComponent,
        AboutComponent,
        BoardComponent,
        TaskComponent,
        TaskDetailComponent,
        OptionsComponent,
        SearchComponent,
        PriorityPipe,
        StatePipe
      ],
     imports: [
       AppRoutingModule,
       HttpClientModule,
       FormsModule
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
