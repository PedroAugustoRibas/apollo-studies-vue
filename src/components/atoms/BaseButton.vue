<template>
    <v-btn
      depressed
      :color="color"
      v-text="label"
      @click="clickButton"
    >
    </v-btn>
</template>

<script>
    /**
     * Botão base do projeto
     * @component 
     */
	export default {
		props:{
            /**
             * Cor do botão
             */
			color:{
                type: String,
                required: true
			},
            /**
             * Label do botão
             */
            label:{
                type: String,
                required: true
			},
            /**
             * Valor atribuido ao botão
             */
            value:{
                type: String,
                default: ""
			},
		},
        methods:{
            /**
             * Método de click do botão, realiza o emit do evento click
             */
            clickButton(){
                /**
                 * @emit click teste 
                 */
                this.$emit('click', this.value)
            }
        }
	}
</script>
