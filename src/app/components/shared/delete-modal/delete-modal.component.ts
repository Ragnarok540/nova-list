import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArchiveService } from '../../../services/archive.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() code : number;

  constructor( private router:Router,
               private archiveService:ArchiveService ) { }

  ngOnInit() {
  }

  deleteTask( code:number ) {

    this.archiveService.deleteTask( code ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
