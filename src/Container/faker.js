import { faker } from '@faker-js/faker';
faker.locale =  "es"

const getProduct = ()=>{
    return {
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        thumbnail: faker.image.food(100,80,true)
    }
};

export const getProductsFake = ( qty ) =>{
    const list = [];
    for (let index = 0; index < qty; index++) {
        list.id = index;
        list.push( getProduct() );
    }
    return list;
}

