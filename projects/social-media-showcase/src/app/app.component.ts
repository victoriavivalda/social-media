import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Social Media Library Showcase';
  singleIcon = { name: 'youtube', url: 'https://www.youtube.com' };

  listOfIcons: any = [
    { name: 'skype', url: 'https://www.skype.com' },
    { name: 'instagram', url: 'https://www.instagram.com' },
    { name: 'medium', url: 'https://www.medium.com' },
    { name: 'twitter', url: 'https://www.twitter.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com' },
    { name: 'facebook', url: 'https://my.workplace.com' },
    { name: 'slack', url: 'https://join.slack.com/t/iam-labs/signup' },
    { name: 'github', url: 'https://github.com/iam-labs' }
  ];
}
