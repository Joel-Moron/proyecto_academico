import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../services/ProductService';

    export default function CircularDemo() {
    const [products, setProducts] = useState([]);
/*     const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ]; 

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };*/

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <>
                <div className="mb-3">
                    <img src={product.image} alt={product.name} className="w-6 shadow-2" style={{maxHeight:'400px'}} />
                </div>
            </>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={1} numScroll={1} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
        