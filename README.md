# Patrón de Diseño: Mediator

## Descripción

El patrón Mediator es un patrón de comportamiento que define un objeto que centraliza las
comunicaciones entre componentes, evitando que estos se comuniquen directamente entre sí. En lugar
de tener conexiones directas, los componentes se comunican a través del mediador. Esto promueve un
bajo acoplamiento entre los componentes y facilita la modificación y extensión del sistema.

## Estructura

- Mediator (Mediador): Define la interfaz para comunicarse con los componentes.

- ConcreteMediator (MediadorConcreto): Implementa la interfaz del mediador y coordina la
  comunicación entre los componentes.

- Colleague (Colega): Representa un componente que se comunica a través del mediador.

- ConcreteColleague (ColegaConcreto): Implementa la lógica específica del componente y se comunica
  con otros componentes a través del mediador.

### Ventajas

**Desacoplamiento**: Los componentes no conocen directamente a los demás componentes, lo que reduce el
acoplamiento y facilita la extensión y mantenimiento del sistema.

**Reutilización**: Al separar las responsabilidades de comunicación, los mediadores pueden ser
reutilizados en diferentes contextos.

**Simplicidad**: Facilita la comprensión y el mantenimiento del código al centralizar la lógica de
comunicación.
