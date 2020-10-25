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
        name:'v-main-wrapper', // Обязательное имя компонента
        components:{
            // Дочерние компоненты
            vNavigation,
            vCatalog,
        },
        props:{}, // Пропсы - посылаются сверху
        data(){
            return{
                title:"Hi there 1" // Персональное свойство
            }
        }, // Внутренние данные компонента
        computed:{}, // Вычисляемые свойства компонента
        methods:{}, // onClick etc
        watch:{}, // Слежение за изменением чего либо в компоненте
        mounted(){
            console.log("Смонтировался");
        } // Один из хуков - как только смонтирован компонент

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