export type size = {
    height: string,
    width: string
  }
  
 export type comments = {
    id: number,
    productId: number,
    description: string,
    date: string
  }
  
export type product = {
    name: string,
    id: number,
    count: string,
    weigth: string,
    size: size,
    comments: comments[]
  }
  
 export type initialStateType = {
    products: product[] | null,
    isLoading: boolean,
  }
  