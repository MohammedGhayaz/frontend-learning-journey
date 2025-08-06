import {Product, Clothing, Appliance} from '../../data/products.js'
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

});


describe('test suite: clothing class', ()=>{
    let clothingProduct;
    beforeEach(()=>{
        clothingProduct = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
                rating: {
                    stars: 4.5,
                    count: 56
                },
            priceCents: 799,
            keywords: [
                "tshirts",
                "apparel",
                "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        })
    })

    it('generate fields of clothing class', ()=>{
        expect('id' in clothingProduct).toBe(true);
        expect('image' in clothingProduct).toBe(true);
        expect('name' in clothingProduct).toBe(true);
        expect('rating' in clothingProduct).toBe(true);
        expect('priceCents' in clothingProduct).toBe(true);
        expect('sizeChartLink' in clothingProduct).toBe(true);
    })

    it('should initialize Clothing class with correct field values', ()=>{
       
        expect(clothingProduct.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(clothingProduct.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
        expect(clothingProduct.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
        expect(clothingProduct.rating).toEqual({
                stars: 4.5,
                count: 56
            });
        expect(clothingProduct.priceCents).toEqual(799);
        expect(clothingProduct.sizeChartLink).toEqual('images/clothing-size-chart.png');
    })
    
    it('generate methods of clothing class', ()=>{       
        expect(typeof clothingProduct.getStars).toBe('function');
        expect(typeof clothingProduct.getPrice).toBe('function');
        expect(typeof clothingProduct.extraInfoHTML).toBe('function');
    })

    it('should perform expected actions when Clothing methods are called',()=>{
        expect(clothingProduct.getStars()).toEqual(`images/ratings/rating-${clothingProduct.rating.stars * 10}.png`)
        expect(clothingProduct.getPrice()).toEqual(`$${formatCurrency(clothingProduct.priceCents)}`)
        expect(clothingProduct.extraInfoHTML()).toContain('Size Chart');
    })
})

describe('test suite: appliance class', ()=>{
  let applianceProduct;
  beforeEach(()=>{
      applianceProduct = new Appliance({
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
        name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
        rating: {
          stars: 5,
          count: 846
        },
        priceCents: 3074,
        keywords: [
          "water boiler",
          "appliances",
          "kitchen"
        ],
        type: "appliance",
        instructionsLink: "images/appliance-instructions.png",
        warrantyLink: "images/appliance-warranty.png"
      })
  })

  it('generate fields of appliance class', ()=>{
      expect('id' in applianceProduct).toBe(true);
      expect('image' in applianceProduct).toBe(true);
      expect('name' in applianceProduct).toBe(true);
      expect('rating' in applianceProduct).toBe(true);
      expect('priceCents' in applianceProduct).toBe(true);
      expect('instructionsLink' in applianceProduct).toBe(true);
      expect('warrantyLink' in applianceProduct).toBe(true);
  })

  it('should initialize appliance class with correct field values', ()=>{
     
      expect(applianceProduct.id).toEqual('c2a82c5e-aff4-435f-9975-517cfaba2ece');
      expect(applianceProduct.image).toEqual('images/products/electric-glass-and-steel-hot-water-kettle.webp');
      expect(applianceProduct.name).toEqual('Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter');
      expect(applianceProduct.rating).toEqual({
              stars: 5,
              count: 846
          });
      expect(applianceProduct.priceCents).toEqual(3074);
      expect(applianceProduct.instructionsLink).toEqual('images/appliance-instructions.png');
      expect(applianceProduct.warrantyLink).toEqual('images/appliance-warranty.png');
  })
  
  it('generate methods of appliance class', ()=>{       
      expect(typeof applianceProduct.getStars).toBe('function');
      expect(typeof applianceProduct.getPrice).toBe('function');
      expect(typeof applianceProduct.extraInfoHTML).toBe('function');
  })

  it('should perform expected actions when appliance methods are called',()=>{
      expect(applianceProduct.getStars()).toEqual(`images/ratings/rating-${applianceProduct.rating.stars * 10}.png`)
      expect(applianceProduct.getPrice()).toEqual(`$${formatCurrency(applianceProduct.priceCents)}`)
      expect(applianceProduct.extraInfoHTML()).toContain('Warranty');
  })
})