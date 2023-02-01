/*CRIA BASE DE DADOS */
CREATE DATABASE `roda_vida` /*!40100 COLLATE 'utf8mb4_general_ci' */;



/*CRIA TABELA */
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(220) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matricula` varchar(220) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(220) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nota1` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nota2` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nota3` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;