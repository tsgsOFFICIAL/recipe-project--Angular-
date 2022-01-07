import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Pandekager', 'Uhmm... hvem elsker ikke lækre pandekager? Nemme pandekager der smager og giver lyst til at bage flere. Denne pandekagedej indeholder smeltet smør, så du behøver ikke at fylde på mellem bagningerne. Server de hjemmelavede pandekager med dit yndlingssyltetøj, friske bær, is eller flødeskum. Eller måske har du lyst til blot at servere sukker og citronsaft til dine pandekager?', 'https://images.arla.com/recordid/9FD637FD-76C8-4114-9A0780F8A0CA21B8/pandekager.jpg'),
        new Recipe('Vafler', 'Friskbagte vafler smager skønt og med et vaffeljern er det både nemt og sjovt at bage vafler. Denne vaffeldej indeholder kærnemælk, citronskal og vanilje og giver de mest lækre og sprøde vafler. Du kan servere syltetøj, flødeskum, vaniljeis, frisk frugt - eller blot et lille drys flormelis og citronsaft til de nybagte vafler. Vaffeldejen giver 12 styks sprøde vafler.', 'https://cdn-rdb.arla.com/Files/arla-dk/1683825964/de2f4c0f-eace-4ef9-aae1-16e6776685db.jpg')
    ];
    
    onRecipeSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

    constructor() {

    }
}