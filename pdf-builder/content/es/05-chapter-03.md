---
type: chapter
chapter: 3
title: Comprando y Vendiendo Criptomonedas
subtitle: Navegando exchanges sin quemarte
---

La primera vez que la mayoría de la gente compra cripto, lo hace mal — no catastróficamente, pero sí caro. Pagan más en comisiones de lo que se dan cuenta, compran en el peor momento posible por un titular, y dejan sus monedas en el exchange indefinidamente porque nadie les dijo que no debían.

Este capítulo es el briefing que deberías haber recibido antes de tu primer trade.

## 3.1 Exchanges Centralizados: La Rampa de Entrada

Un **exchange centralizado** (CEX) es una empresa que opera un mercado donde compradores y vendedores pueden intercambiar criptomonedas. Coinbase, Kraken, Binance, Gemini — estos son intermediarios. Depositas moneda fiat, ellos la convierten, y guardan la cripto resultante en una cuenta que ellos controlan.

El atractivo es obvio: están diseñados para principiantes, aceptan tarjetas de crédito y transferencias bancarias, tienen apps limpias y están regulados. En EE.UU., exchanges reputables como Coinbase y Kraken están registrados con FinCEN y cumplen con las leyes financieras federales. Ese cumplimiento ofrece protección al consumidor — y te cuesta algo en comisiones y privacidad.

**Coinbase** es el más amigable para principiantes y el más caro para compradores casuales. Su suscripción Coinbase One o usar Coinbase Advanced reduce las comisiones significativamente. **Kraken** tiene mejores estructuras de comisiones y reputación de seguridad más fuerte que la mayoría. **Binance** tiene la mayor liquidez y la selección de tokens más amplia, pero su situación regulatoria en EE.UU. ha enfrentado desafíos. Para compras puras de Bitcoin y Ethereum, Coinbase o Kraken servirán bien a la mayoría de los principiantes.

## 3.2 KYC/AML: Intercambiando Privacidad por Acceso

Antes de poder hacer trading en cualquier exchange regulado, pasarás por verificación **KYC** (Conoce a Tu Cliente) y **AML** (Anti-Lavado de Dinero). Esto significa enviar identificación oficial, una selfie, y a veces comprobante de domicilio. Toma minutos a días dependiendo de la plataforma.

Este es el intercambio. El exchange quiere saber quién eres. A la blockchain no le importa. Una vez que mueves fondos fuera del exchange a una wallet auto-custodiada, tus transacciones son pseudónimas — visibles en el libro mayor público pero no atadas a tu identidad por el exchange.

Algunas personas se oponen al KYC por principio. Esa es una posición filosófica legítima en cripto. Para la mayoría de los principiantes, es el punto de entrada práctico al ecosistema, y los exchanges regulados que lo requieren también son los menos propensos a robar tus fondos. Una vez que estás dentro y cómodo, hay opciones sin KYC — aunque vienen con su propia complejidad y riesgo.

## 3.3 Exchanges Descentralizados: Trading sin Intermediario

Un **exchange descentralizado** (DEX) es un contrato inteligente — código corriendo en una blockchain — que te permite intercambiar tokens directamente desde tu wallet. Sin cuenta, sin KYC, sin límites de retiro. Uniswap, Curve y dYdX son los principales jugadores en este espacio.

En Uniswap, conectas tu wallet MetaMask, seleccionas los tokens que quieres intercambiar, y los pools de liquidez del protocolo manejan el trade automáticamente. No hay libro de órdenes, no hay contraparte. El precio se determina por un algoritmo llamado **creador de mercado automatizado** (AMM), basado en la proporción de activos en el pool.

Los DEX son poderosos pero requieren más sofisticación. Necesitas una wallet. Necesitas ETH para comisiones de gas. Necesitas entender el slippage. Y necesitas ser cuidadoso con qué contratos de tokens estás interactuando — los tokens estafa pueden imitar a los legítimos. Pero para acceder a tokens que no están listados en exchanges principales — particularmente protocolos DeFi nuevos y altcoins — los DEX son a menudo tu única opción.

CEX para comprar con fiat, DEX para acceder al abanico completo de activos on-chain. Ese es el modelo práctico.

## 3.4 Leyendo un Libro de Órdenes

En exchanges centralizados, los precios se determinan por **libros de órdenes** — listas de órdenes abiertas de compra y venta a varios puntos de precio.

El lado **bid** son los compradores: lo que la gente está dispuesta a pagar. El lado **ask** (u oferta) son los vendedores: lo que la gente quiere recibir. La diferencia entre el bid más alto y el ask más bajo es el **spread**. Spreads estrechos significan un mercado líquido. Spreads anchos significan mercados delgados — usa precaución.

Cuando colocas un trade, estás interactuando con este libro de una de dos formas:

**Orden de mercado:** Compras o vendes inmediatamente al mejor precio disponible. Rápido, simple, pero obtienes lo que el mercado te dé — lo que en mercados delgados o de rápido movimiento puede ser peor de lo esperado.

**Orden límite:** Especificas el precio exacto que estás dispuesto a pagar (o recibir). La orden se queda en el libro hasta que se cumple — o hasta que la cancelas. Más control, pero sin garantía de ejecución. Si el precio nunca llega a tu límite, no haces el trade.

Para principiantes comprando Bitcoin o Ethereum en exchanges principales con liquidez profunda, las órdenes de mercado están bien. Para tokens más pequeños con libros de órdenes delgados, siempre usa órdenes límite. A menudo obtendrás precios significativamente mejores.

:::detective
**El Flash Crash Que Hizo $2 Millones en Segundos**

