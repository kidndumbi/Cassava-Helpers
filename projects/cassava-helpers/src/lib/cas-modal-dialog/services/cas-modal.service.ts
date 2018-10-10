import { Injectable, Inject } from '@angular/core';
import { DomService } from './dom.service';
import { ModalDATA } from './modal-data';
import { Subject, Observable } from 'rxjs';
import { ModalCssService } from './modal-css.service';
import { DOCUMENT } from '@angular/common';
import { take } from 'rxjs/operators';

@Injectable()
export class CasModalService {

  body: HTMLElement;
  container: HTMLDivElement;

  modal: HTMLDivElement;
  modalContainer: HTMLDivElement;
  modalOpenBtn: HTMLButtonElement;
  modalCloseBtn: HTMLButtonElement;



  overlay: HTMLDivElement;
  dataFromParent: any;
  closeBtn: HTMLAnchorElement;

  constructor(private domService: DomService,
    @Inject(ModalDATA) private modal_data,
    private modalCss: ModalCssService,
    @Inject(DOCUMENT) private doc) {

    this.body = this.doc.body;

    this.newAnimatedModal();

  }

  private modalElementId = 'cassava-modal-container_KAA_CHUCK';
  private overlayElementId = 'cassava-overlay_KAA_CHUCK';
  private closeBtnClass = 'cas-close-modal-1951';

  private dataFromModal: Subject<any> = new Subject<any>();
  private $dataFromModal: Observable<any> = this.dataFromModal.asObservable();

  private settings: ModalSettings;


  open(component: any, data: any, settings: ModalSettings) {

    this.settings = {
      closeOnBackgroundClick: settings.closeOnBackgroundClick || true,
      roundedEdges: settings.roundedEdges === true ? true : false,
      background: settings.background || 'white',
      showCloseButton: (settings.showCloseButton == null) ? true : settings.showCloseButton
    }


    this.createContainerAndOverlay();

    //assign data from parent to modal
    //this data can be accessed by importing  MODAL_DATA service to injected component
    this.modal_data.data = data;

    //data will also be able to be accessed from this service.
    this.dataFromParent = data;

    //parent data and settings to be sent modal. not being used at this moment
    let componentConfig = {
      data,
      settings
    }

    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);

    this.overlay.addEventListener('click', () => {

      if (this.settings.closeOnBackgroundClick) {
        this.close(null);
      }

    });

    return this;

  }

  close(data: any) {

    this.domService.removeComponent();
    //this.container.classList.remove('cassava-modal-container_KAA_CHUCK_arrive-end');
    this.body.removeChild(this.container);
    this.body.removeChild(this.overlay);

    this.dataFromModal.next(data);

  }

  onClose() {
    return this.$dataFromModal.pipe(
      take(1)
    );
  }

  newAnimatedModal() {

    this.modalOpenBtn = this.doc.createElement('button');
    this.modalOpenBtn.id = 'modalBtn';
    this.modalOpenBtn.textContent = 'open modal'

    this.modal = this.doc.createElement('div');
    this.modal.id = 'simpleModal';
    this.modal.classList.add('modal');

    this.modalContainer = this.doc.createElement('div');
    this.modalContainer.classList.add('modal-content');


    this.modalCloseBtn = this.doc.createElement('button');
    this.modalCloseBtn.id = 'closeModal';
    this.modalCloseBtn.textContent = 'Close';
    this.modalContainer.innerHTML = '<p>THis is a modal...</p>'

    this.modalContainer.appendChild(this.modalCloseBtn);


    this.modal.appendChild(this.modalContainer);

    this.body.appendChild(this.modalOpenBtn)
    this.body.appendChild(this.modal);

    this.modalOpenBtn.addEventListener('click', () => {
      this.modal.style.display = 'block';
    });

    this.modalCloseBtn.addEventListener('click', () => {
      this.modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target == this.modal) {
        this.modal.style.display = 'none';
      }
    });

  }

  createContainerAndOverlay() {

    this.container = this.doc.createElement('div');
    this.container.id = this.modalElementId;
    this.container.classList.add('cassava-modal-container_KAA_CHUCK_arrive-start');

    setTimeout(() => {
      this.container.classList.add('cassava-modal-container_KAA_CHUCK_arrive-end');
    }, 0);


    if (this.settings.showCloseButton == true) {
      this.createCloseButton(this.container);
      this.setCloseBtnEventListener();
    }

    this.modalCss.addContainerstyles(this.container, this.settings);
    this.body.appendChild(this.container);
    this.overlay = this.doc.createElement('div');
    this.overlay.id = this.overlayElementId;
    this.modalCss.addOverlayStyles(this.overlay);
    this.body.appendChild(this.overlay);

  }



  getdata(): any {
    return this.dataFromParent;
  }

  createCloseButton(container: HTMLDivElement) {
    this.closeBtn = this.doc.createElement('a');
    this.closeBtn.setAttribute('class', this.closeBtnClass);
    this.closeBtn.innerHTML = "X";
    container.appendChild(this.closeBtn);
  }

  setCloseBtnEventListener() {

    this.closeBtn.addEventListener('click', () => {
      this.close(null);
    });

  }
}

export interface ModalSettings {
  closeOnBackgroundClick?: boolean;
  roundedEdges?: boolean;
  background?: string;
  showCloseButton?: boolean;
}
