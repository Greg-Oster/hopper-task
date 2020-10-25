<template>
    <div class="v-search-name">
        <input 
        type="text" 
        id="v-search-name" 
        placeholder="Поиск по названию"
        v-model = "text"
        v-on:input="search(text)"
        >
        
    </div>
</template>

<script>
    // TODO: при вводе в инпут передать данные в каталог
    import {mapActions} from 'vuex';

    export default {
        name:"v-search-name",
        data(){
            return{
                text:"",
                data:[]
            }
        },
        computed:{
            searchHandler(){
                return "123";
            }
        },
        methods:{
            ...mapActions([
                'SEARCH_NAME'
            ]),
            search(text){
                this.SEARCH_NAME(text);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>