import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  async read(){
    alert("User clicked scan button");

    const ndef = new NDEFReader();
    await ndef
      .scan()
      .then(() => {
        alert("Scan started");

        ndef.onreadingerror = () => {
          alert("Cannot read data from the NFC tag. Try another one?");
        };

        ndef.onreading = (event) => {
          alert('Serial Number:' + event.serialNumber);
          alert('Records: ' + event.message.records.toString());
        };

      }).catch((error) => {
          alert(error);
      });
  }

}
