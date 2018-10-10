import { Injectable, Inject } from '@angular/core';
import { DomService } from './dom.service';
import { ModalDATA } from './modal-data';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CasModalService {

  constructor(private domService: DomService, @Inject(ModalDATA) private modal_data) {


  }

  private modalElementId = 'cassava-modal-container';
  private overlayElementId = 'cassava-overlay';

  private dataFromModal: Subject<any> = new Subject<any>();
  private $dataFromModal: Observable<any> = this.dataFromModal.asObservable();

  private settings: ModalSettings = {
    closeOnBackgroundClick: true,
    width: null,
    height: null
  };


  open(component: any, data: any, settings: ModalSettings) {

    this.createContainerAndOverlay();

    this.settings = settings;

    this.modal_data.data = data;

    const componentConfig = {
      data,
      settings
    };

    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);

    document.getElementById(this.modalElementId).style.display = 'block';
    document.getElementById(this.overlayElementId).style.display = 'block';

    document.getElementById(this.overlayElementId).addEventListener('click', () => {

      if (this.settings.closeOnBackgroundClick) {
        this.close(null);
      }

    });

  }

  close(data: any) {

    this.domService.removeComponent();
    document.getElementById(this.modalElementId).style.display = 'block';
    document.getElementById(this.overlayElementId).style.display = 'block';

    document.body.removeChild(document.getElementById(this.modalElementId));
    document.body.removeChild(document.getElementById(this.overlayElementId));



    this.dataFromModal.next(data);

  }

  onClose() {
    return this.$dataFromModal;
  }

  createContainerAndOverlay() {
    const container: HTMLDivElement = document.createElement('div');
    container.id = this.modalElementId;
    container.style.position = 'fixed';
    container.style.top = '300px';
    container.style.left = '50%';
    container.style.width = '375px';
    container.style.background = 'white';
    container.style.marginLeft = '-187.5px';
    container.style.textAlign = 'center';
    container.style.boxShadow = '0px 0px 2px 1px black';
    container.style.zIndex = '100';
    container.style.display = 'none';
    container.style.borderRadius = '6px';



    document.body.appendChild(container);

    const overlay: HTMLDivElement = document.createElement('div');
    overlay.id = this.overlayElementId;
    overlay.style.position = 'absolute';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.zIndex = '99';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.display = 'none';

    document.body.appendChild(overlay);


  }
}

export interface ModalSettings {
  width?: string;
  height?: string;
  closeOnBackgroundClick?: boolean;
}
