export interface Picture {
    id: string,
    url: string
}

export interface Producto {
    id: string;
    site_id: string;
    title: string;
    seller_id: number | string;
    category_id?: string;
    official_store_id: number;
    price: number;
    base_price: number;
    thumbnail: string;
    catalog_listing: boolean;
    pictures: Picture[];
    seller_address: {
        id: string
    }
    attributes: [{
        [k: string]: string | number
    }];
    permaLink: string;
    plain_text:string;
}