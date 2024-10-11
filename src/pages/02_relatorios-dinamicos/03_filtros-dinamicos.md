<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Filtros Dinâmicos
      </a></li>
      <li><a class='sub' href="#1.a">
        &emsp;<span class='bold'>1.a</span>Nota: em desenvolvimento
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>JSON de filtros
      </a></li>
      <li><a class='sub' href="#2.a">
        &emsp;<span class='bold'>2.a</span>Exemplo: lista de compras
      </a></li>
      <li><a class='sub' href="#2.b">
        &emsp;<span class='bold'>2.b</span>Tipos do elemento 'type'
      </a></li>
      <li><a class='sub' href="#2.c">
        &emsp;<span class='bold'>2.c</span>Considerações finais
      </a></li>
    </ul>
  </div>
</nav>

<div class='title'>
<h2 id="1.">Filtros Dinâmicos: contexto geral</h2>
<hr class='solid'>
</div>

Da mesma forma que precisávamos de todos os relatórios em um só lugar, também precisávamos dos filtros de relatório em um só lugar também.

Porém, diferentemente dos relatórios, precisávamos interagir com os filtros de forma diferente. Não poderíamos utilizar um *componente de texto* para buscar datas, por exemplo. Justamente por esta necessidade criamos o 'Dynamo', que é um componente coringa. Ele pode virar um campo de texto, uma lista, um campo de datas, um checkbox, etc.

<div id='1.a' class='note'>

*Obs.: esse componente ainda está em constante desenvolvimento, não possuindo todos os tipos de componentes existentes. Iremos adicionando novos conforme a necessidade nos relatórios.* 

</div>

Ao filtrar estes dados, nós chegamos exatamente no ponto em que queremos com essa ferramenta: um local onde dados de diferentes fontes se interligam, e podem ser filtrados para encontrarmos exatamente o que a gente precisa, de forma muito rápida, diferentemente de como ocorre nas ERP's que a Cassol trabalha com, que possuem um certo delay e espera para executar as informações que precisamos. 

<div class='title'>
<h2 id="2.">JSON de filtros: estruturação</h2>
<hr class='solid'>
</div>

Da mesmíssima forma como citado em ['Estrutura de dados'](http://localhost:4321/dev-sections/02_relatorios-dinamicos/?markdown=1#1.a), os filtros possuem um JSON próprio, chamado **'filters',** similarmente estruturado como em **'columns'**, com algumas ressalvas. Veja a seguir:

<div id='2.a' class=code_box>

    [{
        "label": "Lista de Compras",
        "requisition": "listaCompras",
        "route": "ddl_itens",
        "type": "multi",
        "flex": 1
    }, ... ]

</div>

Este JSON representa a uma lista de múltipla escolha, exemplificando uma *"lista de compras".* Nele temos **label** (*título do componente*), **requisition** (*nome da variável que será passado para a API dos dados*), **route** (*rota de API para puxar dados caso precise*), **type** (*que determina o tipo do componente*), e **flex** (*largura da coluna*).

O item **'type'** define qual componente o Dynamo deve gerar. Aqui segue os tipos presentes nele:

<div class='center'>
<div id='2.b' class='note'>

Tipos do elemento 'type':<br />
<br />
**'text':** *Campo de Texto Convencional*<br />
**'date':** *Seletor de Data Convencional*<br />
**'period':** *Seletor Duplo de Data (Período)*<br />
**'dropdown':** *Lista Suspensa de Escolha (escolha única)*<br />
**'multi':** *Lista Suspensa de Checagem (múltipla escolha)*<br />
**'search':** *Lista Suspensa de Pesquisa (escolha única)*<br />

</div>
</div>

Quando o tipo for correspondente a uma lista, o JSON utilizará o **'route'** para apontar para uma API, que por sua vez irá trazer as opções daquela lista. Caso o contrário, a declaração de 'route' nos outros casos não se faz necessária, podendo ser deixada em branco mesmo.


<div id='2.c' class='note'>

*Lembre-se: o **'Dynamo'** é um componente pensado apenas em atender os relatórios dinâmicos e a filtragem de cada um que pode variar. A utilização e a manutenção dele para funcionalidades diferentes da que ele foi projetado para servir **não é uma prática recomendada, pois pode gerar inúmeros bugs nos relatórios com filtros presentes no Datasol!***

</div>

<div class='end'>