<template>
    <div>
        <h1>Todos</h1>
        <div class="todos">
            <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{ todo.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px solid #ccc;
    background: #ff50f0;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding: 5px;
    
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Todos',
    computed: mapGetters(['allTodos'])
}
</script>