<template>
   <v-container>
       <v-row>
           <v-col>
                <form-filter>
                </form-filter>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import FormFilter from '../../../components/molecules/FormFilter.vue';

    export default {
        components:{
            FormFilter
        },
        methods:{
            click(){
                alert("Teste de botão")
            }
        }
    }
</script>