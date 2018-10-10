import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDATA } from './services/modal-data';
import { CasModalService } from './services/cas-modal.service';
import { DomService } from './services/dom.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ModalDATA,
    CasModalService,
    DomService],
  declarations: []
})
export class CasModalDialogModule { }
