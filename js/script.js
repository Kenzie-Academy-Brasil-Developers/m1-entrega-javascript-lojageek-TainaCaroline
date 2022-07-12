let secaoQuadro  = document.querySelector('.quadros')
let secaoBonecos = document.querySelector('.bonecos')

 function listarProdutos(listaProdutos, produtosVitrine, vitrine){

    for(let i = 0; i < listaProdutos.length; i++){

        let produto      = listaProdutos[i]
        let departamnetoProdutos = produto.departamneto

        if(departamnetoProdutos == produtosVitrine){

            let card    = criarCard(produto)
            vitrine.appendChild(card)
    
        }
    }
 }
 listarProdutos(produtos, 'quadros', secaoQuadro)
 listarProdutos(produtos, 'bonecos', secaoBonecos)

 function criarCard(produto){
    
    let img          = produto.img
    let nome         = produto.nome
    let valor        = produto.valor

    let tagLi    = document.createElement('li')
    let tagImg   = document.createElement('img')
    let tagNome  = document.createElement('h3')
    let tagValor = document.createElement('p')

    tagImg.src          = `./assets/imgTaina/${img}`
    tagImg.alt          = nome
    tagNome.innerText   = nome
    tagValor.innerText  = `R$ ${valor.toFixed(2)}`.replace('.',',')

    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagValor)

console.log(tagLi)
    return tagLi
 }