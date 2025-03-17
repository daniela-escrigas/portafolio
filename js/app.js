const app = Vue.createApp({
    data() {
      return {
        proyectos: [] // Guarda los proyectos aquí
      };
    },
    mounted() {
      fetch('projects.json')
        .then(response => response.json())
        .then(data => {
          this.proyectos = data; // Guarda los proyectos en Vue
          console.log("Proyectos cargados:", this.proyectos); // Para verificar en consola
        })
        .catch(error => console.error("Error cargando proyectos:", error));
    }
  });
  
  app.mount("#app");
