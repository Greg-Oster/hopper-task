<template>
    <div class="v-catalog">
        <div v-for="(page,index) in PAGES" :key="index">
            <vCatalogItem 
                v-for="item in page.content" 
                :key="item.id"
                :item_data="item" 
                />

        </div>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import {mapActions, mapGetters} from 'vuex';

    export default {
        name:"v-catalog",
        components:{
            vCatalogItem,
        },
        data(){
            return{
                // pages:[]
            }
        },
        computed:{
            ...mapGetters([
                'PAGES',
                'INLINEPOSTS'
            ])
        },
        methods:{
            ...mapActions([
                'GET_PAGES'
            ])
        },
        mounted(){
            this.GET_PAGES(1);
        }
    }
</script>

<style lang="scss" scoped>
    .v-catalog {
        display:grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: $padding;
    }
</style>