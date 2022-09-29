<template>
    <v-container>
        <v-row>
            <table-episodes>
            </table-episodes>
        </v-row>
    </v-container>
</template>

<script>

    import TableEpisodes from '@/components/organisms/TableEpisodes.vue'

    export default {
        components:{
            TableEpisodes
        },
        data(){
            return{
                title:"Rick and morty", 
                option: "Episodes",
                value_button: "Caracter",
                label_button: "Tabela de Personagens"
            }
        },
        methods:{
            choseOption(option){
                this.option = option
            }
        },
        watch:{
            option(){
                if(this.option == 'Episodes'){
                    this.value_button = 'Caracter'
                    this.label_button = "Tabela de Personagens"
                }else{
                    this.value_button = 'Episodes'
                     this.label_button = "Tabela de Episódios"
                }

            }
        }
        
    }
</script>