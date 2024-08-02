CREATE DATABASE  IF NOT EXISTS `db_eduwork` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_eduwork`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: db_eduwork
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'budi','budi@gmail.com','081234567890','pria','jl. satu'),(2,'siti','budi@gmail.com','081234567890','wanita','jl. dua'),(3,'bunga','bunga@gmail.com','081234567890','wanita','jl. tuga'),(4,'adam','adam@gmail.com','081234567890','pria','jl. empat'),(5,'nana','nana@gmail.com','081234567890','wanita','jl. lima'),(6,'rudi','rudi@gmail.com','081234567890','pria','jl. enam'),(7,'dian','dian@gmail.com','081234567890','pria','jl. tujuh'),(8,'indah','indah@gmail.com','081234567890','wanita','jl. delapan'),(9,'nur','nur@gmail.com','081234567890','wanita','jl. sembilan'),(10,'ridho','ridho@gmail.com','081234567890','pria','jl. sepuluh'),(11,'lisa','lisa@gmail.com','081234567890','wanita','jl. sebelas'),(12,'suzy','suzy@gmail.com','081234567890','wanita','jl. duabelas'),(13,'jae','jae@gmail.com','081234567890','pria','jl. tigabelas'),(14,'icha','icha@gmail.com','081234567890','wanita','jl. empatbelas'),(15,'jojon','jojon@gmail.com','081234567890','pria','jl. limabelas'),(16,'arfah','arfah@gmail.com','081234567890','pria','jl. enambelas'),(17,'daniel','daniel@gmail.com','081234567890','pria','jl. tujuhbelas'),(18,'iqbal','iqbal@gmail.com','081234567890','pria','jl. delapanbelas'),(19,'julian','julian@gmail.com','081234567890','pria','jl. sembilanbelas'),(20,'tito','tito@gmail.com','081234567890','pria','jl. duapuluh'),(21,'rahayu','rahayu@gmail.com','081234567890','wanita','jl. duapuluhsatu'),(22,'ridha','ridha@gmail.com','081234567890','wanita','jl. duapuluhdua'),(23,'kiki','kiki@gmail.com','081234567890','pria','jl. duapuluhtiga'),(24,'vira','vira@gmail.com','081234567890','wanita','jl. duapuluhempat'),(25,'lily','lily@gmail.com','081234567890','wanita','jl. duapuluhlima'),(26,'puji','puji@gmail.com','081234567890','wanita','jl. duapuluhenam'),(27,'nandi','nandi@gmail.com','081234567890','pria','jl. duapuluhtujuh'),(28,'gesti','gesti@gmail.com','081234567890','Pria','jl. duapuluhdelapan'),(29,'andi','andi@gmail.com','081234567890','Pria','jl. duapuluhsembilan'),(30,'retno','retno@gmail.com','081234567890','Pria','jl. tigapuluh');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16  6:04:24
