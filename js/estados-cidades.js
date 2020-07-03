"use strict";
class EstadosCidades {
    static init() {
        this.initEstados();
    }
    static initEstados() {
        fetch("js/estados-cidades.json")
            .then((res) => res.json())
            .then((dados) => {
                this.dados = dados;
                console.log(dados);
                this.atualizarListaEstados();
            })
            .catch((err) => console.error(err));
    }
    static atualizarListaEstados() {
        let html = '<option value="">Selecione o Estado</option>';
        for (const estado of this.dados.estados) {
            html += `<option value="${estado.sigla}">${estado.nome}</option>`;
        }
        document.getElementById("estado").innerHTML = html;
    }

    static atualizarListaCidade(uf) {
        for (const estado of this.dados.estados) {
            if (estado.sigla == uf) {
                let html = '<option value="">Selecione a cidade</option>';
                for (const cidade of estado.cidades) {
                    html += `<option value="${cidade}">${cidade}</option>`;
                }
                document.getElementById("cidade").innerHTML = html;
                break;
            }
        }
    }
}
EstadosCidades.init();

document.getElementById("estado").onchange = (event) => {
    EstadosCidades.atualizarListaCidade(event.target.value);
};
