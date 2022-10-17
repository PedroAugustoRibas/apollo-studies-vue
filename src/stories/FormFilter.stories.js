import FormFilter from "../components/molecules/FormFilter.vue";


export default {
    title: 'Molecules/FormFilter',
    component: FormFilter
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FormFilter },
    template: '<form-filter> </form-filter>',
});

export const Default = Template.bind({});

Default.args = {};
