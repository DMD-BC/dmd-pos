const BUSINESS_TEMPLATES = [
    {
        "id":  "abarrotes",
        "name":  "Abarrotes y Minisuper",
        "description":  "Tiendas de conveniencia, misceláneas, abarrotes y víveres.",
        "icon":  "shopping-basket",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 1234 5678",
                         "address":  "Calle Morelos #102, Col. Centro",
                         "bizName":  "Minisuper La Bendición",
                         "footerMessage":  "¡Gracias por su compra en su tienda de confianza!",
                         "taxRate":  0
                     },
        "products":  [
                         {
                             "stock":  60,
                             "cost":  13,
                             "code":  "75010001",
                             "category":  "Bebidas",
                             "price":  18.5,
                             "name":  "Coca Cola 600ml No Retornable",
                             "minStock":  12,
                             "id":  "1"
                         },
                         {
                             "stock":  40,
                             "cost":  9,
                             "code":  "75010002",
                             "category":  "Bebidas",
                             "price":  15,
                             "name":  "Agua Purificada 1.5L",
                             "minStock":  10,
                             "id":  "2"
                         },
                         {
                             "stock":  30,
                             "cost":  12.5,
                             "code":  "75010003",
                             "category":  "Botanas",
                             "price":  18,
                             "name":  "Papas Sal 50g",
                             "minStock":  8,
                             "id":  "3"
                         },
                         {
                             "stock":  15,
                             "cost":  30,
                             "code":  "75010004",
                             "category":  "Panadería",
                             "price":  44,
                             "name":  "Pan de Caja Blanco 680g",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  24,
                             "cost":  20,
                             "code":  "75010005",
                             "category":  "Lácteos",
                             "price":  28,
                             "name":  "Leche Entera Tetrapack 1L",
                             "minStock":  6,
                             "id":  "5"
                         },
                         {
                             "stock":  35,
                             "cost":  15,
                             "code":  "75010006",
                             "category":  "Enlatados",
                             "price":  22.5,
                             "name":  "Atún en Agua Lata 140g",
                             "minStock":  10,
                             "id":  "6"
                         },
                         {
                             "stock":  20,
                             "cost":  19,
                             "code":  "75010007",
                             "category":  "Granos",
                             "price":  27,
                             "name":  "Arroz Grano Grueso 1kg",
                             "minStock":  5,
                             "id":  "7"
                         },
                         {
                             "stock":  18,
                             "cost":  26,
                             "code":  "75010008",
                             "category":  "Limpieza",
                             "price":  37,
                             "name":  "Detergente en Polvo 900g",
                             "minStock":  4,
                             "id":  "8"
                         }
                     ]
    },
    {
        "id":  "restaurante",
        "name":  "Restaurante y Taquería",
        "description":  "Taquerías, fondas, comida rápida, pizzerías y restaurantes.",
        "icon":  "utensils",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 9876 5432",
                         "address":  "Av. Revolución #450",
                         "bizName":  "Taquería Los Parados",
                         "footerMessage":  "¡El mejor sabor de la ciudad! Servicio a domicilio.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  200,
                             "cost":  45,
                             "code":  "TACO01",
                             "category":  "Tacos",
                             "price":  95,
                             "name":  "Orden 5 Tacos al Pastor con Queso",
                             "minStock":  20,
                             "id":  "1"
                         },
                         {
                             "stock":  100,
                             "cost":  35,
                             "code":  "TACO02",
                             "category":  "Especiales",
                             "price":  75,
                             "name":  "Gringa de Bistec Gigante",
                             "minStock":  15,
                             "id":  "2"
                         },
                         {
                             "stock":  50,
                             "cost":  65,
                             "code":  "TACO03",
                             "category":  "Especiales",
                             "price":  145,
                             "name":  "Alambre Mixto con Tortillas",
                             "minStock":  10,
                             "id":  "3"
                         },
                         {
                             "stock":  40,
                             "cost":  25,
                             "code":  "TACO04",
                             "category":  "Entradas",
                             "price":  60,
                             "name":  "Guacamole Fresco con Totopos",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  80,
                             "cost":  10,
                             "code":  "TACO05",
                             "category":  "Bebidas",
                             "price":  35,
                             "name":  "Agua Fresca Horchata 1L",
                             "minStock":  10,
                             "id":  "5"
                         },
                         {
                             "stock":  120,
                             "cost":  12,
                             "code":  "TACO06",
                             "category":  "Bebidas",
                             "price":  28,
                             "name":  "Refresco Vidrio 355ml",
                             "minStock":  24,
                             "id":  "6"
                         },
                         {
                             "stock":  25,
                             "cost":  18,
                             "code":  "TACO07",
                             "category":  "Postres",
                             "price":  45,
                             "name":  "Flan Napolitano Casero",
                             "minStock":  5,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "cafeteria",
        "name":  "Cafetería y Repostería",
        "description":  "Coffee shops, barras de especialidad, panaderías y pastelerías.",
        "icon":  "coffee",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 4433 2211",
                         "address":  "Paseo de la Reforma #88",
                         "bizName":  "Aroma \u0026 Grano Café",
                         "footerMessage":  "Café 100% orgánico de altura. ¡Que tengas un gran día!",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  300,
                             "cost":  8,
                             "code":  "CAF01",
                             "category":  "Café Caliente",
                             "price":  42,
                             "name":  "Café Americano 12oz (Grano Chiapas)",
                             "minStock":  30,
                             "id":  "1"
                         },
                         {
                             "stock":  200,
                             "cost":  14,
                             "code":  "CAF02",
                             "category":  "Café Caliente",
                             "price":  65,
                             "name":  "Cappuccino Vainilla 16oz",
                             "minStock":  20,
                             "id":  "2"
                         },
                         {
                             "stock":  150,
                             "cost":  16,
                             "code":  "CAF03",
                             "category":  "Bebidas Frías",
                             "price":  78,
                             "name":  "Iced Caramel Macchiato 20oz",
                             "minStock":  15,
                             "id":  "3"
                         },
                         {
                             "stock":  120,
                             "cost":  18,
                             "code":  "CAF04",
                             "category":  "Frappés",
                             "price":  85,
                             "name":  "Frappé Mocha con Crema Batida",
                             "minStock":  10,
                             "id":  "4"
                         },
                         {
                             "stock":  30,
                             "cost":  15,
                             "code":  "CAF05",
                             "category":  "Panadería",
                             "price":  48,
                             "name":  "Croissant Mantequilla Almendrado",
                             "minStock":  5,
                             "id":  "5"
                         },
                         {
                             "stock":  18,
                             "cost":  22,
                             "code":  "CAF06",
                             "category":  "Postres",
                             "price":  75,
                             "name":  "Rebanada Cheesecake de Frutos Rojos",
                             "minStock":  4,
                             "id":  "6"
                         },
                         {
                             "stock":  20,
                             "cost":  28,
                             "code":  "CAF07",
                             "category":  "Desayunos",
                             "price":  89,
                             "name":  "Bagel de Pavo y Queso Crema",
                             "minStock":  5,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "farmacia",
        "name":  "Farmacia y Botica",
        "description":  "Farmacias de genéricos, patentes, boticas y material de curación.",
        "icon":  "pill",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 6677 8899",
                         "address":  "Calle Hidalgo #310",
                         "bizName":  "Farmacia San Rafael",
                         "footerMessage":  "Cuidando tu salud los 365 días del año. Consulte a su médico.",
                         "taxRate":  0
                     },
        "products":  [
                         {
                             "stock":  80,
                             "cost":  8.5,
                             "code":  "FAR01",
                             "category":  "Medicamentos",
                             "price":  25,
                             "name":  "Paracetamol 500mg Caja 20 Tabletas",
                             "minStock":  15,
                             "id":  "1"
                         },
                         {
                             "stock":  60,
                             "cost":  12,
                             "code":  "FAR02",
                             "category":  "Medicamentos",
                             "price":  38,
                             "name":  "Ibuprofeno 400mg Caja 10 Cápsulas",
                             "minStock":  12,
                             "id":  "2"
                         },
                         {
                             "stock":  50,
                             "cost":  14,
                             "code":  "FAR03",
                             "category":  "Medicamentos",
                             "price":  42,
                             "name":  "Omeprazol 20mg Caja 14 Cápsulas",
                             "minStock":  10,
                             "id":  "3"
                         },
                         {
                             "stock":  40,
                             "cost":  16,
                             "code":  "FAR04",
                             "category":  "Curación",
                             "price":  34,
                             "name":  "Alcohol Etílico 70° Frasco 500ml",
                             "minStock":  8,
                             "id":  "4"
                         },
                         {
                             "stock":  50,
                             "cost":  11,
                             "code":  "FAR05",
                             "category":  "Curación",
                             "price":  26,
                             "name":  "Gasas Estériles 10x10cm Paquete 10pz",
                             "minStock":  10,
                             "id":  "5"
                         },
                         {
                             "stock":  45,
                             "cost":  15,
                             "code":  "FAR06",
                             "category":  "Bebidas Salud",
                             "price":  32,
                             "name":  "Suero Rehidratante Oral 500ml Fresa",
                             "minStock":  10,
                             "id":  "6"
                         },
                         {
                             "stock":  25,
                             "cost":  55,
                             "code":  "FAR07",
                             "category":  "Vitaminas",
                             "price":  115,
                             "name":  "Vitamina C + Zinc 30 Tabletas Efervescentes",
                             "minStock":  5,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "ferreteria",
        "name":  "Ferretería y Tlapalería",
        "description":  "Materiales eléctricos, plomería, tornillería y herramientas.",
        "icon":  "wrench",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 2211 4455",
                         "address":  "Calzada Industrial #12",
                         "bizName":  "Ferretería El Tornillo Fuerte",
                         "footerMessage":  "Todo para la construcción y el hogar. Garantía de fábrica.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  18,
                             "cost":  75,
                             "code":  "FER01",
                             "category":  "Herramientas",
                             "price":  145,
                             "name":  "Martillo de Uña Curva 16oz Mango Fibra",
                             "minStock":  4,
                             "id":  "1"
                         },
                         {
                             "stock":  60,
                             "cost":  9,
                             "code":  "FER02",
                             "category":  "Electricidad",
                             "price":  22,
                             "name":  "Cinta de Aislar PVC Negra 19mm x 18m",
                             "minStock":  15,
                             "id":  "2"
                         },
                         {
                             "stock":  50,
                             "cost":  14,
                             "code":  "FER03",
                             "category":  "Iluminación",
                             "price":  32,
                             "name":  "Foco LED 10W Luz Blanca E27",
                             "minStock":  10,
                             "id":  "3"
                         },
                         {
                             "stock":  12,
                             "cost":  85,
                             "code":  "FER04",
                             "category":  "Herramientas",
                             "price":  165,
                             "name":  "Llave Ajustable Perico 8 Pulgadas",
                             "minStock":  3,
                             "id":  "4"
                         },
                         {
                             "stock":  80,
                             "cost":  6,
                             "code":  "FER05",
                             "category":  "Plomería",
                             "price":  16,
                             "name":  "Cinta Teflón para Plomería 3/4 x 10m",
                             "minStock":  20,
                             "id":  "5"
                         },
                         {
                             "stock":  30,
                             "cost":  15,
                             "code":  "FER06",
                             "category":  "Accesorios",
                             "price":  38,
                             "name":  "Broca para Concreto 1/4 Pulgada",
                             "minStock":  6,
                             "id":  "6"
                         },
                         {
                             "stock":  10,
                             "cost":  160,
                             "code":  "FER07",
                             "category":  "Pinturas",
                             "price":  295,
                             "name":  "Pintura Vinílica Blanca 4L Galón",
                             "minStock":  2,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "papeleria",
        "name":  "Papelería y Librería",
        "description":  "Útiles escolares, copias, papelería de oficina y manualidades.",
        "icon":  "book-open",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 3322 1100",
                         "address":  "Frente a Esc. Secundaria #5",
                         "bizName":  "Papelería \u0026 Copias El Lápiz Mágico",
                         "footerMessage":  "¡Éxito en tus estudios y proyectos escolares!",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  70,
                             "cost":  18,
                             "code":  "PAP01",
                             "category":  "Cuadernos",
                             "price":  36,
                             "name":  "Cuaderno Profesional Raya 100 Hojas",
                             "minStock":  15,
                             "id":  "1"
                         },
                         {
                             "stock":  150,
                             "cost":  4,
                             "code":  "PAP02",
                             "category":  "Escritura",
                             "price":  10,
                             "name":  "Bolígrafo Punto Medio Tinta Negra",
                             "minStock":  30,
                             "id":  "2"
                         },
                         {
                             "stock":  25,
                             "cost":  75,
                             "code":  "PAP03",
                             "category":  "Papel",
                             "price":  125,
                             "name":  "Paquete Hojas Blancas Carta 500h",
                             "minStock":  5,
                             "id":  "3"
                         },
                         {
                             "stock":  40,
                             "cost":  11,
                             "code":  "PAP04",
                             "category":  "Adhesivos",
                             "price":  24,
                             "name":  "Pegamento en Barra 21g Lavable",
                             "minStock":  8,
                             "id":  "4"
                         },
                         {
                             "stock":  35,
                             "cost":  32,
                             "code":  "PAP05",
                             "category":  "Arte",
                             "price":  65,
                             "name":  "Caja Colores de Madera 12 Piezas",
                             "minStock":  6,
                             "id":  "5"
                         },
                         {
                             "stock":  30,
                             "cost":  18,
                             "code":  "PAP06",
                             "category":  "Geometría",
                             "price":  42,
                             "name":  "Juego de Geometría Escolar 5 Piezas",
                             "minStock":  6,
                             "id":  "6"
                         },
                         {
                             "stock":  9999,
                             "cost":  0.3,
                             "code":  "PAP07",
                             "category":  "Servicios",
                             "price":  2,
                             "name":  "Servicio Impresión/Copia B/N Carta",
                             "minStock":  100,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "boutique",
        "name":  "Boutique de Ropa y Moda",
        "description":  "Tiendas de ropa para dama, caballero, niños y accesorios de vestir.",
        "icon":  "shirt",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 7788 9900",
                         "address":  "Plaza Comercial Galerías Local 24",
                         "bizName":  "Boutique Trendy Chic",
                         "footerMessage":  "Viste con estilo y confianza. Cambios hasta 15 días con ticket.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  45,
                             "cost":  80,
                             "code":  "ROP01",
                             "category":  "Playeras",
                             "price":  189,
                             "name":  "Playera Algodón Básica Cuello Redondo",
                             "minStock":  10,
                             "id":  "1"
                         },
                         {
                             "stock":  30,
                             "cost":  220,
                             "code":  "ROP02",
                             "category":  "Pantalones",
                             "price":  490,
                             "name":  "Jeans Mezclilla Slim Fit",
                             "minStock":  8,
                             "id":  "2"
                         },
                         {
                             "stock":  25,
                             "cost":  120,
                             "code":  "ROP03",
                             "category":  "Blusas",
                             "price":  285,
                             "name":  "Blusa Casual con Estampado Floral",
                             "minStock":  5,
                             "id":  "3"
                         },
                         {
                             "stock":  20,
                             "cost":  190,
                             "code":  "ROP04",
                             "category":  "Abrigos",
                             "price":  420,
                             "name":  "Sudadera Oversize con Capucha",
                             "minStock":  4,
                             "id":  "4"
                         },
                         {
                             "stock":  15,
                             "cost":  180,
                             "code":  "ROP05",
                             "category":  "Vestidos",
                             "price":  399,
                             "name":  "Vestido Midi de Verano Tirantes",
                             "minStock":  3,
                             "id":  "5"
                         },
                         {
                             "stock":  20,
                             "cost":  95,
                             "code":  "ROP06",
                             "category":  "Accesorios",
                             "price":  220,
                             "name":  "Cinturón Piel Genuina Hebilla Metálica",
                             "minStock":  5,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "zapateria",
        "name":  "Zapatería y Calzado",
        "description":  "Tiendas de tenis deportivos, zapatos formales, botas y sandalias.",
        "icon":  "footprints",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 1199 8877",
                         "address":  "Av. Madero #512",
                         "bizName":  "Zapatería CalzaBien",
                         "footerMessage":  "Comodidad y durabilidad en cada paso. ¡Vuelva pronto!",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  20,
                             "cost":  350,
                             "code":  "ZAP01",
                             "category":  "Deportivo",
                             "price":  799,
                             "name":  "Tenis Running Ultra Comfort Hombre",
                             "minStock":  4,
                             "id":  "1"
                         },
                         {
                             "stock":  15,
                             "cost":  420,
                             "code":  "ZAP02",
                             "category":  "Formal",
                             "price":  899,
                             "name":  "Zapatos Vestir Piel Negro Caballero",
                             "minStock":  3,
                             "id":  "2"
                         },
                         {
                             "stock":  18,
                             "cost":  380,
                             "code":  "ZAP03",
                             "category":  "Botas",
                             "price":  749,
                             "name":  "Botines Casuales Dama Tacón Medio",
                             "minStock":  4,
                             "id":  "3"
                         },
                         {
                             "stock":  30,
                             "cost":  90,
                             "code":  "ZAP04",
                             "category":  "Sandalias",
                             "price":  220,
                             "name":  "Sandalias Cómodas Playa/Piscina",
                             "minStock":  6,
                             "id":  "4"
                         },
                         {
                             "stock":  25,
                             "cost":  18,
                             "code":  "ZAP05",
                             "category":  "Cuidado",
                             "price":  45,
                             "name":  "Grasa Crema Lustradora para Calzado",
                             "minStock":  5,
                             "id":  "5"
                         },
                         {
                             "stock":  40,
                             "cost":  35,
                             "code":  "ZAP06",
                             "category":  "Accesorios",
                             "price":  89,
                             "name":  "Calcetas Deportivas Paquete 3 Pares",
                             "minStock":  8,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "carniceria",
        "name":  "Carnicería y Pollería",
        "description":  "Carnes rojas, pollo, cerdo, embutidos y cortes finos.",
        "icon":  "drumstick",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 6543 2100",
                         "address":  "Mercado Municipal Local 14-16",
                         "bizName":  "Carnicería \u0026 Cortes Selectos El Novillo",
                         "footerMessage":  "Carne fresca y de calidad garantizada diariamente.",
                         "taxRate":  0
                     },
        "products":  [
                         {
                             "stock":  50,
                             "cost":  140,
                             "code":  "CAR01",
                             "category":  "Res",
                             "price":  195,
                             "name":  "Bistec de Res Suave (1 kg)",
                             "minStock":  10,
                             "id":  "1"
                         },
                         {
                             "stock":  40,
                             "cost":  110,
                             "code":  "CAR02",
                             "category":  "Res",
                             "price":  160,
                             "name":  "Carne Molida Especial de Res (1 kg)",
                             "minStock":  8,
                             "id":  "2"
                         },
                         {
                             "stock":  60,
                             "cost":  95,
                             "code":  "CAR03",
                             "category":  "Pollo",
                             "price":  145,
                             "name":  "Pechuga de Pollo Deshuesada (1 kg)",
                             "minStock":  12,
                             "id":  "3"
                         },
                         {
                             "stock":  45,
                             "cost":  50,
                             "code":  "CAR04",
                             "category":  "Pollo",
                             "price":  78,
                             "name":  "Pierna y Muslo Fresco (1 kg)",
                             "minStock":  10,
                             "id":  "4"
                         },
                         {
                             "stock":  35,
                             "cost":  90,
                             "code":  "CAR05",
                             "category":  "Cerdo",
                             "price":  135,
                             "name":  "Costilla de Cerdo para Asar (1 kg)",
                             "minStock":  8,
                             "id":  "5"
                         },
                         {
                             "stock":  25,
                             "cost":  80,
                             "code":  "CAR06",
                             "category":  "Embutidos",
                             "price":  125,
                             "name":  "Chorizo Artesanal Español (1 kg)",
                             "minStock":  5,
                             "id":  "6"
                         },
                         {
                             "stock":  30,
                             "cost":  28,
                             "code":  "CAR07",
                             "category":  "Asador",
                             "price":  55,
                             "name":  "Bolsa de Carbón Vegetal de Encino 3kg",
                             "minStock":  6,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "fruteria",
        "name":  "Frutería y Verdulería",
        "description":  "Frutas frescas, verduras, chiles secos, semillas y legumbres.",
        "icon":  "apple",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 7766 5544",
                         "address":  "Esq. Niños Héroes con Juárez",
                         "bizName":  "Frutería La Huerta Fresca",
                         "footerMessage":  "Del campo a tu mesa con la máxima frescura.",
                         "taxRate":  0
                     },
        "products":  [
                         {
                             "stock":  45,
                             "cost":  28,
                             "code":  "FRU01",
                             "category":  "Frutas",
                             "price":  42,
                             "name":  "Manzana Roja Golden (1 kg)",
                             "minStock":  10,
                             "id":  "1"
                         },
                         {
                             "stock":  50,
                             "cost":  14,
                             "code":  "FRU02",
                             "category":  "Frutas",
                             "price":  22,
                             "name":  "Plátano Tabasco Maduro (1 kg)",
                             "minStock":  12,
                             "id":  "2"
                         },
                         {
                             "stock":  60,
                             "cost":  16,
                             "code":  "FRU03",
                             "category":  "Verduras",
                             "price":  26,
                             "name":  "Jitomate Saladette Rojo (1 kg)",
                             "minStock":  15,
                             "id":  "3"
                         },
                         {
                             "stock":  30,
                             "cost":  45,
                             "code":  "FRU04",
                             "category":  "Verduras",
                             "price":  68,
                             "name":  "Aguacate Hass Calidad Extra (1 kg)",
                             "minStock":  8,
                             "id":  "4"
                         },
                         {
                             "stock":  40,
                             "cost":  15,
                             "code":  "FRU05",
                             "category":  "Verduras",
                             "price":  24,
                             "name":  "Cebolla Blanca Limpia (1 kg)",
                             "minStock":  10,
                             "id":  "5"
                         },
                         {
                             "stock":  50,
                             "cost":  18,
                             "code":  "FRU06",
                             "category":  "Cítricos",
                             "price":  29,
                             "name":  "Limón con Semilla Jugoso (1 kg)",
                             "minStock":  10,
                             "id":  "6"
                         },
                         {
                             "stock":  40,
                             "cost":  22,
                             "code":  "FRU07",
                             "category":  "Verduras",
                             "price":  34,
                             "name":  "Papa Blanca Lavada (1 kg)",
                             "minStock":  8,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "veterinaria",
        "name":  "Veterinaria y Pet Shop",
        "description":  "Alimentos para mascotas, farmacia veterinaria, accesorios y baños.",
        "icon":  "dog",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 8899 0011",
                         "address":  "Blvd. de las Mascotas #205",
                         "bizName":  "Clínica Veterinaria \u0026 Pet Shop Huellitas",
                         "footerMessage":  "Amamos y cuidamos a tu mejor amigo. Citas y urgencias.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  15,
                             "cost":  520,
                             "code":  "PET01",
                             "category":  "Alimento",
                             "price":  780,
                             "name":  "Alimento Perro Adulto Bulto 15kg",
                             "minStock":  3,
                             "id":  "1"
                         },
                         {
                             "stock":  20,
                             "cost":  140,
                             "code":  "PET02",
                             "category":  "Alimento",
                             "price":  225,
                             "name":  "Alimento Gato Sabor Pescado 3kg",
                             "minStock":  4,
                             "id":  "2"
                         },
                         {
                             "stock":  25,
                             "cost":  65,
                             "code":  "PET03",
                             "category":  "Higiene",
                             "price":  120,
                             "name":  "Arena para Gato Aglutinante 5kg",
                             "minStock":  5,
                             "id":  "3"
                         },
                         {
                             "stock":  30,
                             "cost":  85,
                             "code":  "PET04",
                             "category":  "Farmacia",
                             "price":  175,
                             "name":  "Pipeta Antipulgas y Garrapatas Perro",
                             "minStock":  6,
                             "id":  "4"
                         },
                         {
                             "stock":  14,
                             "cost":  90,
                             "code":  "PET05",
                             "category":  "Paseo",
                             "price":  210,
                             "name":  "Correa Retráctil 5 Metros Resistente",
                             "minStock":  3,
                             "id":  "5"
                         },
                         {
                             "stock":  18,
                             "cost":  48,
                             "code":  "PET06",
                             "category":  "Higiene",
                             "price":  115,
                             "name":  "Shampoo Hipoalergénico Avena 500ml",
                             "minStock":  4,
                             "id":  "6"
                         },
                         {
                             "stock":  999,
                             "cost":  40,
                             "code":  "PET07",
                             "category":  "Servicios",
                             "price":  180,
                             "name":  "Servicio de Baño y Corte Raza Pequeña",
                             "minStock":  50,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "barberia",
        "name":  "Barbería y Salón de Belleza",
        "description":  "Barberías masculinas, salones de belleza, estética y spa.",
        "icon":  "scissors",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 4321 8765",
                         "address":  "Calle Londres #77, Zona Rosa",
                         "bizName":  "Barbería \u0026 Estilo El Caballero",
                         "footerMessage":  "Tu imagen es tu mejor carta de presentación. ¡Vuelve pronto!",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  999,
                             "cost":  20,
                             "code":  "BAR01",
                             "category":  "Servicios",
                             "price":  150,
                             "name":  "Corte Clásico / Fade con Navaja",
                             "minStock":  50,
                             "id":  "1"
                         },
                         {
                             "stock":  999,
                             "cost":  15,
                             "code":  "BAR02",
                             "category":  "Servicios",
                             "price":  110,
                             "name":  "Perfilado y Arreglo de Barba con Toalla Caliente",
                             "minStock":  50,
                             "id":  "2"
                         },
                         {
                             "stock":  999,
                             "cost":  35,
                             "code":  "BAR03",
                             "category":  "Paquetes",
                             "price":  230,
                             "name":  "Paquete Completo (Corte + Barba + Mascarilla)",
                             "minStock":  50,
                             "id":  "3"
                         },
                         {
                             "stock":  24,
                             "cost":  65,
                             "code":  "BAR04",
                             "category":  "Productos",
                             "price":  160,
                             "name":  "Pomada Fijadora Efecto Mate 100g",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  16,
                             "cost":  75,
                             "code":  "BAR05",
                             "category":  "Productos",
                             "price":  185,
                             "name":  "Aceite Hidratante para Barba 30ml",
                             "minStock":  3,
                             "id":  "5"
                         },
                         {
                             "stock":  18,
                             "cost":  55,
                             "code":  "BAR06",
                             "category":  "Productos",
                             "price":  140,
                             "name":  "Cera Negra Cubrecintas 150ml",
                             "minStock":  4,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "electronica",
        "name":  "Electrónica y Celulares",
        "description":  "Accesorios móviles, cables, cargadores, audio y reparaciones.",
        "icon":  "smartphone",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 9900 1122",
                         "address":  "Plaza de la Tecnología Local 108",
                         "bizName":  "TechZone Reparaciones \u0026 Celulares",
                         "footerMessage":  "Garantía de 30 días en accesorios y reparaciones.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  40,
                             "cost":  30,
                             "code":  "CEL01",
                             "category":  "Cables",
                             "price":  95,
                             "name":  "Cable USB Tipo C Carga Rápida 2m",
                             "minStock":  8,
                             "id":  "1"
                         },
                         {
                             "stock":  25,
                             "cost":  70,
                             "code":  "CEL02",
                             "category":  "Cargadores",
                             "price":  199,
                             "name":  "Cubo Cargador 20W USB-C Rápido",
                             "minStock":  5,
                             "id":  "2"
                         },
                         {
                             "stock":  60,
                             "cost":  15,
                             "code":  "CEL03",
                             "category":  "Protección",
                             "price":  80,
                             "name":  "Mica de Cristal Templado 9D Universal",
                             "minStock":  12,
                             "id":  "3"
                         },
                         {
                             "stock":  20,
                             "cost":  120,
                             "code":  "CEL04",
                             "category":  "Audio",
                             "price":  320,
                             "name":  "Audífonos Inalámbricos Bluetooth TWS",
                             "minStock":  4,
                             "id":  "4"
                         },
                         {
                             "stock":  30,
                             "cost":  45,
                             "code":  "CEL05",
                             "category":  "Fundas",
                             "price":  135,
                             "name":  "Funda Uso Rudo Antigolpes",
                             "minStock":  6,
                             "id":  "5"
                         },
                         {
                             "stock":  999,
                             "cost":  40,
                             "code":  "CEL06",
                             "category":  "Servicio",
                             "price":  250,
                             "name":  "Servicio Mano de Obra Cambio de Batería",
                             "minStock":  20,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "joyeria",
        "name":  "Joyería y Accesorios",
        "description":  "Joyería fina en plata, oro laminado, relojería y bisutería fina.",
        "icon":  "gem",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 2233 4455",
                         "address":  "Centro Joyero Piso 2 Local 201",
                         "bizName":  "Joyería \u0026 Relojería Diamante Real",
                         "footerMessage":  "Plata Ley .925 garantizada. Incluye estuche de regalo.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  12,
                             "cost":  280,
                             "code":  "JOY01",
                             "category":  "Cadenas",
                             "price":  650,
                             "name":  "Cadena de Plata Ley .925 Tejido Fígaro 50cm",
                             "minStock":  3,
                             "id":  "1"
                         },
                         {
                             "stock":  10,
                             "cost":  190,
                             "code":  "JOY02",
                             "category":  "Anillos",
                             "price":  480,
                             "name":  "Anillo Compromiso Plata con Zirconia",
                             "minStock":  2,
                             "id":  "2"
                         },
                         {
                             "stock":  20,
                             "cost":  75,
                             "code":  "JOY03",
                             "category":  "Aretes",
                             "price":  195,
                             "name":  "Aretes Broquel Oro Laminado 18k Bolita",
                             "minStock":  5,
                             "id":  "3"
                         },
                         {
                             "stock":  8,
                             "cost":  320,
                             "code":  "JOY04",
                             "category":  "Relojes",
                             "price":  790,
                             "name":  "Reloj Cuarzo Hombre Extensible Acero",
                             "minStock":  2,
                             "id":  "4"
                         },
                         {
                             "stock":  14,
                             "cost":  210,
                             "code":  "JOY05",
                             "category":  "Pulseras",
                             "price":  520,
                             "name":  "Pulsera Tejido Cartier Plata .925",
                             "minStock":  3,
                             "id":  "5"
                         },
                         {
                             "stock":  25,
                             "cost":  30,
                             "code":  "JOY06",
                             "category":  "Limpieza",
                             "price":  85,
                             "name":  "Líquido Limpiador de Plata y Joyas 120ml",
                             "minStock":  5,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "floreria",
        "name":  "Florería y Detalles",
        "description":  "Ramos florales, arreglos para ocasiones especiales, plantas y regalos.",
        "icon":  "flower-2",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 5566 7788",
                         "address":  "Av. de las Rosas #14",
                         "bizName":  "Florería Rosas \u0026 Jazmines",
                         "footerMessage":  "Flores frescas de invernadero. Expresa tus sentimientos con flores.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  20,
                             "cost":  110,
                             "code":  "FLO01",
                             "category":  "Ramos",
                             "price":  280,
                             "name":  "Ramo de 12 Rosas Rojas con Envoltura Fina",
                             "minStock":  4,
                             "id":  "1"
                         },
                         {
                             "stock":  15,
                             "cost":  160,
                             "code":  "FLO02",
                             "category":  "Arreglos",
                             "price":  390,
                             "name":  "Arreglo Floral Girasoles en Caja Sombrerera",
                             "minStock":  3,
                             "id":  "2"
                         },
                         {
                             "stock":  8,
                             "cost":  180,
                             "code":  "FLO03",
                             "category":  "Plantas",
                             "price":  420,
                             "name":  "Planta Orquídea en Maceta Cerámica",
                             "minStock":  2,
                             "id":  "3"
                         },
                         {
                             "stock":  30,
                             "cost":  25,
                             "code":  "FLO04",
                             "category":  "Detalles",
                             "price":  65,
                             "name":  "Planta Suculenta en Maceta Decorada",
                             "minStock":  6,
                             "id":  "4"
                         },
                         {
                             "stock":  40,
                             "cost":  25,
                             "code":  "FLO05",
                             "category":  "Globos",
                             "price":  75,
                             "name":  "Globo Metálico con Helio Feliz Día",
                             "minStock":  8,
                             "id":  "5"
                         },
                         {
                             "stock":  18,
                             "cost":  55,
                             "code":  "FLO06",
                             "category":  "Regalos",
                             "price":  130,
                             "name":  "Caja de Chocolates Finos 100g",
                             "minStock":  4,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "licoreria",
        "name":  "Licorería y Vinos",
        "description":  "Vinos y licores, cervezas artesanales, botanas y refrescos.",
        "icon":  "wine",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 6677 1122",
                         "address":  "Av. Insurgentes Sur #1204",
                         "bizName":  "Vinos \u0026 Licores La Barrica",
                         "footerMessage":  "El consumo responsable es tu decisión. Venta solo a mayores de edad.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  24,
                             "cost":  210,
                             "code":  "LIC01",
                             "category":  "Tequilas",
                             "price":  340,
                             "name":  "Tequila Reposado 100% Agave 750ml",
                             "minStock":  6,
                             "id":  "1"
                         },
                         {
                             "stock":  18,
                             "cost":  240,
                             "code":  "LIC02",
                             "category":  "Whiskies",
                             "price":  395,
                             "name":  "Whisky Escocés Etiqueta Roja 750ml",
                             "minStock":  4,
                             "id":  "2"
                         },
                         {
                             "stock":  40,
                             "cost":  75,
                             "code":  "LIC03",
                             "category":  "Cervezas",
                             "price":  115,
                             "name":  "Six Pack Cerveza Clara Lata 355ml",
                             "minStock":  10,
                             "id":  "3"
                         },
                         {
                             "stock":  20,
                             "cost":  130,
                             "code":  "LIC04",
                             "category":  "Vinos",
                             "price":  220,
                             "name":  "Vino Tinto Malbec Argentino 750ml",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  16,
                             "cost":  140,
                             "code":  "LIC05",
                             "category":  "Licores",
                             "price":  235,
                             "name":  "Vodka Clásico Importado 750ml",
                             "minStock":  4,
                             "id":  "5"
                         },
                         {
                             "stock":  30,
                             "cost":  16,
                             "code":  "LIC06",
                             "category":  "Mezcladores",
                             "price":  35,
                             "name":  "Bolsa de Hielo Purificado en Cubos 5kg",
                             "minStock":  6,
                             "id":  "6"
                         },
                         {
                             "stock":  35,
                             "cost":  15,
                             "code":  "LIC07",
                             "category":  "Mezcladores",
                             "price":  28,
                             "name":  "Agua Mineral Peñafiel 2L",
                             "minStock":  8,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "gimnasio",
        "name":  "Gimnasio y Suplementos",
        "description":  "Membresías de gimnasio, proteínas, creatinas y ropa deportiva.",
        "icon":  "dumbbell",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 8899 3344",
                         "address":  "Av. de los Deportes #400",
                         "bizName":  "Iron Fitness Club \u0026 Suplementos",
                         "footerMessage":  "No te rindas. Cada gota de sudor cuenta. ¡Buen entrenamiento!",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  15,
                             "cost":  680,
                             "code":  "FIT01",
                             "category":  "Proteínas",
                             "price":  1050,
                             "name":  "Proteína Whey Isolate Bote 2kg Vainilla",
                             "minStock":  3,
                             "id":  "1"
                         },
                         {
                             "stock":  25,
                             "cost":  240,
                             "code":  "FIT02",
                             "category":  "Creatina",
                             "price":  420,
                             "name":  "Creatina Monohidratada Micronizada 300g",
                             "minStock":  5,
                             "id":  "2"
                         },
                         {
                             "stock":  18,
                             "cost":  290,
                             "code":  "FIT03",
                             "category":  "Pre-Workout",
                             "price":  490,
                             "name":  "Pre-Entreno Explosivo 30 Servicios Ponche",
                             "minStock":  4,
                             "id":  "3"
                         },
                         {
                             "stock":  30,
                             "cost":  45,
                             "code":  "FIT04",
                             "category":  "Accesorios",
                             "price":  120,
                             "name":  "Termo Vaso Mezclador Shaker 700ml",
                             "minStock":  6,
                             "id":  "4"
                         },
                         {
                             "stock":  40,
                             "cost":  14,
                             "code":  "FIT05",
                             "category":  "Bebidas",
                             "price":  28,
                             "name":  "Bebida Isotónica Rehidratante 600ml",
                             "minStock":  10,
                             "id":  "5"
                         },
                         {
                             "stock":  999,
                             "cost":  0,
                             "code":  "FIT06",
                             "category":  "Membresías",
                             "price":  70,
                             "name":  "Pase Diario Visita Libre Gimnasio",
                             "minStock":  50,
                             "id":  "6"
                         },
                         {
                             "stock":  999,
                             "cost":  0,
                             "code":  "FIT07",
                             "category":  "Membresías",
                             "price":  550,
                             "name":  "Membresía Mensual Acceso Total",
                             "minStock":  50,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "taller",
        "name":  "Taller Mecánico y Refacciones",
        "description":  "Refacciones automotrices, aceites, afinaciones y mano de obra.",
        "icon":  "car",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 1234 9988",
                         "address":  "Carretera Nacional Km 5",
                         "bizName":  "Taller Mecánico \u0026 Refacciones Automotrices Express",
                         "footerMessage":  "Garantía en mano de obra y refacciones. Su seguridad es primero.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  20,
                             "cost":  380,
                             "code":  "MEC01",
                             "category":  "Aceites",
                             "price":  620,
                             "name":  "Aceite Motor Sintético 5W-30 Garrafa 5L",
                             "minStock":  4,
                             "id":  "1"
                         },
                         {
                             "stock":  30,
                             "cost":  45,
                             "code":  "MEC02",
                             "category":  "Filtros",
                             "price":  110,
                             "name":  "Filtro de Aceite Automotriz Universal",
                             "minStock":  6,
                             "id":  "2"
                         },
                         {
                             "stock":  12,
                             "cost":  260,
                             "code":  "MEC03",
                             "category":  "Frenos",
                             "price":  480,
                             "name":  "Juego Balatas Cerámicas Delanteras",
                             "minStock":  3,
                             "id":  "3"
                         },
                         {
                             "stock":  24,
                             "cost":  95,
                             "code":  "MEC04",
                             "category":  "Fluidos",
                             "price":  185,
                             "name":  "Anticongelante Listo para Usar 50/50 1 Galón",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  20,
                             "cost":  35,
                             "code":  "MEC05",
                             "category":  "Fluidos",
                             "price":  85,
                             "name":  "Líquido para Frenos DOT 4 350ml",
                             "minStock":  5,
                             "id":  "5"
                         },
                         {
                             "stock":  999,
                             "cost":  30,
                             "code":  "MEC06",
                             "category":  "Servicio",
                             "price":  150,
                             "name":  "Servicio de Cambio de Aceite y Filtro (Mano de Obra)",
                             "minStock":  20,
                             "id":  "6"
                         },
                         {
                             "stock":  999,
                             "cost":  100,
                             "code":  "MEC07",
                             "category":  "Servicio",
                             "price":  650,
                             "name":  "Afinación Mayor 4 Cilindros (Mano de Obra)",
                             "minStock":  10,
                             "id":  "7"
                         }
                     ]
    },
    {
        "id":  "lavanderia",
        "name":  "Lavandería y Tintorería",
        "description":  "Lavado por kilo, tintorería, planchado y lavado de cobertores.",
        "icon":  "waves",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 7788 3344",
                         "address":  "Calle Los Fresnos #212",
                         "bizName":  "Lavandería \u0026 Tintorería Burbujas Limpias",
                         "footerMessage":  "Cuidamos tus prendas con amor. Reclamos dentro de 48 horas.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  999,
                             "cost":  18,
                             "code":  "LAV01",
                             "category":  "Lavado",
                             "price":  75,
                             "name":  "Carga de Lavado y Secado (hasta 6kg)",
                             "minStock":  50,
                             "id":  "1"
                         },
                         {
                             "stock":  999,
                             "cost":  25,
                             "code":  "LAV02",
                             "category":  "Planchado",
                             "price":  120,
                             "name":  "Servicio Planchado de Camisas / Prendas (Docena)",
                             "minStock":  50,
                             "id":  "2"
                         },
                         {
                             "stock":  999,
                             "cost":  28,
                             "code":  "LAV03",
                             "category":  "Blancos",
                             "price":  140,
                             "name":  "Lavado de Edredón / Cobertores King Size",
                             "minStock":  20,
                             "id":  "3"
                         },
                         {
                             "stock":  999,
                             "cost":  35,
                             "code":  "LAV04",
                             "category":  "Tintorería",
                             "price":  160,
                             "name":  "Tintorería Traje Completo 2 Piezas",
                             "minStock":  20,
                             "id":  "4"
                         },
                         {
                             "stock":  999,
                             "cost":  45,
                             "code":  "LAV05",
                             "category":  "Tintorería",
                             "price":  190,
                             "name":  "Tintorería Vestido de Noche o Fiesta",
                             "minStock":  20,
                             "id":  "5"
                         },
                         {
                             "stock":  30,
                             "cost":  22,
                             "code":  "LAV06",
                             "category":  "Productos",
                             "price":  45,
                             "name":  "Detergente Líquido Aroma Floral Botella 1L",
                             "minStock":  5,
                             "id":  "6"
                         }
                     ]
    },
    {
        "id":  "optica",
        "name":  "Óptica y Lentes",
        "description":  "Armazones oftálmicos, lentes de sol, micas y lentes de contacto.",
        "icon":  "glasses",
        "settings":  {
                         "currency":  "$",
                         "phone":  "55 9911 2233",
                         "address":  "Av. Universidad #800",
                         "bizName":  "Óptica Visión Clara",
                         "footerMessage":  "Salud visual para toda la familia. 1 año de garantía en armazón.",
                         "taxRate":  16
                     },
        "products":  [
                         {
                             "stock":  20,
                             "cost":  320,
                             "code":  "OPT01",
                             "category":  "Armazones",
                             "price":  850,
                             "name":  "Armazón Oftálmico Unisex Titanio Ligero",
                             "minStock":  4,
                             "id":  "1"
                         },
                         {
                             "stock":  18,
                             "cost":  220,
                             "code":  "OPT02",
                             "category":  "Solares",
                             "price":  590,
                             "name":  "Lentes de Sol Polarizados Protección UV400",
                             "minStock":  4,
                             "id":  "2"
                         },
                         {
                             "stock":  50,
                             "cost":  180,
                             "code":  "OPT03",
                             "category":  "Micas",
                             "price":  480,
                             "name":  "Micas Graduadas Antirreflejante Blue Block",
                             "minStock":  10,
                             "id":  "3"
                         },
                         {
                             "stock":  25,
                             "cost":  55,
                             "code":  "OPT04",
                             "category":  "Contactología",
                             "price":  135,
                             "name":  "Solución Líquida Lentes de Contacto 360ml",
                             "minStock":  5,
                             "id":  "4"
                         },
                         {
                             "stock":  60,
                             "cost":  8,
                             "code":  "OPT05",
                             "category":  "Accesorios",
                             "price":  25,
                             "name":  "Paño Limpiador Microfibra Antiestático",
                             "minStock":  15,
                             "id":  "5"
                         },
                         {
                             "stock":  999,
                             "cost":  0,
                             "code":  "OPT06",
                             "category":  "Servicio",
                             "price":  120,
                             "name":  "Examen Visual Computarizado Completo",
                             "minStock":  50,
                             "id":  "6"
                         }
                     ]
    }
];


