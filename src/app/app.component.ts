import { Component } from '@angular/core';
import { CartoonCharacterService } from './cartoon-character.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartoonCharacterService]
})
export class AppComponent {
   title = "The Flintstones";
}
  /*
  characters : CartoonCharacter[];
  onSelect(character: CartoonCharacter) : void {
    this.selected = character; 
  }
   
  selected: CartoonCharacter = {
    PersonId: 1,
    FirstName: "Fred",
    LastName: "Flintstone",
    Occupation: "Mining Manager",
    Gender: "M",
    Picture:  "http://flintstones.zift.ca/images/flintstone/fred.png",
  };
  */
