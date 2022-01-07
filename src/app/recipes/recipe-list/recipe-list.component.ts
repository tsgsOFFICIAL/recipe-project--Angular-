import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Pandekager', 'Uhmm... hvem elsker ikke lækre pandekager? Nemme pandekager der smager og giver lyst til at bage flere. Denne pandekagedej indeholder smeltet smør, så du behøver ikke at fylde på mellem bagningerne. Server de hjemmelavede pandekager med dit yndlingssyltetøj, friske bær, is eller flødeskum. Eller måske har du lyst til blot at servere sukker og citronsaft til dine pandekager?', 'https://images.arla.com/recordid/9FD637FD-76C8-4114-9A0780F8A0CA21B8/pandekager.jpg'),
        new Recipe('Pandekager', 'Uhmm... hvem elsker ikke lækre pandekager? Nemme pandekager der smager og giver lyst til at bage flere. Denne pandekagedej indeholder smeltet smør, så du behøver ikke at fylde på mellem bagningerne. Server de hjemmelavede pandekager med dit yndlingssyltetøj, friske bær, is eller flødeskum. Eller måske har du lyst til blot at servere sukker og citronsaft til dine pandekager?', 'https://images.arla.com/recordid/9FD637FD-76C8-4114-9A0780F8A0CA21B8/pandekager.jpg')
    ];
    
    constructor() {

    }
}