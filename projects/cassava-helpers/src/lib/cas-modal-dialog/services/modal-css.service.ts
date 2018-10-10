import { Injectable, Inject } from '@angular/core';
import { ModalSettings } from './cas-modal.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ModalCssService {

  body: HTMLElement;
  styleTag: HTMLStyleElement;

  constructor(@Inject(DOCUMENT) private doc) { 
      this.body = this.doc.body;
      this.styleTag = this.doc.createElement('style');

      console.log(this.styleTag);

      this.styleTag.textContent = `
      .cas-close-modal-1951 {
        background: #606061;
        font-family: verdana;
        color: #FFFFFF;
        line-height: 25px;
        position: absolute;
        right: -12px;
        text-align: center;
        top: -10px;
        width: 24px;
        text-decoration: none;
        font-weight: bold;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        -moz-box-shadow: 1px 1px 3px #000;
        -webkit-box-shadow: 1px 1px 3px #000;
        box-shadow: 1px 1px 3px #000;
        cursor: pointer;
      }
      
      .cas-close-modal-1951:hover { background: #00d9ff; }

      

      

      .cassava-modal-container_KAA_CHUCK_arrive-start {

        -webkit-transform: translate(-50%, -200%);
        -ms-transform: translate(-50%, -200%);
        transform: translate(-50%, -200%);

        -webkit-transition : -webkit-transform 200ms ease-out;
        transition: transform 200ms ease-out;
      }

      .cassava-modal-container_KAA_CHUCK_arrive-end {
        -webkit-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);

 
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top:0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.5);
      }
      
      .modal-content {
        background-color: white;
        margin: 20% auto;
        padding:20px;
        width: 70%;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0,0.2), 0 7px 20px 0 rgba(0, 0, 0,0.17);
        animation-name: modalopen;
        animation-duration: 1s;
      }

      @keyframes modalopen {
        from { opacity: 0 }
        to {opacity: 1}
      }

      `;

      this.body.appendChild(this.styleTag);

   }

  addContainerstyles(container: HTMLDivElement, settings: ModalSettings){
     
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = "50%";
    container.style.background = settings.background;
    container.style.textAlign = 'center';
    container.style.zIndex = '100';
    container.style.display = 'none';
    container.style.borderRadius = settings.roundedEdges === true? '6px': '';
    container.style.display = 'block';

  }
 
  addOverlayStyles(overlay: HTMLDivElement){

    overlay.style.position = 'absolute';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.zIndex = '99';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.display = 'none';
    overlay.style.display = 'block';
  }

}
