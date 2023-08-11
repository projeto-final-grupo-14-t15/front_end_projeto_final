import { createContext, useState } from "react";
import { IChildrenProps } from "../../types/@types";
import {
   IFilterContext,
   IFilterData,
   IFilterResponse,
} from "../../interfaces/filterContext";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";

export const FilterContext = createContext({} as IFilterContext);

export default function FilterProvider({ children }: IChildrenProps) {

   const [Announcements,SetAnnouncements] = useState<IFilterResponse[]>([])
   const [allAnnouncementsForFilter,SetAllAnnouncementsForFilter] = useState<IFilterResponse[]>([])

   const getAnnouncements = async (data: IFilterData) => {

      const {brand,color,fuel,maxKm,model,maxPrice,minKm,minPrice,year} = data;

      try {

         const response: AxiosResponse<IFilterResponse[]> = await api.get(
            `announcements?brand=${brand}&model=${model}&color=${color}&year=${year}&minKm=${minKm}&max
            Km=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}&fuel=${fuel}`
         );
         console.log(response.data)

         SetAnnouncements(response.data)
   
      } catch (error) {
         console.error(error);
      }
   };

   const getAllAnnouncementsForFilter = async (data: IFilterData) => {

      const {brand,color,fuel,maxKm,model,maxPrice,minKm,minPrice,year} = data;

      try {

         const response: AxiosResponse<IFilterResponse[]> = await api.get(
            `announcements?brand=${brand}&model=${model}&color=${color}&year=${year}&minKm=${minKm}&max
            Km=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}&fuel=${fuel}`
         );
         console.log(response.data)

         SetAllAnnouncementsForFilter(response.data)
   
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <FilterContext.Provider value={{ getAnnouncements,Announcements,getAllAnnouncementsForFilter,allAnnouncementsForFilter}}>
         {children}
      </FilterContext.Provider>
   );
}
