import { useContext, useEffect, useState } from "react";
import { StyledFilter } from "./style";
import { Slider } from "@mui/material";
import { IFilterData } from "../../interfaces/announcementsContext.types";
import { AnnouncementsContext } from "../../context/AnnouncementsContext";

export const Filter = () => {

   const { Announcements, getAnnouncements, getAllAnnouncementsForFilter,allAnnouncementsForFilter } = useContext(AnnouncementsContext);
   
    const [dataFilter, setDataFilter] = useState <IFilterData> ({
        brand: "",
        model: "",
        year: "",
        fuel: "",
        color: "",
        minPrice: "",
        maxPrice: "",
        minKm:"",
        maxKm:"",
    })

    const handleFilterFieldClick = (fieldName: keyof IFilterData, value: any) => {
        setDataFilter((prevFilter) => ({
          ...prevFilter,
          [fieldName]: value,
        }));
      };

   useEffect(() => {
      getAnnouncements(dataFilter);
   }, [dataFilter]);

   const checkDataBase = {brand: "",model: "",year: "",fuel: "",color: "",minPrice: "",maxPrice: "",minKm:"",maxKm:"",}
    useEffect(() => {
        getAllAnnouncementsForFilter(checkDataBase);
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
    const brandsRegistered = getUniqueBrands(allAnnouncementsForFilter)

    function getUniqueModels(carList:any) {
        const uniqueModels:any = [];

        carList.forEach((car:any) => {
            if (!uniqueModels.includes(car.model)) {
                uniqueModels.push(car.model);
            }
        });

        return uniqueModels;
        }
        const modelsRegistered = getUniqueModels(allAnnouncementsForFilter)

        function getUniqueColors(carList:any) {
            const uniqueColors:any = [];
            
            carList.forEach((car:any) => {
                if (!uniqueColors.includes(car.color)) {
                    uniqueColors.push(car.color);
                }
            });
            
            return uniqueColors;
    }
    const colorsRegistered = getUniqueColors(allAnnouncementsForFilter)

    function getUniqueYear(carList:any) {
        const uniqueYear:any = [];
        
        carList.forEach((car:any) => {
            if (!uniqueYear.includes(car.year)) {
                uniqueYear.push(car.year);
            }
        });
        
        return uniqueYear;
    }
    const yearRegistered = getUniqueYear(allAnnouncementsForFilter)

    function getUniqueFuel(carList:any) {
        const uniqueFuel:any = [];
        
        carList.forEach((car:any) => {
            if (!uniqueFuel.includes(car.fuel)) {
                uniqueFuel.push(car.fuel);
            }
        });
        
        return uniqueFuel;
    }
    const fuelRegistered = getUniqueFuel(allAnnouncementsForFilter)

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

    function findLowestAndHighestKm(carList:any) {
        let lowestKm = Number.MAX_SAFE_INTEGER;
        let highestKm = Number.MIN_SAFE_INTEGER;
    
        carList.forEach((car:any) => {
            if (car.km < lowestKm) {
                lowestKm = car.km;
            }
            if (car.km > highestKm) {
                highestKm = car.km;
            }
        });
    
        return [lowestKm, highestKm];
    }

    const lowestAndHighestKm = findLowestAndHighestKm(Announcements)


    const [valueKm, setValueKm] = useState<number[]>([...lowestAndHighestKm]);
    const [valuePrice, setValuePrice] = useState<number[]>([...lowestAndHighestPrices]);

    const handleChangeKm = (_event: Event, newValue: number | number[]) => {
        setValueKm(newValue as number[]);
    }; 

    const handleChangePrice = (_event: Event, newValue: number | number[]) => {
        setValuePrice(newValue as number[]);
    }; 

   return (
    <StyledFilter>
        <h2> Marcas </h2>
        {brandsRegistered.map((brand: any) => (
        <button
            key={brand}
            onClick={() => handleFilterFieldClick("brand", brand)}
        >
            {brand}
        </button>
        ))}
        <h2> Modelos </h2>
        {modelsRegistered.map((model: any) => (
        <button
            key={model}
            onClick={() => handleFilterFieldClick("model", model)}
        >
            {model}
        </button>
        ))}
        <h2> Cor </h2>
        {colorsRegistered.map((color: any) => (
        <button
            key={color}
            onClick={() => handleFilterFieldClick("color", color)}
        >{color}
        </button>
        ))}
        <h2> Ano </h2>
        {yearRegistered.map((year: any) => (
        <button key={year} onClick={() => handleFilterFieldClick("year", year)}>
            {year}
        </button>
        ))}
        <h2> Combustivel </h2>
        {fuelRegistered.map((fuel: any) => (
        <button key={fuel} onClick={() => handleFilterFieldClick("fuel", fuel)}>
            {fuel}
        </button>
        ))}
        <h2> KM </h2>

        <Slider
            getAriaLabel={() => 'Km range'}
            value={valueKm}
            onChange={handleChangeKm}
            valueLabelDisplay="auto"
            max={1000000}
            min={50000}
            step={1000}
        />

        <h2> Preço </h2>

        <Slider
            getAriaLabel={() => 'Price range'}
            value={valuePrice}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            max={1000000}
            min={50000}
            step={1000}
        />

      </StyledFilter>
)
}