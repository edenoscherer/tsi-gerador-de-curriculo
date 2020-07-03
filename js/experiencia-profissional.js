let countExperiencia = 0;
function adicionarExperiencia() {
    const html = `<div class="row">
        <div class="col-sm-4">
            <div class="form-group">
                <label for="experiencia[${countExperiencia}][empresa]">Empresa</label>
                <input type="text" class="form-control" name="experiencia[${countExperiencia}][empresa]" />
            </div>
        </div>
        <div class="col-sm-2">
            <div class="form-group">
                <label for="experiencia[${countExperiencia}][anoEntrada]">Ano Entrada</label>
                <input type="text" class="form-control" name="experiencia[${countExperiencia}][anoEntrada]" />
            </div>
        </div>
        <div class="col-sm-2">
            <div class="form-group">
                <label for="experiencia[${countExperiencia}][anoSaida]">Ano Saída</label>
                <input type="text" class="form-control" name="experiencia[${countExperiencia}][anoSaida]" />
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label for="experiencia[${countExperiencia}][cargo]">Cargo</label>
                <input type="text" class="form-control" name="experiencia[${countExperiencia}][cargo]" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <label for="experiencia[${countExperiencia}][atividades]">
                    Principais atividades desempenhadas no cargo:
                </label>
                <textarea class="form-control" name="experiencia[${countExperiencia}][atividades]" rows="3"></textarea>
            </div>
        </div>
    </div>`;
    var newElement = document.createElement("div");
    newElement.id = `experience-${countExperiencia}`;
    newElement.innerHTML = html;
    document.getElementById("container-experience").appendChild(newElement);
    countExperiencia += 1;
}
adicionarExperiencia();
