<template>
    <div>Food Page
    <form @submit.prevent="addMeal">
        <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" placeholder="date" v-model="date">
        </div>

        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Meal</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Breakfast" checked v-model="meal" >
                        <label class="form-check-label" for="gridRadios1">
                            Breakfast
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Lunch" v-model="meal">
                        <label class="form-check-label" for="gridRadios2">
                            Lunch
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Dinner" v-model="meal">
                        <label class="form-check-label" for="gridRadios2">
                            Dinner
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Snack" v-model="meal">
                        <label class="form-check-label" for="gridRadios2">
                            Snack
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>

        <div class="form-group">
        <label for="foor">Food</label>
        <input type="food" class="form-control" id="food" placeholder="Enter what you ate" v-model="food">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    </div>
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
export default {
    data(){
        return{
            date: null, meal: null, food: null
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addMeal(){
            api.AddMeal({date: this.date, mealTime: this.meal, food: this.food})
        }
    }
}
</script>