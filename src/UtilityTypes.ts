type Product = {
    id: number;
    name: string;
    price:string;
    stock:number;
    color?:string;
}


// type ProductSummary = {
//     id : number;
//     name : string;
//     price : string;

// }

// type ProductSummary = Pick<Product, "id", | "name", | "price">;
type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "price" | "stock" | "color">;


