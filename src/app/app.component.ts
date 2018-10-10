import { MyModalComponent } from './my-modal/my-modal.component';
import { CasModalService, ModalSettings } from 'cassava-helpers';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cassava-helpers-app';


  constructor(private modalDialgRef: CasModalService) {}

  closeModal() {

  }

  openModal() {
    this.modalDialgRef.open(MyModalComponent, {slice: 'good'}, {
      closeOnBackgroundClick:true,
      roundedEdges:false
  });

  }

}
