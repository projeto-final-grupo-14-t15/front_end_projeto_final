import { useContext, useEffect } from "react";
import { FilterContext } from "../../context/FilterContext";
import { StyledFilter } from "./style";
import { Slider } from "@mui/material";
import * as React from 'react';

export const Filter = () => {

   const { Announcements, getAnnouncements } = useContext(FilterContext);
   
   const dataTeste = {
      brand: "",
      model: "",
      year: "",
      fuel: "",
      color: "",
      minPrice: "",
      maxPrice: "",
      minKm:"",
      maxKm:"",
   }

   useEffect(() => {
      getAnnouncements(dataTeste);
   }, []);

   function getUniqueBrands(carList:any) {
      const uniqueBrands:any = [];
  
      carList.forEach((car:any) => {
          if (!uniqueBrands.includes(car.brand)) {
              uniqueBrands.push(car.brand);
          }
      });
  
      return uniqueBrands;
  }
  const brandsRegistered = getUniqueBrands(Announcements)

  function getUniqueModels(carList:any) {
    const uniqueModels:any = [];

    carList.forEach((car:any) => {
        if (!uniqueModels.includes(car.model)) {
            uniqueModels.push(car.model);
        }
    });

    return uniqueModels;
    }
    const modelsRegistered = getUniqueModels(Announcements)

    function getUniqueColors(carList:any) {
        const uniqueColors:any = [];
        
        carList.forEach((car:any) => {
            if (!uniqueColors.includes(car.color)) {
                uniqueColors.push(car.color);
            }
        });
        
        return uniqueColors;
    }
    const colorsRegistered = getUniqueColors(Announcements)

    function getUniqueYear(carList:any) {
        const uniqueYear:any = [];
        
        carList.forEach((car:any) => {
            if (!uniqueYear.includes(car.year)) {
                uniqueYear.push(car.year);
            }
        });
        
        return uniqueYear;
    }
    const yearRegistered = getUniqueYear(Announcements)

    function getUniqueFuel(carList:any) {
        const uniqueFuel:any = [];
        
        carList.forEach((car:any) => {
            if (!uniqueFuel.includes(car.fuel)) {
                uniqueFuel.push(car.fuel);
            }
        });
        
        return uniqueFuel;
    }
    const fuelRegistered = getUniqueFuel(Announcements)

    function findLowestAndHighestPrices(carList:any) {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let highestPrice = Number.MIN_SAFE_INTEGER;
    
        carList.forEach((car:any) => {
            if (car.price < lowestPrice) {
                lowestPrice = car.price;
            }
            if (car.price > highestPrice) {
                highestPrice = car.price;
            }
        });
    
        return [lowestPrice, highestPrice];
    }

    const lowestAndHighestPrices = findLowestAndHighestPrices(Announcements)

    const [value, setValue] = React.useState<number[]>([...lowestAndHighestPrices]);

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

   return (
      <StyledFilter>
        <h2> Marcas </h2>
         {  
         brandsRegistered.map((brand:any) => (
           <button key={brand}>{brand}</button>
        ))}
        <h2> Modelos </h2>
        {  
         modelsRegistered.map((model:any) => (
           <button key={model}>{model}</button>
        ))}
        <h2> Cor </h2>
        {  
         colorsRegistered.map((color:any) => (
           <button key={color}>{color}</button>
        ))}
        <h2> Ano </h2>
        {  
         yearRegistered.map((year:any) => (
           <button key={year}>{year}</button>
        ))}
        <h2> Combustivel </h2>
        {  
         fuelRegistered.map((fuel:any) => (
           <button key={fuel}>{fuel}</button>
        ))}

        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={1000000}
        min={50000}
        step={1000}
        />

      </StyledFilter>
)
}