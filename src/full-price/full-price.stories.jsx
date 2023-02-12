import React from "react";
import FullPrice from "./full-price";

export default {
    title: 'Полная цена (fullPrice)'
}
const Template = (args) => <FullPrice {...args} />;

export const WithOldPrice  = Template.bind({});

WithOldPrice.args = {
    oldPrice: 1000, price: 500
}

export const WithoutOldPrice  = Template.bind({});

WithoutOldPrice.args = {
    price: 500
}