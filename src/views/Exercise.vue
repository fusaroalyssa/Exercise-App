<template>
    <div>Exercise Page

<form>
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="date">
        </div>
        <div class="form-group">
            <label for="hour">Hours</label>
            <input type="hour" class="form-control" id="hours" placeholder="How many hours you worked out">
            <label for="min">Minutes</label>
            <input type="min" class="form-control" id="min" placeholder="How many minutes you worked out">
            <label for="sec">Seconds</label>
            <input type="sec" class="form-control" id="sec" placeholder="How many Seconds you worked out">
        </div>
        <div class="form-group">
            <label for="exercise">Exercise</label>
            <input type="exercise" class="form-control" id="exercise" placeholder="Enter exercise">
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
    
}
</script>