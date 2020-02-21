<template>
    <div>
        <h3>Filter Todos</h3>
        <select @change="filterTodos($event)" name="" id="">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="5">5</option>
    </select>
    </div>
    
</template>

<style scoped>

</style>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TodoFilter',
    methods: mapActions(['filterTodos'])
}
</script>