<template>
    <div>Weight Page

    <form>
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="date">
        </div>
        <div class="form-group">
            <label for="weight">Weight</label>
            <input type="weight" class="form-control" id="weight" placeholder="Enter weight">
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
