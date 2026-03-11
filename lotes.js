const LOTES = {
  // Fila 1
  "1A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "1B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "1C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "1D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 2
  "2A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "2B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "2C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "2D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: false },

  // Fila 3
  "3A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "3B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "3C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "3D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 4
  "4A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "4B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "4C": { precio: "Consultar", superficie: "5.000 m²", frente: "43 m", tipo: "Rol propio", disponible: true  },
  "4D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: false },

  // Fila 5
  "5A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "5B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "5C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "5D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 6
  "6A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "6B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "6C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "6D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 7
  "7A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "7B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "7C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "7D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 8
  "8A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "8B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "8C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "8D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 9
  "9A": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "9B": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "9C": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "9D": { precio: "Consultar", superficie: "5.000 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },

  // Fila 10
  "10A": { precio: "Consultar", superficie: "6664 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "10B": { precio: "Consultar", superficie: "6664 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
  "10C": { precio: "Consultar", superficie: "6662 m²", frente: "44 m", tipo: "Rol propio", disponible: true  },
}

function getLote(nombre) {
  return LOTES[nombre] || null
}