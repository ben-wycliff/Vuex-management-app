<template>
    <div>
        <h1>Todos</h1>
        <div class="todos">
            <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{ todo.title }}
                <i @click="removeTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}
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
i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ffffff;
    cursor: pointer;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'removeTodo']),

    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos()
    }
}
</script>