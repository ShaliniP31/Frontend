import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  buttonClick() {
    console.log("Button clicked")
  }

  keyUp(event:any){
    console.log('key pressed: ', event.key)
  }
}
