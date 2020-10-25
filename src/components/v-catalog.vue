<template>
    <div class="v-catalog">
        <!-- <div v-for="(page,index) in INLINEPOSTS" :key="index"> -->
            <vCatalogItem 
                v-for="item in searchHandler" 
                :key="item.id"
                :item_data="item" 
                />

        <!-- </div> -->
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import {mapActions, mapGetters} from 'vuex';
import store from '../vuex/store';

    export default {
        name:"v-catalog",
        components:{
            vCatalogItem,
        },
        data(){
            return{
                data:[]
            }
        },
        computed:{
            ...mapGetters([
                'PAGES',
                'INLINEPOSTS'
            ]),
            inputValue: function () {
                return store.state.search
            },
            searchHandler:function (){
                return this.INLINEPOSTS.filter(element=>{
                    return element.name.toLowerCase().includes(this.inputValue);
                });
            }
            
        },
        methods:{
            ...mapActions([
                'GET_PAGES'
            ])
        },
        mounted(){
            this.GET_PAGES(1);
            this.data = 123;
        }
    }
</script>

<style lang="scss" scoped>
    .v-catalog {
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: $padding;
    }
</style>