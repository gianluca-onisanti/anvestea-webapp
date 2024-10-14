export default function markdownReader( markdownFiles = [] ) {
    
    const urlParams = new URLSearchParams(window.location.search)
    const markdownIndex = urlParams.get("markdown") || 0

    // Aqui definimos o markdown dessa Sessão
    // const markdownFiles = [
    //     "./01_o-comeco-e-o-fim", 
    //     "./02_tecnologias-escolhidas",
    //     "./03_autenticacao"
    // ]

    // Verificar se o índice é válido
    if (
        Number(markdownIndex) >= 0 &&
        Number(markdownIndex) < markdownFiles.length
    ) {
        const markdownFile = markdownFiles[Number(markdownIndex)];

        // Carregar o conteúdo Markdown usando fetch
        fetch(markdownFile)
            .then((response) => response.text())
            .then((markdownContent) => {
                // Renderizar o conteúdo Markdown no elemento 'main'
                const mainElement = document.querySelector("main")
                mainElement && (mainElement.innerHTML = markdownContent)
            })
            .catch((error) => {
                console.error("Erro ao carregar o arquivo Markdown:", error)
                // Lógica para lidar com o erro (exibir uma mensagem de erro, etc.)
            });
    } else {
        console.error("Índice de Markdown inválido:", markdownIndex)
        // Lógica para lidar com o índice inválido
    }
}