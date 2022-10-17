import BaseHeader from "../components/atoms/BaseHeader.vue";




export default {
    title: 'Atoms/BaseHeader',
    component: BaseHeader
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseHeader },
    template: '<base-header :title="title"> </base-header>',
});

export const Default = Template.bind({});

Default.args = {
    title: 'Teste de titulo',
};
