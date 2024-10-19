class APIManager {
  constructor(url) {
    this.baseURL = url;
  }

  async obtenerImagenesPerritos() {
    try {
      const response = await fetch(this.baseURL);

      if (!response.ok) {
        throw new Error("No se pudo obtener imagen");
      }

      const data = await response.json();
      console.log("Datos", data);
      return data;
    } catch (error) {
      console.error("Error al obtener imagen", error);
      return {};
    }
  }
}

// Será para manipular el DOM
async function mostrarImagenPerrito(apiManager) {
  const imagen = await apiManager.obtenerImagenesPerritos();

  // Tarea. MOSTRAR LA IMAGEN RETORNADA
}

window.onload = () => {
  const apiManager = new APIManager("https://dog.ceo/api/breeds/image/random");
  mostrarImagenPerrito(apiManager);
};
