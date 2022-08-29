import { AfterContentChecked, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  bookOpen = faBookOpen

  constructor() {}

  ngOnInit(): void {
    
  }

}
