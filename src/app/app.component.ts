import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedLink='Person';

  onPageNavigate(ClickLinked: string){
  this.loadedLink = ClickLinked;
  }
}
