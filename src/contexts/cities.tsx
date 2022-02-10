import { createContext, ReactNode, useEffect, useState } from "react";

type citiesContext = {
  cities: any[];
  countries: any[];
}

const defaultPersonsContext: citiesContext = {
  cities: [],
  countries: []
};

export const CitiesContext = createContext<citiesContext>(defaultPersonsContext);

type Props = {
  children: ReactNode;
};

export function CitiesProvider({ children }: Props) {
  const [cities, setCities] = useState<any[]>([])
  const [countries, setCountries] = useState<any[]>([])

  useEffect(() => {
    setCities([
      { value: 'São Paulo', label: 'São Paulo' },
      { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
      { value: 'Belo Horizonte', label: 'Belo Horizonte' },
      { value: 'Salvador', label: 'Salvador' },
      { value: 'Fortaleza', label: 'Fortaleza' },
      { value: 'Manaus', label: 'Manaus' },
      { value: 'Brasília', label: 'Brasília' },
      { value: 'Curitiba', label: 'Curitiba' },
      { value: 'Recife', label: 'Recife' },
      { value: 'Porto Alegre', label: 'Porto Alegre' },
      { value: 'Belém', label: 'Belém' },
      { value: 'Goiânia', label: 'Goiânia' },
      { value: 'Guarulhos', label: 'Guarulhos' },
      { value: 'Campinas', label: 'Campinas' },
      { value: 'São Gonçalo', label: 'São Gonçalo' },
      { value: 'Natal', label: 'Natal' },
      { value: 'Porto Velho', label: 'Porto Velho' },
    ])

    setCountries([
      { value: 'Brasil', label: 'Brasil' },
      { value: 'Argentina', label: 'Argentina' },
      { value: 'Bolívia', label: 'Bolívia' },
      { value: 'Canadá', label: 'Canadá' },
      { value: 'Chile', label: 'Chile' },
      { value: 'Colômbia', label: 'Colômbia' },
      { value: 'Equador', label: 'Equador' },
      { value: 'Estados Unidos', label: 'Estados Unidos' },
      { value: 'França', label: 'França' },
      { value: 'Grécia', label: 'Grécia' },
      { value: 'Holanda', label: 'Holanda' },
      { value: 'Inglaterra', label: 'Inglaterra' },
      { value: 'Itália', label: 'Itália' },
      { value: 'México', label: 'México' },
      { value: 'Paraguai', label: 'Paraguai' },
    ])
  }, [])

  const value = {
    cities,
    countries,
  }

  return (
    <CitiesContext.Provider value={value}>
      {children}
    </CitiesContext.Provider>
  );
}