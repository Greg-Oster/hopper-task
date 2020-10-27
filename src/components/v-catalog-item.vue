<template>
    <div class="v-catalog-item">
        <a v-bind:href="item_data.pageUrl" class="v-catalog-item__name">{{item_data.name}}</a>
        <div v-if="item_data.category" class="v-catalog-item__category">
            Категория: {{item_data.category}}
        </div>
        <div v-else-if="item_data.genre" class="v-catalog-item__category">
            Жанр: {{item_data.genre}}
        </div>
        <div v-else class="v-catalog-item__category--no-category">
            Категория отсутствует
        </div>
    </div>
</template>

<script>

    export default {
        name:"v-catalog-item",
        props:{
            item_data:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    .v-catalog-item {
        padding:$padding*2;
        background:$item-bg;
        border-radius: 0.25rem;
    }
</style>