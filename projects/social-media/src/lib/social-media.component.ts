import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  @Input() public icons: any;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    if (typeof this.icons === 'string') {
      this.icons = JSON.parse(this.icons);
    }
  }

  ngOnChanges() {
    if (typeof this.icons === 'string') {
      this.icons = JSON.parse(this.icons);
    }
  }

  hasListOfIcos(): boolean {
    return this.icons && typeof this.icons === 'object';
  }
}
