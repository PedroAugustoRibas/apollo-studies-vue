<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col>
                        <form-filter 
                            label="Digite o nome do episódio" 
                            @click="getData"
                        >
                        </form-filter>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <base-data-table 
                            :items="items"
                            :headers="table_header"
                            :loading="loading"
                        >
                        </base-data-table>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import BaseDataTable from '@/components/organisms/BaseDataTable.vue'
    import gql from 'graphql-tag'
    import FormFilter from '@/components/molecules/FormFilter.vue'

    export default {
        components:{
            BaseDataTable,
            FormFilter
        },
        data(){
            return{
                items:[],
                table_header: [
                    {
                        text: "Id",
                        value: "id",
                    },
                    {
                        text: "Nome",
                        value: "name",
                    },
                    
                ],
                loading:false,
                episodes:[]
            }
        },
        methods:{
            getData(name=""){
                this.loading = true
                this.$apollo.queries.episodes.refetch({
                    name: name
                }).then(response=>{
                   this.items = response.data.episodes.results
                   this.loading = false
                })
            },
        },
        apollo: {
            episodes: {
                query: gql`
                    query  ($name: String!) {
                        episodes(filter: { name:$name}) {
                            results {
                                id,
                                name
                            }
                        }
                    }`,
                variables() {
                    return {
                        name: "",
                    }
                }
            },
        },
        mounted: function () {
            this.getData()
        }
    }
</script>