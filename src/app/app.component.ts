import { Component, ElementRef, ViewChild  } from '@angular/core';
import KeenSlider from "keen-slider"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

  // currentSlide: number = 1
  // dotHelper: Array<Number> = []
  // slider: KeenSlider = null

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.slider = new KeenSlider(this.sliderRef.nativeElement, {
  //       initial: this.currentSlide,
  //       slidesPerView: 4,
  //       // mode: "free",
  //       spacing: 20,
  //       // loop: true,
  //       slideChanged: (s) => {
  //         this.currentSlide = s.details().relativeSlide
  //       },
  //     })
  //     this.dotHelper = [...Array(this.slider.details().size).keys()]
  //   })
  // }

  // ngOnDestroy() {
  //   if (this.slider) this.slider.destroy()
  // }
}