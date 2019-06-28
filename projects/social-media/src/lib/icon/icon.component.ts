import { Component, OnInit, Input } from '@angular/core';
import { SocialMediaService } from '../social-media.service';
import { Icon } from './icon.model';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  icon: Icon;
  @Input() public name: string;
  @Input() public url: string;

  constructor(private socialMediaService: SocialMediaService) {}

  ngOnInit() {
    this.icon = this.socialMediaService.getIcon(this.name, this.url);
  }

  ngAfterViewInit() {
    this.icon = this.socialMediaService.getIcon(this.name, this.url);
  }

  ngAfterContentInit() {
    this.icon = this.socialMediaService.getIcon(this.name, this.url);
  }

  ngOnChanges() {
    if (this.icon) {
      this.icon = this.socialMediaService.getIcon(this.name, this.url);
    }
  }
}
