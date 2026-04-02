/**
 * Archivo de Configuración de Negocio (Business Configuration)
 * Este archivo centraliza las variables comerciales para el Starter Kit.
 * Todo el frontend se actualizará dinámicamente al cambiar estos valores.
 */

export const BUSINESS_CONFIG = {
  // Información de Contacto
  whatsapp: {
    // Número base de WhatsApp (incluyendo prefijo de PAÍS ej: 52 para México). 
    // Sin signos + ni guiones.
    number: '524481117977',
    
    // Mensaje preconfigurado que el usuario enviará al presionar el CTA
    defaultMessage: 'Hola, me interesa iniciar operaciones con el Starter Kit. ¿Podrían brindarme información táctica?',
    
    // Función de utilidad para generar la URL pública de la API de WhatsApp
    getApiUrl: function (customMessage?: string) {
      const message = customMessage || this.defaultMessage;
      return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
    }
  },

  // Ubicación Física
  location: {
    address: 'Guadalupe, Zacatecas, México',
    mapsUrl: 'https://maps.google.com/?q=Guadalupe,Zacatecas,México'
  }
};
