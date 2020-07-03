let countFormacao = 0;
function adicionarFormacaoAcademica() {
    const html = `<div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="formacao[${countFormacao}][curso]">Curso</label>
                                    <input type="text" class="form-control" name="formacao[${countFormacao}][curso]" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="formacao[${countFormacao}][instituicao]">Instituição</label>
                                    <input type="text" class="form-control" name="formacao[${countFormacao}][instituicao]" />
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="formacao[0][conclusao]">Ano de Conclusão:</label>
                                    <select class="form-control" name="formacao[${countFormacao}][conclusao]">
                                        <option value=""></option>
                                        <option value="concluido">Concluído em: </option>
                                        <option value="em_andamento">Previsão de conclusão em: </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="formacao[${countFormacao}][ano]">Ano</label>
                                    <input type="number" class="form-control" name="formacao[${countFormacao}][ano]" />
                                </div>
                            </div>
                        </div>`;
    var newElement = document.createElement("div");
    newElement.id = `formation-${countFormacao}`;
    newElement.innerHTML = html;
    document.getElementById("container-formation").appendChild(newElement);
    countFormacao += 1;
}
adicionarFormacaoAcademica();
