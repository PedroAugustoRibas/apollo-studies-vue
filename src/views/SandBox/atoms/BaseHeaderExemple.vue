<template>
   <v-container>
       <v-row>
           <v-col>
               <base-header title="Header do projeto">
               </base-header>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import BaseHeader from '../../../components/atoms/BaseHeader.vue';

    export default {
        components:{
            BaseHeader
        },
    }
</script>