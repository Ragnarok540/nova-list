import { Component, OnInit } from '@angular/core';
import { Options } from '../../interfaces/options';
import { Router } from '@angular/router';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  order : Options = {
    option_name: null,
    option_value: null
  }

  constructor( private optionsService:OptionsService,
               private router:Router ) { }

  ngOnInit() {

    this.optionsService.getOption( 'order' ).subscribe( order => {
      this.order = order;
    });

  }

  updateOption( option : Options ) {

    this.optionsService.updateOption( option ).subscribe( option => {
      this.router.navigate(['/board']);
    });

  }

}
