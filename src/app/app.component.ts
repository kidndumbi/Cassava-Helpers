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
    
    let modalref = this.modalDialgRef.open(MyModalComponent, {slice: 'good openeing modal'}, {
      closeOnBackgroundClick:true,
      roundedEdges:false
    });

    modalref.onClose().subscribe(data => {
       console.log(data);
    });

  }

}
