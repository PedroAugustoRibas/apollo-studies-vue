<template>
   <v-container>
       <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="3">
                        <v-text-field
                            v-model="value"
                            :label="label"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <base-button 
                            class="mt-5"
                            color="primary"
                            label="Filtrar"
                            @click="click"
                        >
                        </base-button>
                    </v-col>
                </v-row>
            </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import BaseButton from '@/components/atoms/BaseButton.vue';
    
    /**
     * Formulário de filtro do projeto 
     */
    export default {
        components:{
            BaseButton,
        },
        props:{
            /**
             * label do input
             */
            label:{
                type: String,
                required:true
			},
		},
        data(){
            return{
                value:""
            }
        },
        methods:{
            click(){
                /**
                 * @emit click teste 
                 */
               this.$emit("click", this.value)
            }
        },
    }
</script>