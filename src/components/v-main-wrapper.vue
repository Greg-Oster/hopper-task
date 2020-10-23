<template>
    <div class="v-main-wrapper">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default{
        name:'v-main-wrapper', // Обязательное имя компонента
        components:{
            // Дочерние компоненты
        },
        props:{}, // Пропсы - посылаются сверху
        data(){
            return{
                title:"Hi there" // Персональное свойство
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
        justify-content: center;
        max-width:1000px;
        margin:0 auto;
    }
</style>