import { createContext, useState } from "react";
import { ICar, IKenzieKarsContext, IKenzieKarsProviderProps } from "../../interfaces/KenzieKarsContext.types";
import { karsApi } from "../../services/karsApi";

export const KenzieKarsContext = createContext<IKenzieKarsContext>(
  {} as IKenzieKarsContext
);

const KenzieKarsProvider = ({ children }: IKenzieKarsProviderProps) => {

  const [brandsList, setBrandsList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [modelsList, setModelsList] = useState<readonly string[]>([]);
  const [carsList, setCarsList] = useState<ICar[]>([]);
  const [loadingForm, setLoadingForm] = useState<boolean>(false);

  const allBrands = ['chevrolet', 'citroën', 'fiat', 'ford', 'honda', 'hyundai', 'nissan', 'peugeot', 'renault', 'toyota', 'volkswagen']
 

  const getCarsBrands = async () => {   
    try {
      const response = await karsApi.get('/cars');
   

      setBrandsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCarsPerBrands = async (brand) => {   
    if (brand) {
      setLoadingForm(true)

      try {
        const response = await karsApi.get(`/cars?brand=${brand}`);

        const modelsArray = response.data.map(car => car.name);
        setModelsList(modelsArray);            
        setCarsList(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingForm(false);
      }
    } else {
      setModelsList([])
    }
  };


  return (
    <KenzieKarsContext.Provider
      value={{
        getCarsBrands,
        brandsList,
        allBrands,
        setSelectedBrand,
        selectedBrand,
        getCarsPerBrands,
        modelsList,
        loadingForm,
        carsList
      }}
    >
      {children}
    </KenzieKarsContext.Provider>
  );
};

export { KenzieKarsProvider };
