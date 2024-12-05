# prueba-tecnica-frontend
# Proyecto de Tienda en Línea

## Estructura del Proyecto


src/
├── components/
│   ├── cart/
│   │   └── Cart.tsx
│   ├── common/
│   │   ├── ButtonBack.tsx
│   │   ├── Heart.tsx
│   │   ├── Logo.tsx
│   │   ├── Search.tsx
│   │   └── Skeleton.tsx
│   ├── exception/
│   │   ├── ErrorBoundary.tsx
│   │   └── NotFound.tsx
│   ├── favorites/
│   │   ├── EmptyFavoritesMessage.tsx
│   │   ├── FavoriteItem.tsx
│   │   ├── FavoriteItemList.tsx
│   │   └── FavoriteProducts.tsx
│   ├── layout/
│   │   └── Header.tsx
│   ├── product/
│   │   ├── ProductDetails.tsx
│   │   ├── ProductInfoComponent.tsx
│   │   └── ProductList.tsx
│   └── ui/
│       ├── ImageCarrousel.tsx
│       └── ImagesWithSkeleton.tsx
├── context/
│   ├── FavoritesContext.tsx
│   └── ProductContext.tsx
├── pages/
│   ├── Favorite.tsx
│   ├── Home.tsx
│   ├── PageNotFound.tsx
│   └── ProductInfo.tsx
├── service/
│   └── apiService.ts
├── theme/
│   └── variables.css
├── App.tsx
├── index.css
└── main.tsx



Este proyecto es una aplicación de tienda en línea construida con **React** e **Ionic**. Permite a los usuarios buscar productos, ver detalles de los productos y gestionar su lista de favoritos. El proyecto sigue patrones de diseño para mejorar la escalabilidad y mantenibilidad del código.

## Patrones de Diseño Implementados

### Contexto (Context Pattern)
- **ProductContext** y **FavoritesContext** son ejemplos del uso del patrón de diseño **Context**. Estos contextos proporcionan un estado global que puede ser compartido a lo largo de la aplicación sin necesidad de realizar prop-drilling (pasar datos entre componentes intermedios). 
- Centralizan la lógica de productos y favoritos, lo que facilita la gestión del estado en toda la aplicación.

### Componente de Presentación (Presentation Pattern)
- Componentes como **ProductList**, **ProductInfoComponent**, **FavoriteItemsList**, y otros, son ejemplos de componentes de presentación. Estos componentes están diseñados únicamente para la visualización de los datos y no contienen lógica de negocio.
- Los componentes de presentación reciben **props** y se encargan de mostrar la información en la interfaz de usuario sin preocuparse de cómo se obtiene esa información.

### Componente de Contenedor (Container Pattern)
- Componentes como **Home**, **Favorite**, y **ProductInfo** funcionan como contenedores. Estos gestionan la lógica de la aplicación, como la obtención de datos de la API, y pasan los datos necesarios a los componentes de presentación para su visualización.
- Los componentes de contenedor permiten una clara separación de responsabilidades, delegando la lógica de negocio a un nivel superior y manteniendo los componentes de presentación enfocados solo en la UI.

### Fachada (Facade Pattern)
- El componente **ProductInfoComponent** actúa como una fachada, simplificando la interacción con la API y la gestión del estado.
- Encapsula las llamadas a la API, maneja el estado de carga y pasa los datos al componente de presentación correspondiente, proporcionando una interfaz simple para la UI.

### Lazy Loading (Lazy Load Pattern)
- **React.lazy** se utiliza para implementar **Lazy Loading** en componentes como **Home**, **ProductInfo**, y **Favorite**. 
- Esto mejora el rendimiento de la aplicación, ya que los componentes solo se cargan cuando son necesarios, reduciendo el tiempo de carga inicial y la cantidad de recursos requeridos al inicio.

### Strategy Pattern
- El componente **ImageWithSkeleton** implementa un patrón de estrategia. Dependiendo del estado de carga y de error, decide qué mostrar: una imagen cargada o un "skeleton" (sistema de carga).
- Este patrón permite cambiar el comportamiento (mostrar imagen o skeleton) de manera intercambiable sin afectar el resto del código.

## Buenas Prácticas

- **Separación de responsabilidades**: Cada componente tiene una única responsabilidad. Los componentes de presentación se enfocan en la UI, mientras que los contenedores gestionan la lógica de negocio.
- **Uso de Contextos**: Para compartir estados globales (como productos y favoritos) de manera eficiente y evitar prop-drilling.
- **Carga diferida**: Utilizando **React.lazy** para mejorar el rendimiento de la aplicación cargando solo lo necesario.
- **Patrones de diseño**: Se siguen patrones de diseño como **Context**, **Facade**, **Strategy** y **Observer** para mejorar la mantenibilidad y escalabilidad del código.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/jadodev/prueba-frontend.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    ionic serve
    ```

4. Para ejecutar en un dispositivo Android o en un emulador, primero añade la plataforma Android:
    ```bash
    ionic cap add android
    ```

5. Luego sincroniza el proyecto:
    ```bash
    ionic cap sync
    ```

6. Abre el proyecto en Android Studio:
    ```bash
    ionic cap open android
    ```


