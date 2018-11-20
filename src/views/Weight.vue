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

</div>
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
export default {
    data(){
        return{
            date: null, email:null
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addWeight(){
            api.AddWeight({date: this.date, weight: this.weight})
        }
    }
}
</script>
