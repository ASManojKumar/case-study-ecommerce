import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-case-study';
  productList: Array<any> = [];
  mobile: any;
  renderedProductList: Array<any> = [];

  constructor() {
    this.productList = [{
      "name": "Product 1",
      "description": "Lorem ipsum dolor sit amet",
      "price": "99",
      "info": "This is the latest and greatest product from Derp corp.",
      "image": "http://placehold.it/300x300/999/CCC"
    }, {
      "name": "Product 2",
      "description": "Lorem ipsum dolor sit amet",
      "price": "999",
      "offer": "BOGOF",
      "image": "http://placehold.it/300x300/999/CCC"
    }, {
      "name": "Product 3",
      "description": "Lorem ipsum dolor sit amet",
      "price": "299",
      "image": "http://placehold.it/300x300/999/CCC"
    }, {
      "name": "Product 4",
      "description": "Lorem ipsum dolor sit amet",
      "price": "199",
      "offer": "No srsly GTFO",
      "image": "http://placehold.it/300x300/999/CCC"
    }, {
      "name": "Product 5",
      "description": "Lorem ipsum dolor sit amet",
      "price": "991",
      "image": "http://placehold.it/300x300/999/CCC"
    }, {
      "name": "Product 6",
      "description": "Lorem ipsum dolor sit amet",
      "price": "929",
      "info": "This is the latest and greatest product from Derp corp.",
      "offer": "info with offer",
      "image": "http://placehold.it/300x300/999/CCC"
    }];
  }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    this.renderProductList();
  }

  renderProductList() {
    var j = -1;
    for (var i = 0; i < this.productList.length; i++) {
      if (i % 3 == 0) {
        j++;
        this.renderedProductList[j] = [];
        this.renderedProductList[j].push(this.productList[i]);
      }
      else {
        this.renderedProductList[j].push(this.productList[i]);
      }
    }
  }
}
