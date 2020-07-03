<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="language" content="PT-BR" />
    <title>Gerador de Currículo</title>
    <link rel="stylesheet" href="css/reset.css" />
    <style>
        p {
            line-height: 1;
            margin-bottom: 5px;
        }

        .title {
            border-bottom: 1px solid;
        }
    </style>
</head>

<body>
    <h1><?php echo $_POST['nomeCompleto'] ?></h1>
    <p><?php echo $_POST['nacionalidade'] . ', ' . $_POST['estadoCivil'] . ', ' . $_POST['idade'] ?></p>
    <p><?php echo $_POST['endereco'] ?></p>
    <p><?php echo $_POST['cidade'] . ' - ' . $_POST['estado'] ?></p>
    <p>Telefone: <?php echo $_POST['telefone'] ?></p>
    <p>Celular: <?php echo $_POST['celular'] ?></p>
    <p>E-Mail: <?php echo $_POST['email'] ?></p>
    <br />
    <h4 class="title">Objetivo</h4>
    <p><?php echo nl2br($_POST['objetivo']) ?></p>
    <br />
    <h4 class="title">Formação</h4>
    <ul>
        <?php
        if (!empty($_POST['formacao'])) {
            foreach ($_POST['formacao'] as $curso) {
                echo '<li>' . $curso['curso'] . ' - ' . $curso['instituicao'] . ', ';
                echo ($curso['conclusao'] == 'concluido') ? 'conclusão em ' : 'previsão de conclusão em';
                echo $curso['ano'] . '</li>';
            }
        }
        ?>
    </ul>
    <br />
    <h4 class="title">Experiência Profissional</h4>
    <ul>
        <?php
        if (!empty($_POST['experiencia'])) {
            foreach ($_POST['experiencia'] as $experiencia) {
                echo '<li>';
                echo '<p><strong>' . $experiencia['anoEntrada'];
                echo (empty($experiencia['anoSaida'])) ? '' : '-' . $experiencia['anoSaida'];
                echo ' - ' . $experiencia['empresa'] . '</strong></p>';
                echo '<p>' . $experiencia['cargo'] . '</p>';
                echo '<p>' . nl2br($experiencia['atividades']) . '</p>';
                echo  '</li>';
            }
        }
        ?>
    </ul>
    <br />
    <h4 class="title">Qualificações e Atividades Complementares</h4>
    <ul>
        <?php
        if (!empty($_POST['qualificacoes'])) {
            foreach ($_POST['qualificacoes'] as $qualificacao) {
                echo '<li>' . $qualificacao . '</li>';
            }
        }
        ?>
    </ul>
    <br />
    <h4 class="title">Informações Adicionais</h4>
    <ul>
        <?php
        if (!empty($_POST['informacoes'])) {
            foreach ($_POST['informacoes'] as $info) {
                echo '<li>' . $info . '</li>';
            }
        }
        ?>
    </ul>
</body>

</html>
