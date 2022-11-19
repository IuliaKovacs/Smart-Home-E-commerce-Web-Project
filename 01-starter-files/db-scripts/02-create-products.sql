-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20),
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO PRODUCT_CATEGORY(CATEGORY_NAME) VALUES ('Smart Lighting');
INSERT INTO PRODUCT_CATEGORY(CATEGORY_NAME) VALUES ('Security and Surveillance');
INSERT INTO PRODUCT_CATEGORY(CATEGORY_NAME) VALUES ('Smart Thermostats');

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID,DATE_CREATED)
VALUES ('HUE-2GEN-100', 'Philips - Hue Bridge', '2nd Generation - White',
'https://m.media-amazon.com/images/I/413a6m7cFkL._SX425_.jpg'
,1,100,59.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-PLA-201', 'Philips - Smart GU10 Bulb',
'Philips Hue White & Color Ambiance LED Smart GU10 Bulb, Bluetooth & Zigbee Compatible (Hue Hub Optional), Voice Activated with Alexa, 1-Pack',
'https://m.media-amazon.com/images/I/51vMJWxilLS._AC_SX466_.jpg'
,1,100,34.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-PLA-102', 'Philips - Hue Play', 'White & Color Ambiance Smart LED Bar Light (2 Pack) - Multicolor',
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298635cv11d.jpg'
,1,100,159.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('NAN-SHA-103', 'Nanoleaf Shapes', 'Mini Triangles Smarter Kit (5pk) - Multicolor',
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426521_sd.jpg;maxHeight=640;maxWidth=550'
,1,100,99.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-PLA-104', 'Philips - Hue Play Gradient Lightstrip', '65''',
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427739_sd.jpg;maxHeight=640;maxWidth=550'
,1,100,269.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-PLA-105', 'Philips - Smart Lightstrip Plus', 
'1m/3ft Extension (No Plug), (Voice Compatible with Amazon Alexa, Apple Homekit and Google Home), White',
'https://m.media-amazon.com/images/I/5171s2dx4+S._AC_UL480_FMwebp_QL65_.jpg'
,1,100,34.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-DIM-101', 'Philips - Hue Dimmer Switch', 'White',
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454394_sd.jpg;maxHeight=200;maxWidth=300'
,1,100,29.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HUE-PLA-104', 'Philips - Gradient Signe Table Lamp',
'Compatible with Alexa, Apple HomeKit and Google Assistant, White',
'https://m.media-amazon.com/images/I/516RuMuq5KL._AC_SX466_.jpg'
,1,100,269.99,1, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('TPL-TC6-100', 'TP-Link - TC65 security camera',
'Smart. Secure. Easy. Protecting You all day. Receive instant notifications and check feeds when the motion is detected.',
'https://i.ebayimg.com/thumbs/images/g/Jd8AAOSwsqVi1Ce7/s-l225.webp'
,1,100,79.99,2, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('TPL-TC6-101', 'TP-Link - Tapo C200 WIFI Smart',
'Smart. Secure. Easy. Protecting You all day. Receive instant notifications and check feeds when the motion is detected.',
'https://i.ebayimg.com/thumbs/images/g/uYsAAOSwfD9i8rjd/s-l225.webp'
,1,100,79.99,2, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('TPL-TC6-102', 'TP-Link - VIGI C400HP-4 VIGI C400HP',
'TP-Link VIGI C400HP-4 3MP Turret Network Camera, 4mm Lens, Smart Detection, Smart IR, WDR, 3D NDR, Night Vision, H.265+, PoE/12V DC.',
'https://i.ebayimg.com/images/g/njYAAOSwfyljEAoe/s-l500.jpg'
,1,100,99.99,2, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('TPL-TC6-103', 'TP-Link - VIGI C300HP-6 VIGI C300HP',
'TP-Link VIGI C400HP-4 3MP Turret Network Camera, 4mm Lens, Smart Detection, Smart IR, WDR, 3D NDR, Night Vision, H.265+, PoE/12V DC.',
'https://i.ebayimg.com/images/g/ujcAAOSw3oFjEAon/s-l500.jpg'
,1,100,59.99,2, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HON-RTH-101', 'Honeywell - Home RTH9585WF Wi-Fi Smart',
'Controller Type  -	IFTTT, Google Assistant, Amazon Alexa, IOS, Android. Special Feature  -	Customizable color touchscreen, Smart Response Technology, Energy Star certified',
'https://m.media-amazon.com/images/I/81iSTdLWl4L._AC_SX679_.jpg'
,1,100,89.99,3, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('GOG-NST-101', 'Google - Nest Smart Thermostat',
'Controller Type  -	IFTTT, Google Assistant, Amazon Alexa, IOS, Android. Special Feature  -	Customizable, Smart Response Technology, Energy Star certified',
'https://m.media-amazon.com/images/I/71vTp9YTjuL._AC_SX466_.jpg'
,1,100,59.99,3, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('HON-RTH-102', 'Bosch - BCC100 Control Smart Thermostat',
'Controller Type  -	IFTTT, Google Assistant, Amazon Alexa, IOS, Android. Special Feature  -	Customizable, Smart Response Technology, Energy Star certified',
'https://m.media-amazon.com/images/I/61Y4kMPk1NL._AC_SX466_.jpg'
,1,100,59.99,3, NOW());

INSERT INTO PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('GOG-NST-102', 'Google - Nest Learning Thermostat',
'Controller Type  -	Vera, Amazon Alexa Special Feature  -	Wireless: Working Wi-Fi connection: 802.11b/g/n @ 2.4GHz, 5GHz, Wireless interconnect: 802.15.4 @ 2.4GHz, Bluetooth Low Energy (BLE)',
'https://m.media-amazon.com/images/I/71mQb+Qg6iL._AC_SX679_.jpg'
,1,100,199.99,3, NOW());

