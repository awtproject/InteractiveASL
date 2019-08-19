import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
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
