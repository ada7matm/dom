/**
 * EJERCICIO:
 * 
 * 1) Declarar las variables globales 
 *      - password, y darle un valor inicial
 *      - saldo, y darle un valor inicial
 *      - limiteExtraccion, y darle un valor inicial
 *      - logueada, e igualarla a false
 * 2) Declarar las funciones 
 *      a. login, que debe pedirle al usuario ingresar su contraseña,
 *      con un máximo de 3 intentos, y si se loguea correctamente, cambiar
 *      logueada a true, y llamar a actualizarInfoCuenta
 *      b. actualizarInfoCuenta, que debe obtener los elementos del DOM 
 *      correspondientes al saldo y al límite de extracción, y modificar 
 *      su contenido con las variables correspondientes
 *      c. depositarDinero, que debe pedir mediante un prompt cuánto dinero
 *      se desea depositar, y actualizar la variable saldo con dicho valor
 *      d. extraerDinero, que debe pedir mediante un prompt cuánto dinero
 *      se desea extraer, y si hay saldo disponible, y la extracción no es mayor
 *      al límite de extracción, debe actualizar la variable saldo restándole lo 
 *      extraído
 *      e. cambiarLimiteExtraccion, que debe pedir mediante un prompt a cuánto
 *      se desea cambiar el límite, y actualizar la variable limiteExtraccion 
 *      con dicho valor
 *      f. mostrarInfoCuenta, que debe agregarle la clase hidden al elemento 
 *      ultimos-movimientos si no la tiene, y quitársela a cuenta-info
 *      g. mostrarUltimosMovimientos, que debe agregarle la clase hidden al elemento 
 *      cuenta-info si no la tiene, y quitársela a ultimos-movimientos
 *      h. resetearInfoCuenta, que debe obtener los elementos del DOM 
 *      correspondientes al saldo y al límite de extracción, y modificar 
 *      su contenido para que sólo muestre el contenido que tiene inicialmente al cargar
 *      la página
 *      i. salir, que debe cambiar la variable logueada a false, llamar a 
 *      resetearInfoCuenta, y luego a mostrarInfoCuenta
 *      i. cambiarPassword, que debe pedir con un prompt por la nueva contraseña,
 *      luego llamar a salir
 * 3) Bindear los botones de acciones con cada una de las acciones correspondientes
 * 4) Las funciones depositarDinero, extraerDinero y cambiarLimiteExtraccion, deben 
 * ir registrando su actividad, appendeando al elemento con id ultimos-movimientos 
 * un elemento p con la descripción, por ejemplo, "Extraido $3000", "Depositado $500"
 * 5) Las funciones depositarDinero, extraerDinero y cambiarLimiteExtraccion deben llamar
 * al finalizar a actualizarInfoCuenta, y luego a mostrarInfoCuenta
 * 6) Las funciones depositarDinero, extraerDinero y cambiarLimiteExtraccion, cambiarPassword
 * y mostrarUltimosMovimientos, deben chequear si la variable logueada está en true para realizar sus acciones. 
 * Si no lo está deben mostrar un alert diciendo, "Debes loguearte para realizar 
 * esta acción" 
 */