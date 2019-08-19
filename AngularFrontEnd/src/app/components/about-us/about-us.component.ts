import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.fragment.subscribe((fragment: string) => { 
    if (fragment && document.getElementById(fragment) != null) {
      document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
    }
  });
}

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
