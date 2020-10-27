<template>
    <nav class="v-navigation">
        <div class="v-title">
            <h1 class="v-title__name">
                Hopper It - second quiz
            </h1>
        </div>
        <div class="v-navigation__items">
            <vLoadMore/>
            <vSearchByName/>
        </div>
    </nav>
</template>

<script>
import vSearchByName from "./v-search-name";
import vLoadMore from "./v-load-btn";

    export default {
        name: "v-navigation",
        components:{
            vSearchByName,
            vLoadMore
        }
    }
</script>

<style lang="scss" scoped>
    .v-navigation {
        display:flex;
        justify-content: space-between;
        align-items: center;

        &__items {
            display:flex;
        }
    }
</style>