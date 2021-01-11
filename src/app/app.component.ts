import { Component } from '@angular/core';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2-test';

  ngOnInit() {
    this.getBrowserSignature();
  }

  async getBrowserSignature() {
    // We recommend to call `load` at application startup.
    const fp = await FingerprintJS.load();
  
    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();
  
    // This is the visitor identifier:
    const visitorId = result.visitorId;
    console.log(visitorId);
  }
}
