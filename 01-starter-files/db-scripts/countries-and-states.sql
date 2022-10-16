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
(1,'CA','Canada'),
(2,'US','United States');

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
(1,'Alberta',1),
(2,'British Columbia',1),
(3,'Manitoba',1),
(4,'New Brunswick',1),
(5,'Newfoundland and Labrador',1),
(6,'Northwest Territories',1),
(7,'Nova Scotia',1),
(8,'Nunavut',1),
(9,'Ontario',1),
(10,'Prince Edward Island',1),
(11,'Quebec',1),
(12,'Saskatchewan',1),
(13,'Yukon',1),
(14,'Alabama',2),
(15,'Alaska',2),
(16,'Arizona',2),
(17,'Arkansas',2),
(18,'California',2),
(19,'Colorado',2),
(20,'Connecticut',2),
(21,'Delaware',2),
(22,'District Of Columbia',2),
(23,'Florida',2),
(24,'Georgia',2),
(25,'Hawaii',2),
(26,'Idaho',2),
(27,'Illinois',2),
(28,'Indiana',2),
(29,'Iowa',2),
(30,'Kansas',2),
(31,'Kentucky',2),
(32,'Louisiana',2),
(33,'Maine',2),
(34,'Maryland',2),
(35,'Massachusetts',2),
(36,'Michigan',2),
(37,'Minnesota',2),
(38,'Mississippi',2),
(39,'Missouri',2),
(40,'Montana',2),
(41,'Nebraska',2),
(42,'Nevada',2),
(43,'New Hampshire',2),
(44,'New Jersey',2),
(45,'New Mexico',2),
(46,'New York',2),
(47,'North Carolina',2),
(48,'North Dakota',2),
(49,'Ohio',2),
(50,'Oklahoma',2),
(51,'Oregon',2),
(52,'Pennsylvania',2),
(53,'Rhode Island',2),
(54,'South Carolina',2),
(55,'South Dakota',2),
(56,'Tennessee',2),
(57,'Texas',2),
(58,'Utah',2),
(59,'Vermont',2),
(60,'Virginia',2),
(61,'Washington',2),
(62,'West Virginia',2),
(63,'Wisconsin',2),
(64,'Wyoming',2);


SET foreign_key_checks = 1;