const TEMPLATE_STYLES = [
    {
        "id":  "modern-pro",
        "name":  "Moderno Pro (Gestión Integral)",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "layout-dashboard",
        "tag":  "Estándar",
        "desc":  "Barra lateral completa, métricas en tiempo real, inventario y gestión de turnos."
    },
    {
        "id":  "touch-kiosk",
        "name":  "Pantalla Táctil Kiosco (Touch)",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "touchpad",
        "tag":  "Táctil",
        "desc":  "Botones táctiles gigantes para pulsar con los dedos en tablets y monitores touch."
    },
    {
        "id":  "fast-cashier",
        "name":  "Cajero Express Alta Velocidad",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "zap",
        "tag":  "Escáner",
        "desc":  "Diseñado para lector de código de barras y teclado numérico sin usar el ratón."
    },
    {
        "id":  "luxury-dark",
        "name":  "Boutique de Lujo (Dark \u0026 Gold)",
        "layout":  "pos-boutique-luxury.html",
        "icon":  "gem",
        "tag":  "Elegante",
        "desc":  "Fondo negro obsidiana, acentos dorados y tipografía refinada para alta gama."
    },
    {
        "id":  "retro-dos",
        "name":  "Terminal Retro MS-DOS 1995",
        "layout":  "pos-retro-vintage.html",
        "icon":  "terminal",
        "tag":  "Vintage",
        "desc":  "Estilo clásico de caja registradora de los 90s con fósforo verde y monospace."
    },
    {
        "id":  "minimal-white",
        "name":  "Minimalista Nórdico (Clean White)",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "sparkle",
        "tag":  "Limpio",
        "desc":  "Fondo blanco puro, bordes ultra delgados y tipografía contemporánea sin distracciones."
    },
    {
        "id":  "neon-night",
        "name":  "Neón Cyberpunk / Luces LED",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "sun",
        "tag":  "Neón",
        "desc":  "Interfaz oscura de alto impacto con bordes luminiscentes cian y magenta."
    },
    {
        "id":  "compact-counter",
        "name":  "Mostrador Compacto (Espacio Reducido)",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "minimize-2",
        "tag":  "Compacto",
        "desc":  "Optimizado para pantallas pequeñas o mostradores de cobro estrechos."
    },
    {
        "id":  "tablet-pos",
        "name":  "Modo Tablet Horizontal (iPad/Android)",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "tablet",
        "tag":  "Tablet",
        "desc":  "Layout apaisado ideal para colocar una tablet en el mostrador de atención."
    },
    {
        "id":  "high-contrast",
        "name":  "Alto Contraste y Accesibilidad",
        "layout":  "pos-boutique-luxury.html",
        "icon":  "eye",
        "tag":  "Accesible",
        "desc":  "Colores de máxima visibilidad y textos reforzados para agilizar la lectura."
    },
    {
        "id":  "specialty-gourmet",
        "name":  "Edición Especialidad / Gourmet",
        "layout":  "pos-boutique-luxury.html",
        "icon":  "award",
        "tag":  "Gourmet",
        "desc":  "Destaca ingredientes selectos, productos artesanales y recomendaciones."
    },
    {
        "id":  "express-togo",
        "name":  "Formato Express Para Llevar (To-Go)",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "clock",
        "tag":  "Rápido",
        "desc":  "Flujo de cobro en 2 toques directos para clientes de paso."
    },
    {
        "id":  "wholesale-bulk",
        "name":  "Formato Mayoreo y Distribución",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "boxes",
        "tag":  "Mayoreo",
        "desc":  "Cálculo ágil de paquetes, cajas cerradas y compras por volumen."
    },
    {
        "id":  "mall-store",
        "name":  "Sucursal Centro Comercial (Mall)",
        "layout":  "pos-retro-vintage.html",
        "icon":  "building-2",
        "tag":  "Retail",
        "desc":  "Preparado para alto tráfico de clientes y registro ágil de promociones."
    },
    {
        "id":  "thermal-58",
        "name":  "Ticket Térmico Clásico 58mm",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "receipt",
        "tag":  "Ticket 58mm",
        "desc":  "Configuración predeterminada para impresoras térmicas compactas de 58mm."
    },
    {
        "id":  "qr-receipt-80",
        "name":  "Ticket Moderno 80mm con Código QR",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "qr-code",
        "tag":  "Ticket QR",
        "desc":  "Ticket ancho con código QR para factura electrónica o contacto por WhatsApp."
    },
    {
        "id":  "self-service",
        "name":  "Kiosco de Autoservicio para Clientes",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "user-check",
        "tag":  "Autoservicio",
        "desc":  "Pantalla guiada y amigable para que el propio cliente seleccione y pague."
    },
    {
        "id":  "lounge-bar",
        "name":  "Modo Lounge \u0026 Nocturno",
        "layout":  "pos-boutique-luxury.html",
        "icon":  "moon",
        "tag":  "Nocturno",
        "desc":  "Acentos en tonos púrpura y ámbar suave para iluminación ambiental tenue."
    },
    {
        "id":  "eco-digital",
        "name":  "Ticket Digital Ecológico (Sin Papel)",
        "layout":  "pos-cajero-compacto.html",
        "icon":  "leaf",
        "tag":  "Eco/Digital",
        "desc":  "Prioriza el envío de ticket digital y comprobantes en PDF sin imprimir."
    },
    {
        "id":  "franchise-multi",
        "name":  "Edición Franquicia / Multi-Turno",
        "layout":  "pos-pantalla-tactil.html",
        "icon":  "layers",
        "tag":  "Franquicia",
        "desc":  "Preparado para control de múltiples cajeros, arqueos cruzados y auditoría."
    }
];

