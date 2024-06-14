import produtos from '../../../json/produtos.json' with { type: 'json' };
let display = document.getElementById("display-produtos");
function definirConteudoPreco(status, id, preço) {
    if (status == "ESGOTADO") {
        return `
        <span id="valor-${id}" class="w-full pt-0.5 pb-3 text-[#A42628] text-center text-sm border-2 border-[#A42628] ">
            ESGOTADO
        </span>
        `;
    }
    else {
        return `
        <span id="valor-${id}" class="font-bold text-lg">
            R$ ${preço === null || preço === void 0 ? void 0 : preço.toFixed(2)}
        </span>
        `;
    }
}
function displayConjunto() {
    display.innerHTML = "";
    let listaConjuntos = produtos.conjuntos;
    for (let i = 0; i < listaConjuntos.length; i++) {
        let conteudo = `
            <div class="flex flex-col items-center text-center">
                <img src="${listaConjuntos[i].img}" alt="${listaConjuntos[i].nome}" class="max-h-3/4 sm:max-h-3/5 ">
                <div class="flex flex-col text-center mt-2">
                    <span>${listaConjuntos[i].nome}</span>
                    <span class="text-xs mb-3">
                        Cod: <span id="codigo-${listaConjuntos[i].id}" class="font-bold">6005</span>
                    </span>
                </div>
                ${definirConteudoPreco(listaConjuntos[i].estoque.status, listaConjuntos[i].id, listaConjuntos[i].estoque.preço)}
            </div>
        `;
        display.innerHTML += conteudo;
    }
}
if (display) {
    displayConjunto();
}
