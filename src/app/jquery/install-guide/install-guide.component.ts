import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install-guide',
  templateUrl: './install-guide.component.html',
  styleUrls: ['./install-guide.component.scss']
})
export class InstallGuideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextChapterClick() {
    this.router.navigate(['/jquery/register-form']);
  }
}
