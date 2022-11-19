USE `full-stack-ecommerce`;

SET foreign_key_checks = 0;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` smallint unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

--
-- Data for table `country`
--

INSERT INTO `country` VALUES 
(1,'RO','Romania'),
(2,'HU','Hungary');

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;

CREATE TABLE `state` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` VALUES 
(1,'Alba',1),
(2,'Arad',1),
(3,'Arges',1),
(4,'Bacau',1),
(5,'Bihor',1),
(6,'Bistrita Nasaud',1),
(7,'Botosani',1),
(8,'Brasov',1),
(9,'Braila',1),
(10,'Buzau',1),
(11,'Caras Severin',1),
(12,'Calarasi',1),
(13,'Cluj',1),
(14,'Constanta',1),
(15,'Covasna',1),
(16,'Dambovita',1),
(17,'Dolj',1),
(18,'Galati',1),
(19,'Giurgiu',1),
(20,'Harghita',1),
(21,'Hunedoara',1),
(22,'Ialomita',1),
(23,'Iasi',1),
(24,'Ilfov',1),
(25,'Maramures',1),
(26,'Mehedinti',1),
(27,'Mures',1),
(28,'Neamt',1),
(29,'Olt',1),
(30,'Prahova',1),
(31,'Satu Mare',1),
(32,'Salaj',1),
(33,'Sibiu',1),
(34,'Suceava',1),
(35,'Teleorman',1),
(36,'Timis',1),
(37,'Tulcea',1),
(38,'Vaslui',1),
(39,'Valcea',1),
(40,'Vrancea',1),
(41,'Bucuresti',1),
(42,'Csongrad',2);



SET foreign_key_checks = 1;