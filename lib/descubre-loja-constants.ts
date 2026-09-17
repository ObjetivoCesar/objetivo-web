export interface CategoriaInfo {
  nombre: string;
  cobertura: string;
  mensual: number;
  anual: number;
  cuposMax: number;
}

export const CATEGORIAS_DEFINIDAS: Record<string, CategoriaInfo> = {
  bares: {
    nombre: 'Bares, Discotecas y Artesanías',
    cobertura: 'Cobertura total anual recomendada',
    mensual: 25,
    anual: 250,
    cuposMax: 10,
  },
  hoteles_pequenos: {
    nombre: 'Hoteles Pequeños y Operadores Turísticos',
    cobertura: 'Cobertura total anual recomendada',
    mensual: 35,
    anual: 350,
    cuposMax: 10,
  },
  restaurantes: {
    nombre: 'Restaurantes, Cafeterías y Transporte',
    cobertura: 'Cobertura total anual recomendada',
    mensual: 40,
    anual: 400,
    cuposMax: 20,
  },
  hoteles_grandes: {
    nombre: 'Hoteles Grandes, Haciendas y Hosterías',
    cobertura: 'Cobertura total anual recomendada',
    mensual: 65,
    anual: 650,
    cuposMax: 10,
  },
};

export const WHATSAPP_CESAR_REYES = '593963410409';
