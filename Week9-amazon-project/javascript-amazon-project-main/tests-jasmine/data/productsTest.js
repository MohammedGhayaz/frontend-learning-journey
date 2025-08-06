import {Product} from '../../data/products.js'
import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: product class',()=>{
    let product1;
    beforeEach(()=>{
        product1 = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: [
                "socks",
                "sports",
                "apparel"
            ]
        })
    })
    
    it('generate fields of product class', ()=>{
       
        expect('id' in product1).toBe(true);
        expect('image' in product1).toBe(true);
        expect('name' in product1).toBe(true);
        expect('rating' in product1).toBe(true);
        expect('priceCents' in product1).toBe(true);

    })

    it('should initialize Product class with correct field values', ()=>{
       
        expect(product1.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(product1.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
        expect(product1.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(product1.rating).toEqual({
                stars: 4.5,
                count: 87
            });
        expect(product1.priceCents).toEqual(1090);

    })

    it('generate methods of product class', ()=>{
       
        expect(typeof product1.getStars).toBe('function');
        expect(typeof product1.getPrice).toBe('function');
        expect(typeof product1.extraInfoHTML).toBe('function');
    })

    it('should perform expected actions when Product methods are called',()=>{

        expect(product1.getStars()).toEqual(`images/ratings/rating-${product1.rating.stars * 10}.png`)
        expect(product1.getPrice()).toEqual(`$${formatCurrency(product1.priceCents)}`)
        expect(product1.extraInfoHTML()).toEqual('');
    })

})