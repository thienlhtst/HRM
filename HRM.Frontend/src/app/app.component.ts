import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { share } from 'rxjs';
import { ShareModule } from './modules/share/share.module';
import { HttpClient } from '@angular/common/http'; // Import the correct provider

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, ShareModule],
  providers: [HttpClient], // Use the correct provider
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'HRM.Frontend';


}
