<template>
<div class="">
<button 
    class="v-load-btn btn"
    :class="{disabled: isDisabled}"
    v-on:click="get_pages()"
    :disabled=isDisabled
    >
    {{ isDisabled? 'Все данные загружены' : 'Загрузить данные' }}</button>
</div>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

    export default {
        name:"v-load-btn",
        methods:{
            ...mapActions([
                'GET_PAGES'
            ]),
            ...mapGetters([
                'GET_NEXT_PAGE'
            ]),
            get_pages(){
                // Если ответ получен - перейдем к следующей странице
                if (this.$store.state.lastPageStatus === 200) {
                    // Получим информацию о номере последней и следующей страницы
                    // по последней полученной от сервера странице
                    this.lastPage = this.$store.state.pages[0].lastPage;
                    this.nextPage = this.$store.state.nextPage;
                    
                    if (this.nextPage <= this.lastPage){
                        this.$store.dispatch('GET_PAGES',{url:this.url,index:this.nextPage}).then(() => {
                            this.nextPage = this.$store.state.nextPage;
                            console.log(this.nextPage,"dispatched");

                            this.nextPage > this.lastPage ? 
                            this.isDisabled = true : this.isDisabled = false;
                        })
                    } else {
                        console.log("Закончились страницы");
                        this.isDisabled = true;
                        console.log("Ошибка");
                    }
                } 
                // Если предыдущую страницу загрузить не удалось, пробуем по кнопке получать её же
                else {
                    // Пробуем обратиться к серверу еще раз, запрашивая текущую страницу
                    this.nextPage = this.$store.state.nextPage;
                    this.$store.dispatch('GET_PAGES',{url:this.url,index:this.nextPage}).then(() => {
                            this.nextPage = this.$store.state.nextPage;
                            console.log(this.nextPage,"dispatched");

                            if (this.lastPage != 0){
                                this.nextPage > this.lastPage ? 
                                this.isDisabled = true : this.isDisabled = false;
                            }
                        })
                    return;
                }                     
            }
        },
        data(){
            return{
                lastPage:0,
                nextPage:1,
                isDisabled:false,
                url:"http://localhost:3000/pages/"
            }
        },

    }
</script>

<style lang="scss">
    .btn {
        border: 0;
        border-radius: 0.25rem;
        background: #1E88E5;
        color: white;
        font-family: -system-ui, sans-serif;
        font-size: 1rem;
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;
        padding: 0.65rem 1rem;
        margin-right: 0.25rem;
        cursor: pointer;

        &:disabled {
            background: #3e79ad;
        }
    }
</style>