<template>
    <div class="v-main-wrapper">    
        <vNavigation/>
        <vCatalog/>
    </div>
</template>

<script>
import vNavigation from "./v-navigation";
import vCatalog from "./v-catalog";

    export default{
        name:'v-main-wrapper', 
        components:{
            vNavigation,
            vCatalog,
        },
        data(){
            return{
                title:"Hi there" // Персональное свойство
            }
        }, 

    }
</script>

<style scoped>
    .v-main-wrapper {
        display:flex;
        flex-direction: column;
        max-width:800px;
        margin:0 auto;
    }
</style>