// ==================== TEMAS VISUALES DE PLANTILLAS ====================
const STYLE_THEMES = {
  'modern-pro': {
    accent: '#0284c7', border: '#38bdf8', chromeBg: '#0f172a', chromeBorder: '#1e293b',
    urlBg: '#1e293b', urlText: '#94a3b8', screenBg: '#f8fafc', textColor: '#0f172a', textMuted: '#64748b',
    topbarBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', topbarBorder: '#0284c7', topbarText: '#ffffff',
    heroBg: '#e0f2fe', heroBorder: '#bae6fd', heroTitle: '#0369a1', cardBg: '#ffffff', cardBorder: '#e2e8f0',
    cardText: '#1e293b', ticketBg: '#ffffff', ticketBorder: '#bae6fd', bottomBg: '#f1f5f9', bottomBorder: '#e2e8f0',
    overlayBg: 'rgba(2, 132, 199, 0.45)', isDark: false
  },
  'touch-kiosk': {
    accent: '#ea580c', border: '#fb923c', chromeBg: '#1c1917', chromeBorder: '#292524',
    urlBg: '#292524', urlText: '#d6d3d1', screenBg: '#fff7ed', textColor: '#292524', textMuted: '#78716c',
    topbarBg: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', topbarBorder: '#ea580c', topbarText: '#ffffff',
    heroBg: '#ffedd5', heroBorder: '#fed7aa', heroTitle: '#9a3412', cardBg: '#ffffff', cardBorder: '#fed7aa',
    cardText: '#292524', ticketBg: '#ffffff', ticketBorder: '#fed7aa', bottomBg: '#ffedd5', bottomBorder: '#fed7aa',
    overlayBg: 'rgba(234, 88, 12, 0.45)', isDark: false
  },
  'fast-cashier': {
    accent: '#059669', border: '#34d399', chromeBg: '#064e3b', chromeBorder: '#047857',
    urlBg: '#065f46', urlText: '#a7f3d0', screenBg: '#ecfdf5', textColor: '#064e3b', textMuted: '#047857',
    topbarBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)', topbarBorder: '#059669', topbarText: '#ffffff',
    heroBg: '#d1fae5', heroBorder: '#a7f3d0', heroTitle: '#065f46', cardBg: '#ffffff', cardBorder: '#a7f3d0',
    cardText: '#064e3b', ticketBg: '#ffffff', ticketBorder: '#a7f3d0', bottomBg: '#d1fae5', bottomBorder: '#a7f3d0',
    overlayBg: 'rgba(5, 150, 105, 0.45)', isDark: false
  },
  'luxury-dark': {
    accent: '#d97706', border: '#f59e0b', chromeBg: '#09090b', chromeBorder: '#27272a',
    urlBg: '#18181b', urlText: '#fef08a', screenBg: '#121215', textColor: '#fafafa', textMuted: '#a1a1aa',
    topbarBg: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)', topbarBorder: '#d97706', topbarText: '#fbbf24',
    heroBg: '#1c1917', heroBorder: '#78350f', heroTitle: '#fef08a', cardBg: '#18181b', cardBorder: '#3f3f46',
    cardText: '#f4f4f5', ticketBg: '#18181b', ticketBorder: '#78350f', bottomBg: '#18181b', bottomBorder: '#27272a',
    overlayBg: 'rgba(217, 119, 6, 0.5)', isDark: true
  },
  'retro-dos': {
    accent: '#22c55e', border: '#4ade80', chromeBg: '#052e16', chromeBorder: '#14532d',
    urlBg: '#0a0a0a', urlText: '#86efac', screenBg: '#020617', textColor: '#4ade80', textMuted: '#22c55e',
    topbarBg: '#0f172a', topbarBorder: '#22c55e', topbarText: '#4ade80',
    heroBg: '#052e16', heroBorder: '#166534', heroTitle: '#86efac', cardBg: '#0a0f0d', cardBorder: '#15803d',
    cardText: '#86efac', ticketBg: '#0a0f0d', ticketBorder: '#15803d', bottomBg: '#052e16', bottomBorder: '#166534',
    overlayBg: 'rgba(34, 197, 94, 0.45)', isDark: true
  },
  'minimal-white': {
    accent: '#4f46e5', border: '#818cf8', chromeBg: '#f8fafc', chromeBorder: '#e2e8f0',
    urlBg: '#ffffff', urlText: '#64748b', screenBg: '#ffffff', textColor: '#0f172a', textMuted: '#64748b',
    topbarBg: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)', topbarBorder: '#4f46e5', topbarText: '#ffffff',
    heroBg: '#f1f5f9', heroBorder: '#cbd5e1', heroTitle: '#312e81', cardBg: '#f8fafc', cardBorder: '#e2e8f0',
    cardText: '#1e293b', ticketBg: '#f8fafc', ticketBorder: '#c7d2fe', bottomBg: '#f8fafc', bottomBorder: '#e2e8f0',
    overlayBg: 'rgba(79, 70, 229, 0.45)', isDark: false
  },
  'neon-night': {
    accent: '#ec4899', border: '#f472b6', chromeBg: '#0f0728', chromeBorder: '#2e1065',
    urlBg: '#1e1b4b', urlText: '#38bdf8', screenBg: '#090417', textColor: '#fdf2f8', textMuted: '#c084fc',
    topbarBg: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)', topbarBorder: '#ec4899', topbarText: '#ffffff',
    heroBg: '#1e1b4b', heroBorder: '#a855f7', heroTitle: '#f472b6', cardBg: '#13092b', cardBorder: '#7e22ce',
    cardText: '#fdf2f8', ticketBg: '#13092b', ticketBorder: '#ec4899', bottomBg: '#1e1b4b', bottomBorder: '#7e22ce',
    overlayBg: 'rgba(236, 72, 153, 0.5)', isDark: true
  },
  'compact-counter': {
    accent: '#0891b2', border: '#22d3ee', chromeBg: '#164e63', chromeBorder: '#0e7490',
    urlBg: '#155e75', urlText: '#a5f3fc', screenBg: '#ecfeff', textColor: '#164e63', textMuted: '#0e7490',
    topbarBg: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)', topbarBorder: '#0891b2', topbarText: '#ffffff',
    heroBg: '#cffafe', heroBorder: '#a5f3fc', heroTitle: '#155e75', cardBg: '#ffffff', cardBorder: '#a5f3fc',
    cardText: '#164e63', ticketBg: '#ffffff', ticketBorder: '#a5f3fc', bottomBg: '#cffafe', bottomBorder: '#a5f3fc',
    overlayBg: 'rgba(8, 145, 178, 0.45)', isDark: false
  },
  'tablet-pos': {
    accent: '#7c3aed', border: '#a78bfa', chromeBg: '#2e1065', chromeBorder: '#4c1d95',
    urlBg: '#3b0764', urlText: '#ddd6fe', screenBg: '#f5f3ff', textColor: '#2e1065', textMuted: '#6b21a8',
    topbarBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', topbarBorder: '#7c3aed', topbarText: '#ffffff',
    heroBg: '#ede9fe', heroBorder: '#ddd6fe', heroTitle: '#581c87', cardBg: '#ffffff', cardBorder: '#ddd6fe',
    cardText: '#2e1065', ticketBg: '#ffffff', ticketBorder: '#ddd6fe', bottomBg: '#ede9fe', bottomBorder: '#ddd6fe',
    overlayBg: 'rgba(124, 58, 237, 0.45)', isDark: false
  },
  'high-contrast': {
    accent: '#ca8a04', border: '#eab308', chromeBg: '#18181b', chromeBorder: '#27272a',
    urlBg: '#27272a', urlText: '#fef08a', screenBg: '#09090b', textColor: '#ffffff', textMuted: '#fef08a',
    topbarBg: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)', topbarBorder: '#facc15', topbarText: '#000000',
    heroBg: '#27272a', heroBorder: '#facc15', heroTitle: '#fef08a', cardBg: '#18181b', cardBorder: '#facc15',
    cardText: '#ffffff', ticketBg: '#18181b', ticketBorder: '#facc15', bottomBg: '#27272a', bottomBorder: '#3f3f46',
    overlayBg: 'rgba(202, 138, 4, 0.5)', isDark: true
  },
  'specialty-gourmet': {
    accent: '#b45309', border: '#d97706', chromeBg: '#451a03', chromeBorder: '#78350f',
    urlBg: '#292524', urlText: '#fde68a', screenBg: '#fffbeb', textColor: '#451a03', textMuted: '#78350f',
    topbarBg: 'linear-gradient(135deg, #b45309 0%, #92400e 100%)', topbarBorder: '#b45309', topbarText: '#ffffff',
    heroBg: '#fef3c7', heroBorder: '#fde68a', heroTitle: '#78350f', cardBg: '#ffffff', cardBorder: '#fde68a',
    cardText: '#451a03', ticketBg: '#ffffff', ticketBorder: '#fde68a', bottomBg: '#fef3c7', bottomBorder: '#fde68a',
    overlayBg: 'rgba(180, 83, 9, 0.45)', isDark: false
  },
  'express-togo': {
    accent: '#dc2626', border: '#f87171', chromeBg: '#450a0a', chromeBorder: '#7f1d1d',
    urlBg: '#262626', urlText: '#fecaca', screenBg: '#fef2f2', textColor: '#450a0a', textMuted: '#7f1d1d',
    topbarBg: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', topbarBorder: '#dc2626', topbarText: '#ffffff',
    heroBg: '#fee2e2', heroBorder: '#fecaca', heroTitle: '#991b1b', cardBg: '#ffffff', cardBorder: '#fecaca',
    cardText: '#450a0a', ticketBg: '#ffffff', ticketBorder: '#fecaca', bottomBg: '#fee2e2', bottomBorder: '#fecaca',
    overlayBg: 'rgba(220, 38, 38, 0.45)', isDark: false
  },
  'wholesale-bulk': {
    accent: '#1d4ed8', border: '#60a5fa', chromeBg: '#172554', chromeBorder: '#1e3a8a',
    urlBg: '#1e293b', urlText: '#bfdbfe', screenBg: '#eff6ff', textColor: '#172554', textMuted: '#1e3a8a',
    topbarBg: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', topbarBorder: '#1d4ed8', topbarText: '#ffffff',
    heroBg: '#dbeafe', heroBorder: '#bfdbfe', heroTitle: '#1e40af', cardBg: '#ffffff', cardBorder: '#bfdbfe',
    cardText: '#172554', ticketBg: '#ffffff', ticketBorder: '#bfdbfe', bottomBg: '#dbeafe', bottomBorder: '#bfdbfe',
    overlayBg: 'rgba(29, 78, 216, 0.45)', isDark: false
  },
  'mall-store': {
    accent: '#e11d48', border: '#fb7185', chromeBg: '#4c0519', chromeBorder: '#881337',
    urlBg: '#1e1e24', urlText: '#fecdd3', screenBg: '#fff1f2', textColor: '#4c0519', textMuted: '#881337',
    topbarBg: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)', topbarBorder: '#e11d48', topbarText: '#ffffff',
    heroBg: '#ffe4e6', heroBorder: '#fecdd3', heroTitle: '#9f1239', cardBg: '#ffffff', cardBorder: '#fecdd3',
    cardText: '#4c0519', ticketBg: '#ffffff', ticketBorder: '#fecdd3', bottomBg: '#ffe4e6', bottomBorder: '#fecdd3',
    overlayBg: 'rgba(225, 29, 72, 0.45)', isDark: false
  },
  'thermal-58': {
    accent: '#475569', border: '#94a3b8', chromeBg: '#1e293b', chromeBorder: '#334155',
    urlBg: '#0f172a', urlText: '#cbd5e1', screenBg: '#f8fafc', textColor: '#0f172a', textMuted: '#475569',
    topbarBg: 'linear-gradient(135deg, #475569 0%, #334155 100%)', topbarBorder: '#475569', topbarText: '#ffffff',
    heroBg: '#f1f5f9', heroBorder: '#e2e8f0', heroTitle: '#1e293b', cardBg: '#ffffff', cardBorder: '#cbd5e1',
    cardText: '#0f172a', ticketBg: '#ffffff', ticketBorder: '#cbd5e1', bottomBg: '#f1f5f9', bottomBorder: '#e2e8f0',
    overlayBg: 'rgba(71, 85, 105, 0.45)', isDark: false
  },
  'qr-receipt-80': {
    accent: '#0d9488', border: '#2dd4bf', chromeBg: '#134e4a', chromeBorder: '#115e59',
    urlBg: '#042f2e', urlText: '#99f6e4', screenBg: '#f0fdfa', textColor: '#134e4a', textMuted: '#115e59',
    topbarBg: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)', topbarBorder: '#0d9488', topbarText: '#ffffff',
    heroBg: '#ccfbf1', heroBorder: '#99f6e4', heroTitle: '#115e59', cardBg: '#ffffff', cardBorder: '#99f6e4',
    cardText: '#134e4a', ticketBg: '#ffffff', ticketBorder: '#99f6e4', bottomBg: '#ccfbf1', bottomBorder: '#99f6e4',
    overlayBg: 'rgba(13, 148, 136, 0.45)', isDark: false
  },
  'self-service': {
    accent: '#65a30d', border: '#a3e635', chromeBg: '#1a2e05', chromeBorder: '#365314',
    urlBg: '#142304', urlText: '#bef264', screenBg: '#f7fee7', textColor: '#1a2e05', textMuted: '#365314',
    topbarBg: 'linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)', topbarBorder: '#65a30d', topbarText: '#ffffff',
    heroBg: '#ecfccb', heroBorder: '#d9f99d', heroTitle: '#3f6212', cardBg: '#ffffff', cardBorder: '#d9f99d',
    cardText: '#1a2e05', ticketBg: '#ffffff', ticketBorder: '#d9f99d', bottomBg: '#ecfccb', bottomBorder: '#d9f99d',
    overlayBg: 'rgba(101, 163, 13, 0.45)', isDark: false
  },
  'lounge-bar': {
    accent: '#9333ea', border: '#c084fc', chromeBg: '#240046', chromeBorder: '#3c096c',
    urlBg: '#10002b', urlText: '#e0aaff', screenBg: '#10002b', textColor: '#f3e8ff', textMuted: '#c084fc',
    topbarBg: 'linear-gradient(135deg, #7b2cbf 0%, #9333ea 100%)', topbarBorder: '#9333ea', topbarText: '#ffffff',
    heroBg: '#240046', heroBorder: '#5a189a', heroTitle: '#e0aaff', cardBg: '#190036', cardBorder: '#5a189a',
    cardText: '#f3e8ff', ticketBg: '#190036', ticketBorder: '#7b2cbf', bottomBg: '#240046', bottomBorder: '#5a189a',
    overlayBg: 'rgba(147, 51, 234, 0.5)', isDark: true
  },
  'eco-digital': {
    accent: '#16a34a', border: '#4ade80', chromeBg: '#052e16', chromeBorder: '#14532d',
    urlBg: '#022c22', urlText: '#86efac', screenBg: '#f0fdf4', textColor: '#052e16', textMuted: '#14532d',
    topbarBg: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', topbarBorder: '#16a34a', topbarText: '#ffffff',
    heroBg: '#dcfce7', heroBorder: '#bbf7d0', heroTitle: '#166534', cardBg: '#ffffff', cardBorder: '#bbf7d0',
    cardText: '#052e16', ticketBg: '#ffffff', ticketBorder: '#bbf7d0', bottomBg: '#dcfce7', bottomBorder: '#bbf7d0',
    overlayBg: 'rgba(22, 163, 74, 0.45)', isDark: false
  },
  'franchise-multi': {
    accent: '#2563eb', border: '#60a5fa', chromeBg: '#1e3a8a', chromeBorder: '#1d4ed8',
    urlBg: '#0f172a', urlText: '#93c5fd', screenBg: '#eff6ff', textColor: '#1e3a8a', textMuted: '#2563eb',
    topbarBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', topbarBorder: '#2563eb', topbarText: '#ffffff',
    heroBg: '#dbeafe', heroBorder: '#93c5fd', heroTitle: '#1e40af', cardBg: '#ffffff', cardBorder: '#93c5fd',
    cardText: '#1e3a8a', ticketBg: '#ffffff', ticketBorder: '#93c5fd', bottomBg: '#dbeafe', bottomBorder: '#93c5fd',
    overlayBg: 'rgba(37, 99, 235, 0.45)', isDark: false
  }
};
