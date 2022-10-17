import BaseButton from "../components/atoms/BaseButton.vue";

export default {
    title: 'Atoms/BaseButton',
    component: BaseButton
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseButton },
    template: '<base-button  :color="color" :label="label"> </base-button>',
});

export const Primary = Template.bind({});

Primary.args = {
    color: 'primary',
    label: 'Button',
};

export const NoLabel = Template.bind({});

NoLabel.args = {
    color: 'primary',
};

