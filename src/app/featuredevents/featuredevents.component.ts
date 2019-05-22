import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-featuredevents',
    templateUrl: './featuredevents.component.html',
    styleUrls: ['./featuredevents.component.css']
})
export class FeaturedeventsComponent implements OnInit {
    events = [];
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('http://localhost:4200/assets/events.json').subscribe(events => {
            this.events = events;
        });
    }
}
