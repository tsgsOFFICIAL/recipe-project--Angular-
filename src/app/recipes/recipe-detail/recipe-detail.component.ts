import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;
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