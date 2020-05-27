import { Component, ViewEncapsulation } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: APP_BASE_HREF, useValue: "/new" }],
})
export class AppComponent {
  title = "yadoms";
}
