<template>
    <div>
    <form @submit.prevent="addExercise">
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="date" v-model="date">
        </div>
        <div class="form-group">
            <label for="hour">Hours</label>
            <input type="hour" class="form-control" id="hours" placeholder="How many hours you worked out" v-model="hours">
            <label for="min">Minutes</label>
            <input type="min" class="form-control" id="min" placeholder="How many minutes you worked out" v-model="mins">
            <label for="sec">Seconds</label>
            <input type="sec" class="form-control" id="sec" placeholder="How many Seconds you worked out" v-model="secs">
        </div>
        <div class="form-group">
            <label for="exercise">Exercise</label>
            <input type="exercise" class="form-control" id="exercise" placeholder="Enter exercise" v-model="exercise">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    <button @click.prevent="getExercise">Click here to see your exercises</button>
    
    <table  class="table table-bordered table-primary">
    <thead class="thead-dark">
        <tr>
        <th scope="col">Date (year-month-day)</th>
        <th scope="col">Exercise</th>
        <th scope="col">Time</th>
        </tr>
    </thead>
    <tbody v-for="e in state.exercise" :key="e">
        <tr>
        <th scope="row">{{e.date}}</th>
        <td>{{e.exName}}</td>
        <td>hour: {{e.hour}} min: {{e.min}} sec: {{e.sec}}</td>
        </tr>
    </tbody>
    </table>



    </div>
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
//let loopTimer = null;
export default {
    data(){
        return{
            date: null, exercise: null, hours: null, mins: null, secs: null,
            state:{
                exercise: []
            }
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addExercise(){
            api.AddExercise({date: this.date, exName: this.exercise, hour: this.hours, min: this.mins, sec: this.secs})
            //.then( this.getExercise())
            .then(this.date = null, this.exercise = null, this.hours = null, this.mins = null, this.secs = null)
        },
        getExercise(){
            api.GetExercise()
            .then(x=> this.state.exercise = x)
        }
    }, 
    created(){
        this.getExercise();
        //loopTimer = setInterval(this.getExercise, 1000);
    }    
}
</script>