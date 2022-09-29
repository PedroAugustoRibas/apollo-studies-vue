<template>
	<v-data-table
		:items="items" 
		:headers="headers"
		:search="search"
		:loading-text="loadingText"
		:loading="loading"
		:items-per-page="itemsPerPage"
	>
		<template
			v-for="(_, scopedSlotName) in $scopedSlots"
			v-slot:[scopedSlotName]="slotData"
		>
			<slot :name="scopedSlotName" v-bind="slotData" />
		</template>
	</v-data-table>
</template>

<script>
/**
 * Componente de tabela base do projeto
 * @component
 */
export default {
	props:{
		/**
		 * Conteudo da tabela
		 */
		items:{
			type:Array,
			required: true
		},
		/**
		 * Cabeçalho da tabela
		 */
		headers:{
			type:Array,
			required: true
		},
		/**
		 * Texto de loading da tabela
		 */
		loadingText:{
			type:String,
			default: 'Carregando....'
		},
		/**
		 * Indica se a tabela está carregando
		 */
		loading:{
			type:Boolean,
			default: false
		},
		/**
		 * Quantidade de itens por pagina
		 */
		itemsPerPage:{
			type:Number,
			default: 8
		},
	},
	data: function () {
		return {
		search: "",
		};
	},
};
</script>