import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cXGBCf1NpQHxbf1x0ZFFMYFVbRHFPMyBoS35RckVqWXpedHVVQ2JfVEx1');


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
