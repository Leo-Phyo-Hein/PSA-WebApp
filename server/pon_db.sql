-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pon_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pon_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pon_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pon_db` ;

-- -----------------------------------------------------
-- Table `pon_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pon_db`.`user` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `driverNo` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pon_db`.`pon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pon_db`.`pon` (
  `idpon` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle_number` VARCHAR(45) NULL DEFAULT NULL,
  `driver_name` VARCHAR(45) NULL DEFAULT NULL,
  `driverNo` VARCHAR(45) NULL DEFAULT NULL,
  `item_details` VARCHAR(100) NULL DEFAULT NULL,
  `image` LONGTEXT NULL DEFAULT NULL,
  `userid` INT NOT NULL,
  `approval` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpon`),
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `userid`
    FOREIGN KEY (`userid`)
    REFERENCES `pon_db`.`user` (`userid`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
