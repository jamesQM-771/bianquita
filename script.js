// Función para crear emojis flotantes
function crearEmojisFlotantes() {
    const contenedor = document.querySelector('body');
    
    // Crear emojis cada cierto tiempo
    setInterval(() => {
      // Crear un emoji
      const emoji = document.createElement('div');
      emoji.classList.add('emoji-flotante');
      emoji.textContent = '😍';
      
      // Posición horizontal aleatoria
      const posX = Math.random() * 100;
      emoji.style.left = `${posX}%`;
      
      // Añadir al contenedor
      contenedor.appendChild(emoji);
      
      // Eliminar después de la animación
      setTimeout(() => {
        emoji.remove();
      }, 6000); // Duración ligeramente mayor que la animación
    }, 500); // Crear un emoji cada 500ms
  }
  
  // Iniciar la animación cuando se cargue la página
  window.addEventListener('load', crearEmojisFlotantes);