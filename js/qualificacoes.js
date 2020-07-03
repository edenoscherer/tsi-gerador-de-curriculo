let countQualificacao = 0;
function adicionarQualificacao() {
    const html = `<div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <input type="text" class="form-control" name="qualificacoes[${countQualificacao}]" />
            </div>
        </div>
    </div>`;
    var newElement = document.createElement("div");
    newElement.id = `qualification-${countQualificacao}`;
    newElement.innerHTML = html;
    document.getElementById("container-qualification").appendChild(newElement);
    countQualificacao += 1;
}
adicionarQualificacao();
