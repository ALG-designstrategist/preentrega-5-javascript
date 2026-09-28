// ==========================================
// SIMULADOR: GESTIÓN DE CATÁLOGO CON CLASES
// ==========================================

// 1. Definición de la Clase con PascalCase y al menos 4 propiedades
class Videojuego {
  constructor(id, nombre, precio, stock, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
  }

  // Método 1: Aplica descuento modificando el precio
  aplicarDescuento(porcentaje) {
    const factorDescuento = (100 - porcentaje) / 100;
    this.precio = parseFloat((this.precio * factorDescuento).toFixed(2));
    console.log(`🏷️ Descuento del ${porcentaje}% aplicado a "${this.nombre}". Nuevo precio: $${this.precio}`);
  }

  // Método 2: Modifica el stock según las ventas
  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock -= cantidad;
      console.log(`🛒 Venta realizada: ${cantidad} copia(s) de "${this.nombre}". Stock restante: ${this.stock}`);
    } else {
      console.log(`⚠️ Stock insuficiente para "${this.nombre}". Disponibles: ${this.stock}`);
    }
  }

  // Método informativo del estado actual
  obtenerFichaTecnica() {
    return `[ID: ${this.id}] ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio} | Stock: ${this.stock}`;
  }
}

// 2. Instanciación de al menos 3 objetos con la palabra clave new
const juego1 = new Videojuego(1, "Dead by Daylight", 20, 15, "Terror / Multijugador");
const juego2 = new Videojuego(2, "Killing Floor 2", 30, 8, "Acción / Zombies");
const juego3 = new Videojuego(3, "Doom Eternal", 40, 5, "Shooter");

// 3. Ejecución de métodos y verificación de cambios en consola
console.log("--- ESTADO INICIAL ---");
console.log(juego1.obtenerFichaTecnica());
console.log(juego2.obtenerFichaTecnica());
console.log(juego3.obtenerFichaTecnica());

console.log("\n--- OPERACIONES ---");
// Aplicamos un 20% de descuento al primer juego
juego1.aplicarDescuento(20);

// Vendemos 3 unidades del segundo juego
juego2.vender(3);

// Vendemos 2 unidades del tercer juego
juego3.vender(2);

// 4. Integración con el flujo general del simulador (Array + for...of)
const catalogo = [juego1, juego2, juego3];

function mostrarInventario(lista) {
  console.log("\n--- INVENTARIO ACTUALIZADO ---");
  for (const item of lista) {
    console.log(item.obtenerFichaTecnica());
  }
  console.log(`Total de títulos registrados: ${lista.length}`);
}

mostrarInventario(catalogo);