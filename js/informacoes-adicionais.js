let countInformacao = 0;
function adicionarInformacao() {
    const html = `<div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <input type="text" class="form-control" name="informacoes[${countInformacao}]" />
            </div>
        </div>
    </div>`;
    var newElement = document.createElement("div");
    newElement.id = `information-${countInformacao}`;
    newElement.innerHTML = html;
    document.getElementById("container-information").appendChild(newElement);
    countInformacao += 1;
}
adicionarInformacao();
