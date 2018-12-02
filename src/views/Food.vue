<template>
    <div>
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
    <br>


    <button @click.prevent="getMeal">Click here to see your meals</button>
    
    <table  class="table table-bordered table-primary">
    <thead class="thead-dark">
        <tr>
        <th scope="col">Date (year-month-day)</th>
        <th scope="col">Time</th>
        <th scope="col">Food</th>
        </tr>
    </thead>
    <tbody v-for="m in state.meal" :key="m">
        <tr>
        <th scope="row">{{m.date}}</th>
        <td>{{m.mealTime}}</td>
        <td>{{m.food}}</td>
        </tr>
    </tbody>
    </table>

    </div>
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
export default {
    data(){
        return{
            date: null, meal: null, food: null,
            state: {
                meal: []
            }
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addMeal(){
            api.AddMeal({date: this.date, mealTime: this.meal, food: this.food})
            .then(this.date = null, this.meal = null, this.food = null)
            //.then(this.getMeal())
        },
        getMeal(){
            api.GetMeal()
            .then(x=> this.state.meal = x)
        }
    }
}
</script>