<nav class='sidelist'>
  <div class='side-content'>
    <h4>Índice:</h4>
    <ul>
      <li><a class='super' href="#1.">
        <span class='bold'>1.</span>Responsáveis
      </a></li>
      <li><a class='super' href="#2.">
        <span class='bold'>2.</span>Onde posso encontrá-los?
      </a></li>
      <li><a class='sub' href="#2.a">
        &emsp;<span class='bold'>2.a</span>Esquema de acesso
      </a></li>
      <li><a class='super' href="#3.">
        <span class='bold'>3.</span>Revogação de acesso
      </a></li>
    </ul>
  </div>
</nav>

<div class='title'>
<h2 id="1.">Responsáveis: confidencialização da informação</h2>
<hr class='solid'>
</div>

O funcionamento dos responsáveis de relatórios é bem simples, porém é muito importante ter em mente o porquê dessa responsabilização ser necessária. Rebuscando o exemplo da ['super caixa de ferramentas'](http://localhost:4321/dev-sections/02_relatorios-dinamicos/?markdown=0), o *engenheiro mecâncico* não saberia como utilizar as ferramentas do *'engenheiro elétrico'*, e poderia acabar as usando de forma errônea, até mesmo quebrando a ferramenta ou se machucando. E por isso, a caixa impede que as ferramentas possam ser usadas entre um e outro, a menos que elas sejam compartilhadas e ambos saibam usar.

No nosso caso real, estas informações podem ter cunho sensível, e seria uma falha grave de confiabilidade e integridade destes dados caso se eles fossem disponibilizados para as pessoas erradas. É de responsabilidade do aplicativo e de seus desenvolvedores manter estas informações seguras entres as áreas, tornando o uso dos 'Relatórios Dinâmicos' como algo valoroso e seguro.

<div class='title'>
<h2 id="2.">Na prática</h2>
<hr class='solid'>
</div>

O controle de acesso é principalmente fundamentado por **'times'**. O relatório de contas a pagar, por exemplo, é de responsabilidade primária do time Financeiro, porém o CEO da empresa e um membro do time Fiscal necessitem ver esse relatório também.

<div id='2.a' class='image-container'>
  <img
    class='image'
    src="/images/devs/section-2/responsaveis_esquema.PNG" 
    alt="relatorios_dinamicos" 
    style="width:750px; border-radius: 15px;"
  />
</div>

Os 'times' definem vários responsáveis de uma só vez. Se o Financeiro tem 11 integrantes, todos eles poderão ver este relatório na sua lista de relatórios. Já os 'usuários' servem como excessões a regra. 

Quando precisamos que uma pessoa específica, como o Rogério que é Analista Fiscal, veja aquele relatório, ao invés de adicionar o time todo do Fiscal nós simplesmente adicionamos o Rogério como usuário responsável. Desta forma temos um controle rígido, porém personalizado de 'quem' pode ver 'o que'.

Toda essa estrutura é feita a partir da tabela de 'asignees' no banco, que atribui um relatório a um time ou a um usuário. A verificação deles é feita no menu de relatórios, onde de cara é separado o que ele irá ver.

<div class='title'>
<h2 id="3.">Revogação de acesso</h2>
<hr class='solid'>
</div>

A partir do momento que um integrante é removido de um time que tenha acesso a relatórios específicos ele deixará automaticamente de ter acesso aqueles relatórios. 

Isto também vale para a 'desanexação' de responsáveis, pois ao remover um 'usuário' ou 'time' do painel de responsáveis eles deixam no mesmo momento de ter acesso a aquelas informações. Por este motivo, a alteração dos dados do painel fica nas mãos dos gestores das áreas e do pessoal de Pesquisa e Desenvolvimento, desenvolvedores do aplicativo. 

<div class='end'>