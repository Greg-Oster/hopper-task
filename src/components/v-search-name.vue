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
    import {mapActions} from 'vuex';

    export default {
        name:"v-search-name",
        data(){
            return{
                text:"",
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
    .v-search-name {
        border-radius:0.25rem;
        input{
            border-radius: 0.25rem;
            padding: 0.8rem 1rem;
            background: rgba(230, 230, 230, 0.5);
            margin: 0;
            border:none;
        }
        
    }
</style>