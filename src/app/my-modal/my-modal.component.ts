import { Component, OnInit } from '@angular/core';
import { CasModalService } from 'cassava-helpers';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {

  constructor(private casModal: CasModalService) { 
    console.log(this.casModal.getdata());
  }

  ngOnInit() {


  }

  close(){
    this.casModal.close({dta: 'closing modal'});
  }

}