El 22 de junio de 2017, el precio de Ethereum en Coinbase cayó de $319 a $0.10 en milisegundos. Se disparó por una gran orden de venta que cascadeó a través del libro de órdenes, activando miles de órdenes stop-loss a la vez. La reacción en cadena pasó por cada bid hasta que el libro estuvo casi vacío.

Traders que habían puesto órdenes límite de compra cerca de cero — como broma, o como un tiro a la luna calculado — las vieron llenarse al instante. Luego el precio se recuperó en segundos. Algunas personas hicieron dinero que les cambió la vida con un trade que nunca esperaron ejecutar.

La lección no es poner órdenes límite locas. Es entender que los libros de órdenes son cosas vivas. En mercados delgados, una sola orden grande puede mover precios de formas que se sienten imposibles hasta que pasan.
:::

## 3.5 Comisiones: El Asesino Silencioso del Portafolio

Las comisiones no se sienten significativas en un solo trade. Se acumulan en una traba seria de los retornos con el tiempo.

Cada exchange cobra comisiones para ejecutar trades. La estructura varía, pero los tipos principales que encontrarás:

**Comisiones de trading** — un porcentaje de cada transacción. La mayoría de los exchanges principales cobran 0.1%–0.5% por trade. La interfaz estándar de Coinbase puede ser más alta. Usar las interfaces "avanzadas" en las mismas plataformas casi siempre reduce tus comisiones significativamente.

**Maker vs. taker** — los "takers" colocan órdenes de mercado que se llenan inmediatamente (toman liquidez). Los "makers" colocan órdenes límite que se quedan en el libro (añaden liquidez). La mayoría de los exchanges cobran menos a los makers — a veces cero — porque están contribuyendo a la profundidad del libro de órdenes de la plataforma. Aprende la estructura de tu exchange y opera de acuerdo.

**Comisiones de retiro** — comisiones fijas para mover cripto fuera del exchange a tu wallet. Estas varían ampliamente. Mover Bitcoin típicamente cuesta una pequeña cantidad fija. Algunos exchanges cobran comisiones premium de retiro. Compara antes de mover grandes sumas.

**Comisiones de gas (DEX)** — en Ethereum, cada transacción requiere pagar "gas" — la comisión que compensa a los validadores que procesan tu transacción. Los precios de gas fluctúan con la demanda de la red. Hacer swap en Uniswap en horas pico puede costar $30–$100+. En redes Layer 2 de Ethereum como Arbitrum o Base, el mismo swap cuesta centavos. Conoce tu red antes de operar.

Un hábito útil: antes de ejecutar cualquier trade, suma el costo de ida y vuelta — comisiones para comprar, comisiones para vender, comisiones para retirar. Ese es tu punto de equilibrio real. Necesitas pasarlo antes de estar en ganancias.

## 3.6 Slippage: Por Qué No Siempre Obtienes el Precio Que Ves

Cuando intercambias tokens en un DEX — o ejecutas un trade grande en un par delgadamente operado en un CEX — encontrarás **slippage**: la diferencia entre el precio que esperabas y el precio que realmente obtuviste.

Aquí está por qué pasa. En Uniswap, los precios se determinan por la proporción de tokens en un pool de liquidez. Cuando compras, estás sacando un token y poniendo otro, lo que cambia la proporción — lo que cambia el precio. Cuanto mayor sea tu trade en relación al tamaño del pool, más mueves el precio en tu contra.

La mayoría de las interfaces de DEX te permiten configurar una tolerancia de slippage — la desviación máxima del precio cotizado que estás dispuesto a aceptar. Demasiado estrecho (0.1%) y tu transacción falla porque los precios se movieron antes de confirmar. Demasiado amplio (10%+) y estás aceptando un mal trato, posiblemente ante un ataque sándwich — donde bots detectan tu transacción pendiente y operan alrededor de ella para extraer valor.

Para pares de gran capitalización con liquidez profunda (ETH/USDC), una tolerancia de slippage de 0.5% usualmente está bien. Para tokens pequeños o nuevos, espera mayor slippage y factóralo en tu base de costo.

:::quote
"Un exchange es una herramienta, no una cuenta de ahorros. Entra, haz tu negocio, y saca tus activos de la plataforma."
:::

## 3.7 Mueve Tu Cripto Fuera del Exchange

Esto no se puede decir lo suficiente: los exchanges son para comprar y vender, no para guardar.

El Capítulo 2 cubrió el colapso de FTX en detalle. No es un incidente aislado. Mt. Gox, Celsius, BlockFi, Voyager — la lista de exchanges y custodios que han fracasado, congelado retiros, o simplemente desaparecido con fondos de clientes es larga. El patrón siempre es el mismo: clientes confiaron sus llaves a una contraparte, la contraparte fracasó, los clientes perdieron.

Una vez que has comprado cripto y no estás haciendo trading activamente, muévela a tu wallet. Esto toma una transacción y unos minutos. Es el acto más importante de autocustodia que puedes tomar.

La única excepción: cantidades lo suficientemente pequeñas como para que la comisión de retiro se coma un porcentaje desproporcionado, o fondos que estás manejando activamente en trades del día a día. Todo lo demás debería estar fuera del exchange dentro de 24 horas después de la compra.

:::action
**Paso de Acción W2W**

Crea una cuenta verificada en Coinbase o Kraken. Completa la verificación KYC — ten tu identificación oficial lista. Una vez verificado, deposita $20–$50 y compra una cantidad pequeña de Bitcoin o Ethereum usando una orden límite, no una orden de mercado. Anota las comisiones exactas que pagaste, y calcula qué porcentaje de tu compra representaron. Luego transfiere la cripto comprada a la wallet MetaMask que configuraste en el Capítulo 2. Acabas de completar un ciclo completo de exchange-a-wallet.
:::
