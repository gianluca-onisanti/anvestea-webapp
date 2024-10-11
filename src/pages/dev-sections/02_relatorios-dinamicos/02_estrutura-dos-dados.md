<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Estrutura dos dados
      </a></li>
      <li><a class='sub' href="#1.a">
        &emsp;<span class='bold'>1.a</span>Variaveis do Relatório
      </a></li>
      <li><a class='sub' href="#1.b">
        &emsp;<span class='bold'>1.b</span>Exemplo de Relatório
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>Rota de API
      </a></li>
      <li><a class='sub' href="#2.a">
        &emsp;<span class='bold'>2.a</span>Requisição Axios
      </a></li>
      <li><a class='sub' href="#2.b">
        &emsp;<span class='bold'>2.b</span>Inserindo o 'ListView'
      </a></li>
    </ul>
  </div>
</nav>


<div class='title'>
<h2 id="1.">Estrutura dos dados: a face do relatório</h2>
<hr class='solid'>
</div>

Como dito anteriormente, a estrutura em JSON do nosso relatório está armazenada tabela **'reports'**. Junto do JSON, possuímos as seguintes variáveis:

<div id="1.a" class=code_box>

  `{`<br />
  &emsp;`report_id`&emsp; *// Chave Única do Relatório*<br />
  &emsp;`report_name`&emsp; *// Nome do Relatório*<br />
  &emsp;`report_route`&emsp; *// O endereço URL da API do relatório*<br />
  &emsp;`description`&emsp; *// Descrição breve sobre o relatório*<br />
  &emsp;`columns`&emsp; ***// JSON do colunas do relatório***<br />
  &emsp;`filters`&emsp; *// JSON dos Filtros personalizados **(explicada na sessão 'Filtros Dinâmicos' )***<br />
  &emsp;`date_created`&emsp; *// Data e hora de criação*<br />
  &emsp;`date_updated`&emsp; *// Data e hora da ultima atualização*<br />
  &emsp;`status`&emsp; *// Se está Operendo ou Descontinuado*<br />
  `}`<br />

</div>

Cada uma destas variáveis irá altera algo diferente na nossa tela de relatórios. Veja neste exemplo a seguir:

<div id='1.b' class='image-container'>
  <img
    class='image'
    src="/images/devs/section-2/exemplo_relatorio_1.PNG" 
    alt="relatorios_dinamicos" 
    style="width:750px; border-radius: 15px;"
  />
</div>

Este processo acrescenta um cunho adaptativo a ferramenta, e permite que a gente possa alternar entre cada registro no banco de dados. Para cada registro, é um relatório completamente diferente do outro.

<div class='title'>
<h2 id="2.">Rota de API: Imprimir os dados na lista</h2>
<hr class='solid'>
</div>

**Percebeu que faltou mostrar os dados dentro da lista?** Pois bem, a variável **report_route** veio atender esse propósito na hora de passar a uma URL para requisição de API.

Criamos uma chamada **Axios**, uma biblioteca que tem funcionalidades voltadas a requisição. Nela, passamos a URL da API daquele relatório (**report_route**) e os parâmetros de filtro, que trataremos apenas em ['Filtros Dinâmicos'](/dev-sections/02_relatorios-dinamicos/?markdown=2). Observe abaixo um trecho de código para exemplificar como são extraídos os dados por API:

<div id='2.a' class=code_box>

    const [data, setData] = useState([]) // definimos um hook para os dados
    const report_route = '/api/compras/read'
    const filtros = new URLSearchParams({ ... }) // onde declaramos filtros

    async function () { 
        await axios.get(`${report_route}?${filtros}`) // Requisição Axios
        .then((response: any)) => {
            setData(responde.data) // coletamos os dados
        }.catch(err => {
            console.error("Erro ", err) // Caso haja erro no resultado
        })
    }

</div>

Feito. Agora emos uma requisição no formato padrão do nosso código. Vale lembrar que todos os dados no Datasol são extraídos desta maneira, ou seja, os dados estruturais também vem de uma requisição, quase identica a esta.

A extração de dados por API garante uma velocidade muito maior em relação a uma consulta padrão, além de manter nosso código limpo, enxuto e organizado, sem misturar front-end com o back.

Por fim, selecionamos o componente personalizado do Datasol chamado 'ListView'. Ele é um DataGrid da MUI personalizado, simplificado e adaptado para nossos padrões. Veja como funciona:

<div id='2.b' class='code_box'>

        <ListView
            id={(e: any) => { // Na API, criamos chave única contendo 'id'
              for (const key in e) {
                if (key.toLowerCase() === 'id') {
                  return e[key]
                }
              }
              return null
            }}
            data={data} // Dados puxados do Axios
            columns={columns} // JSON das colunas
        />

</div>

E... pronto! Destrinchamos os pontos iniciais dos Relatórios Dinâmicos. Nos próximos tópicos referentes as funcionalidades, abordaremos sobre ['Filtros Dinâmicos'](/dev-sections/02_relatorios-dinamicos/?markdown=2), o ['Painel de Edição'](/dev-sections/02_relatorios-dinamicos/?markdown=3) e os ['Responsáveis'](/dev-sections/02_relatorios-dinamicos/?markdown=4).

<div class='end'>