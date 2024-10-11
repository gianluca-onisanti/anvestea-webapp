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
<h2 id="1.">Introdução: dedução de preço em segundos</h2>
<hr class='solid'>
</div>

Um dos processos mais importantes para um vendedor da Cassol é orçar o quanto será gasto em uma obra de acordo com o que o cliente pede. Porém, apesar de simples, é um processo que depende de muitas variáveis, e demora muito mais que alguns simples segundos.

Se faz necessário, por exemplo, calcular quantas vigas, pilares e lajes devem ser feitas, o tanto de aço pra cada peça, se o galpão tem mezanino, docas, e infidáveis outras considerações que devem ser feitas.

Porém esta demora em uma proposta com o cliente pode significar a perda de um cliente pra um concorrente que orçe antes que nós, por exemplo. **E é por este motivo que o 'Orçamento Expresso' foi projetado!**

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