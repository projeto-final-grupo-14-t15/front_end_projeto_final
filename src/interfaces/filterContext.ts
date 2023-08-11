export interface IFilterResponse{
   id: number,
   brand: string,
   description: string,
   model: string,
   year: string,
   km: number,
   fuel: string,
   color: string,
   higher_than_fipe: boolean,
   price: number,
   createdAt: Date,
   updated_at: Date
}
export interface IFilterData{
   brand?: string,
   model?: string,
   year?: string,
   fuel?: string,
   color?: string,
   minPrice?: string,
   maxPrice?: string,
   minKm?:string
   maxKm?:string
}

export interface IFilterContext{
   Announcements: IFilterResponse[]
   getAnnouncements: (data: IFilterData) => Promise<void>
}
