<template>
    <div>
        <h1>Add Todo</h1>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<style scoped>
form {
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #ff50f0;
    outline: 0;
}
input[type="submit"]{
    flex: 2;
    background: #ff50f0;
    color: #fff;
    border: 1px #ff50f0 solid;
    cursor: pointer;
}
</style>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTodo',
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title)
        }
    }
}
</script>
