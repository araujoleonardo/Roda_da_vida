<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Roda da Vida Universitária</title>

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">

    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/custom.css">
    <link href="assets/css/style-grafico.css" rel="stylesheet">

    <!-- CDN BOOTSTRAP CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap4.min.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">

    <!-- ANCHARTS JS -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

    <?php
    include_once "./conexao.php";

    $sql = "SELECT * FROM usuarios";
    $result = mysqli_query($conexao, $sql);
    ?>

</head>

<body>

    <main id="RODAVIDA">

        <div class="slideInUp" id="elementoMain">
            <!-- ======= Header Section ======= -->
            <section id="header" class="header d-flex align-items-center">
                <div class="container-fluid">

                    <div class="row d-flex align-items-center justify-content-between" data-aos="zoom-in">

                        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/logo-puc.svg" class="img-header" alt="">
                        </div>

                        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/logo puc-pr.svg" class="img-header" alt="">
                        </div>

                    </div>

                </div>
            </section><!-- End Header Section -->

            <!-- ************************************ Resultado ************************************ -->
            <section id="dicas" class="hero section-bg">
                <div class="container-fluid" data-aos="fade-up" style="min-height: 600px;">

                    <?php
                        $dados = mysqli_fetch_all($result, MYSQLI_ASSOC);
                        echo "<table id='example' class='table table-striped table-bordered' style='width:100%'>
                            <thead>
                                <th>Nome</th>
                                <th>Matricula</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Saúde Integral</th>
                                <th>Inclusão e Diversidade</th>
                                <th>Garantias de Direitos e Proteção</th>
                                <th>Aprendizagem e Desenvolvimento</th>
                            </thead>";                        
                        foreach ($dados as $linha) {                            
                                echo "<tr>
                                    <td>" . $linha['nome'] . "</td>
                                    <td>" . $linha['matricula'] . "</td>
                                    <td>" . $linha['email'] . "</td>
                                    <td>" . $linha['telefone'] . "</td>
                                    <td>" . $linha['nota1'] . "</td>
                                    <td>" . $linha['nota2'] . "</td>
                                    <td>" . $linha['nota3'] . "</td>
                                    <td>" . $linha['nota4'] . "</td>
                                </tr>";
                            }
                        echo "</table>";
                    ?>

                </div>
            </section><!-- End hero Section -->

        </div>
        <!-- =================================== Footer ========================================= -->
        <footer id="footer">
            <div class="container-fluid footer-bottom clearfix">
                <div class="copyright">
                    <img src="assets/img/logo puc-pr.svg" class="img-header" alt="">
                </div>
                <div class="credits">
                    <ul>
                        <li>
                            <a href="#" class="nav-link">OUVIDORIA</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">TRABALHE NA PUC</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">POLÍTICA DE PRIVACIDADE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer><!-- End Footer -->
        </div>
    </main>

    <!-- Vendor JS Files -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/js/roda_vida.js"></script>
    <script src="assets/js/main.js"></script>
    <script>
        $(document).ready(function () {
            $('#example').DataTable({
                "language": {
                    "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
                }
            });
        });
    </script>
</body>

</html>