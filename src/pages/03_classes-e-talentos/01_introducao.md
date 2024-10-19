<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Introdução
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>Na prática
      </a></li>
      <li><a class='super' href="#3.">
        <span class='bold'>3.</span>APIs da Ferramenta
      </a></li>
      <li><a class='sub' href="#3.a">
        &emsp;<span class='bold'>3.a</span>Esquema de uso
      </a></li>
    </ul>
  </div>
</nav>

<div class='title'>
<h2 id="1.">Sistema em pentagrama</h2>
<hr class='solid'>
</div>

É possível escolher 6 classes: **Destruidor, Colosso, Conjurador, Lutador, Assassino e Generalista.** Nenhuma classe tem uma vantagem inata direta uma contra as outras, mas cada um tem uma função específica. O **Destruidor** pode causar MUITO dano em pouquíssimo tempo, enquanto o **Conjurador** traz mais utilidade, segurança e dano cadenciado. O **Lutador** aguenta porrada enquanto consegue ferir o inimigo ao mesmo tempo, sendo que o **Colosso** é uma verdadeira muralha, aguentado o máximo de dano possível e dando aquela força a seus aliados nas linhas mais atrás. O **Assassino** age nos flancos e sorrateiramente, caçando alvos mais solitários e/ou mais frágeis.

As classes seguem a ordem de ***Destruidor > Colosso > Conjurador > Lutador > Assassino.*** Isto ocorre porquê naturalmente as funções de cada classe tem ferramentas para lidarem com as outras. O Destruidor causará mais dano que o Colosso

<div id='1.a' class='note'>

- O **Destruidor** causa mais dano que o **Colosso** pode aguentar naturalmente.
- O **Colosso** consegue facilmente lidar com o dano mais cadenciado e as artimanhas dos **Conjuradores**.
- **Conjuradores** geram muita dor de cabeça e frustração a **Lutadores** que tentam investir neles naturalmente.
- **Lutadores** acabam com a festa de **Assassinos** que queiram os pegar no mano-a-mano.
- Alvos frágeis e sem muita proteção, como **Destruidores**, são contrato bem-sucedido para **Asassinos**.

</div>

"Mas é um "pentagrama" e tem 6 classes? Isto está certo?" - você me pergunta.




<div class='title'>
<h2 id='2.'>Na prática</h2>
<hr class='solid'>
</div>

O vendedor abre a ferramenta e digita o endereço, coordenada ou ponto de referência, e então um mapa centralizado naquele local aparecerá na tela. Este mapa dará uma visão perfeita do terreno, e em seguida **você poderá desenhar o perímetro da obra no local escolhido.**

A partir de então serão posicionados diversos módulos "cubinhos" dentro do perímetro, sendo cada tipo de cubo representado de uma cor diferente, cada um com um número X, Y e Z de vigas, pilares e lajes, modificando assim o seu preço final. Por fim, essa relação de cubinhos-perímetros é mostrada em uma tela em uma imagem com as informações de área, custos e área excedente deste perímetro.

E então temos um valor, que pode ter pequenas variações como custos logísticos, mas que permanecerá muito próximo deste patamar. Tudo isto é possível fazer em menos de 30 segundos, sendo possível fazer durante a conversa com o cliente, por exemplo.

<div class='title'>
<h2 id="3.">APIs da Ferramenta: o que utilizamos?</h2>
<hr class='solid'>
</div>

Para que o a funcionalidade tomasse forma, escolhemos o **componente React do Google Maps** para realizar a busca de endereços e a concepção de desenhos em polígonos feitos pelo usuário. Ao desenhar, obtemos as coordenadas de cada canto do desenho e passamos como parâmetro para o nosso Script.

Após isto, definimos no Front o tamanho (em metros) dos módulos em cubos que serão posicionados dentro deste perímetro, respeitando os limites das linhas desenhadas pelo usuário. É possível também definir a altura da obra, que é passada como parâmetro na hora de calcular o valor da obra.

Por fim, ao clicar em 'Calcular Módulos', essas coordenadas são enviadas para segunda a **API de Cálculo de Módulos**, feita em Python e Flask. Ela traduz as coordenadas a fim de recriar o polígono que foi desenhado no mapa. Após isto, a API retorna a imagem do polígono normalizado em rotaçãp com os módulos (canto, fachada e centro), a quantidade deles, o perímetro do polígono e o valor previsto da obra.

<div id='3.a' class='image-container'>
  <img
    class='image'
    src="/images/devs/section-3/fluxo_oe.PNG" 
    alt="relatorios_dinamicos" 
    style="width:450px; border-radius: 15px;"
  />
</div>

<div class='end'>