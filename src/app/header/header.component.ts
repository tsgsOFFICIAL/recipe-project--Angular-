import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() selectedFeature = new EventEmitter<string>();

    onSelect(feature: string) {
        this.selectedFeature.emit(feature);
    }


    active: boolean = false;

    ChangeState(event: any) {
        this.active = !this.active;
        
        var content = event.target.nextElementSibling;
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}