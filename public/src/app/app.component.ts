import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit{
  title = 'ambulance-feedback-app';

  ngAfterViewInit(): void {
    const video = document.getElementById('video');
    video.addEventListener('loadedmetadata', () => {
     // video.currentTime = 12;
    }, false);
  }
}
