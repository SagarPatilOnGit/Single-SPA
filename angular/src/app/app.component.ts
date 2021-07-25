import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular';
  emittedEvent: any;
    ngOnInit() {
        window.addEventListener('test',(e)=>{
          this.emittedEvent = e;
        }, false);
    }

}
