<template>
    <button 
    class="v-load-btn"
    :class="{disabled: isDisabled}"
    v-on:click="get_pages()"
    :disabled=isDisabled
    >
    Загрузить еще</button>
</template>

<script>
import {mapActions} from 'vuex';

    export default {
        name:"v-load-btn",
        methods:{
            ...mapActions([
                'GET_PAGES'
            ]),
            get_pages(){
                let lastPage = this.$store.state.pages[0].lastPage;

                if (this.page < lastPage){
                    this.GET_PAGES(this.page);
                    this.page++;
                } else if (this.page == lastPage){
                    this.GET_PAGES(this.page);
                    console.log("Закончились страницы");
                    this.isDisabled = true;
                } else {
                    console.log("Ошибка");
                }
            }
        },
        data(){
            return{
                page:2,
                isDisabled:false
            }
            
        }
    }
</script>

<style lang="scss">

</style>