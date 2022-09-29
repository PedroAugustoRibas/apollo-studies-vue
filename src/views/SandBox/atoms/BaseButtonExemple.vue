<template>
   <v-container>
       <v-row>
           <v-col>
                <base-button 
                    color="primary"
                    label="Teste de botão"
                    @click="click"
                >
                </base-button>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import BaseButton from '../../../components/atoms/BaseButton.vue';

    export default {
        components:{
            BaseButton
        },
        methods:{
            click(){
                alert("Teste de botão")
            }
        }
    }
</script>