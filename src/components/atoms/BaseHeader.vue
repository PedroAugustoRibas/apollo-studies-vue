<template>
    <v-row>
      <v-col>
        <p class="text-h5" v-text="title"></p>
        <v-divider></v-divider>
      </v-col>
    </v-row>
</template>

<script>
    /**
     * Header base do projeto
     * @component 
     */
	export default {
		props:{
            /**
             * Titulo
             */
            title:{
                type: String,
                default: ""
			},
		}
	}
</script>
