<template>
    <div class="pa-12">
        <base-data-table :items="items" :headers="headers" title="My Title">
            <template v-slot:[`item.actions`]>
            <v-btn color="primary">
                <v-icon small>settings</v-icon>
            </v-btn>
            </template>
        </base-data-table>
    </div>
</template>

<script>
    import BaseDataTable from '../../../components/organisms/BaseDataTable.vue';

    export default {
        components:{
            BaseDataTable
        },
        data() {
            return {
            dialog: false,
            items: [
                {
                id: 1,
                },
                {
                id: 2,
                },
            ],
            headers: [
                {
                text: "ID",
                value: "id",
                },
                {
                text: "teste",
                value: "actions",
                },
            ],
            };
        },
    }
</script>