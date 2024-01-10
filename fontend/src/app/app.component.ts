import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login-base/login/login.component';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent
  ,HomeModule,ComponentsModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fontend';
}
