import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import KeenSlider from "keen-slider";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

  show: boolean;
  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider: KeenSlider = null
  
  ngAfterViewInit() {
    console.log('sliderRef ==================',this.sliderRef);
    
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slidesPerView: 5,
        spacing: 20,
        mode: "free",
        // loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.details().relativeSlide
        },
      })
      this.dotHelper = [...Array(this.slider.details().size).keys()]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  mouseOver(event) {
    console.log("mouseOver ==",this.show, event);
    // this.sliderRef.nativeElement.classList.add()
    this.show = true;
  }

  mouseOut(event) {
    console.log("mouseOut ==",this.show, event);
    this.show = false;
  }

}
