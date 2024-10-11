<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Google Maps em React
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>Entradas e Saídas
      </a></li>
    </ul>
  </div>
</nav>

<div class='title'>
<h2 id="1.">Google Maps em React: componente de mapa</h2>
<hr class='solid'>
</div>

Como citado na [primeira sessão](http://localhost:4321/dev-sections/03_orcamento-expresso/?markdown=0), utilizamos a API do Google Maps no app para realizar o desenho do polígono. Para isto, chamamos a chave desta API lá na raíz do projeto e importamos um componente react do Google Maps no nosso código.

Todavia este componente sempre é chamado dinâmicamente, pois as informações presentes nele precisam sempre estar rodando do lado do servidor, algo que nosso front não nos permite que aconteça do lado do client.

Consequentemente ao fator citado acima, **o 'Mapa Expresso'**, como é chamado em seu arquivo, **só terá êxito absoluto no 'Orçamento Expresso'.** Usar ele em outro código ou referenciá-lo manualmente pode gerar inúmeros conflitos, então **trate o Mapa Expresso como um componente exclusivo.**

<div class='title'>
<h2 id='2.'>Entradas e Saídas</h2>
<hr class='solid'>
</div>

Ao pesquisar o endereço na Página, ele **é convertido para coordenadas transversais e longitudinais (lat/lng) no 'Geocoder' presente no próprio front**, e passa esses dados para o Mapa Expresso. Então, o mapa é centralizado com base nesta localização. Lembrando que o mapa só será mostrado na tela após a pesquisar, para garantir que a ferramenta seja utilizada com um endereço bem definido.

<div class='end'>