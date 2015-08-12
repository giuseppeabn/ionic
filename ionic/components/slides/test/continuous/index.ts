import {App} from 'ionic/ionic';


@App({
  template: `
    <ion-slides #slides loop>
      <ion-slide style="background-color: blue">
        <h2>Page 1</h2>
      </ion-slide>
      <ion-slide style="background-color: yellow">
        <h2>Page 2</h2>
      </ion-slide>
      <ion-slide style="background-color: pink">
        <h2>Page 3</h2>
      </ion-slide>
      <ion-pager>
      </ion-pager>
    </ion-slides>

    <div style="position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center">
      <button (click)="slides.prev()">Prev</button>
      <button (click)="slides.next()">Next</button>
    </div>
  `
})
class IonicApp {
  next() {
    console.log('Next');
  }
  prev() {
    console.log('Prev');
  }
}
