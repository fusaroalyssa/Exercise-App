<template>
    <div>Weight Page

    <form @submit.prevent="addWeight">
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="date" v-model="date">
        </div>
        <div class="form-group">
            <label for="weight">Weight</label>
            <input type="weight" class="form-control" id="weight" placeholder="Enter weight" v-model="weight">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
   </form>
    <br>

    
  <button @click.prevent="getWeight">getWeight Button</button>
    
    <table  class="table table-bordered table-primary">
    <thead class="thead-dark">
        <tr>
        <th scope="col">Date (year-month-day)</th>
        <th scope="col">Weight</th>
        </tr>
    </thead>
    <tbody v-for="w in state.weight" :key="w">
        <tr>
        <th scope="row">{{w.date}}</th>
        <td>{{w.weight}}</td>
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
            date: null, email:null,
            state: {
                weight: []  
            },
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addWeight(){
            api.AddWeight({date: this.date, weight: this.weight})
        },
        getWeight(){
            api.GetWeight()
            .then(x=> this.state.weight = x)
        },
    }
}
</script>
