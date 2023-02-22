export type IResponseGetProduct = IProduct[]

export interface IProduct {
    id: number
    name: string
    description: string
    price: string
    category: number
    created_at: string
    updated_at: string
    is_active: boolean
    image: string
    get_seller: IGetSeller
    get_category: IGetCategory
    quantity: number
}

export interface IGetSeller {
    name: string
}

export interface IGetCategory {
    name: string
}