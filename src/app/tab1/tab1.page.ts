import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomModalComponent } from '../components/custom-modal/custom-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.presentModal();
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: CustomModalComponent,
      cssClass: 'customModal'
    });
    return await modal.present();
  }

}
