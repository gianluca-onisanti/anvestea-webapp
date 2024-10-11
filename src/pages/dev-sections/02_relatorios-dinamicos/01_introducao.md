<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Introdução
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>Como funciona?
      </a></li>
      <li><a class='sub' href="#2.a">
        &emsp;<span class='bold'>2.a</span>Seleção de Relatório
      </a></li>
      <li><a class='sub' href="#2.b">
        &emsp;<span class='bold'>2.b</span>Exemplo: JSON de Coluna
      </a></li>
    </ul>
  </div>
</nav>

<div class='title'>
<h2 id="1.">Introdução: uma "super caixa de ferramentas"</h2>
<hr class='solid'>
</div>

Pense: você é um engenheiro mecânico e tem centenas ou até mesmo milhares de ferramentas para trabalhar, e pra cada marca, tipo e tamanho de ferramenta você tem uma caixa organizadora. Todavia você tem apenas uma pequena sala para guardar tudo isso. Você não conseguiria nem sequer andar nesta sala de tanta caixa que teria, não é mesmo?

**Ocorreria um problema similar se fizéssemos uma página pra cada relatório da Cassol**. Ficaria inviável fazer a manutenção de cada relatório e precisariamos de um setor inteiro apenas para realizar a manutenção deles, além de deixar o aplicativo pesado e lento, se tornando quase que inutilizável. Isso nos desviaria do nosso principal objetivo, que é um centralizador de dados rápido e inteligente.

Por isto, **criamos uma única página que se molda conforme os dados que desejamos e qual usuário está acessando-a naquele momento**. Em paralelo com a metáfora das caixas, é como se fizéssemos uma "super caixa de ferramentas", que tem todas as ferramentas do engenheiro mecânico em um só lugar. E não só isso, mas permite que o amigo dele, o engenheiro elétrico, também possa utilizar a caixa para colocar suas ferramentas, porém vendo apenas as ferramentas que ele guardou.


<div class='title'>
<h2 id='2.'>Como funciona?</h2>
<hr class='solid'>
</div>

Para fins mais tecnicos, que é o que queremos de fato, segue um esquema simples.

<div id='2.a' class='image-container'>
  <img
    class='image'
    src="/images/devs/section-2/relatorios_dinamicos.png" 
    alt="relatorios_dinamicos" 
    style="width:750px; border-radius: 15px;"
  />
</div>

Para cada item contido na lista de relatórios, existe uma API que nos traz do **Banco de Dados** os parâmetros necessários para atender aquele relatório. Por meio de uma tabela auxiliar chamada **'reports'.** Ela nos entrega dados como *título do relatório, a rota da API do relatório, a descrição sucinta dele, a data de criação e edição e o status (se está ativo ou não)*.

Além disto, ela nos entrega JSONs de Colunas e Filtros também, trazendo a grade de dados que será impressa na tela e os filtros das colunas existentes para aquele relatório.

<div class='link'>

> 🔗 [Abordamos a Filtragem Dinâmica em relatórios nesta outra seção](/dev-sections/02_relatorios-dinamicos/?markdown=2)

</div>

<div id='2.b' class=code_box>

    [{
        "headerName": "Num. de Telefone",
        "field": "phone_number",
        "flex": 2
    }, ... ]

</div>

O JSON de Colunas nos trará sempre três elementos principais: **headerName** (*cabeçalho na lista*), **field** (*campo no banco de dados correspondente*), **flex** (*largura da coluna na lista*). Conforme o exemplo acima, ele representa uma coluna que nos trás Números de Telefone do banco de dados, com o espaçamento equivalente a dois itens.

Nas sessões seguintes explicaremos com mais detalhes as partes mais importantes da ferramenta e destrincharemos da forma mais simples e objetiva possível, então **leia com bastante atenção! ⚠️**

<div class='end'>