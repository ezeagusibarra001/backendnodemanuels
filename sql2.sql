CREATE DATABASE node20;
USE node20;

CREATE TABLE `discounts` (
  `idDiscounts` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(15) NOT NULL,
  PRIMARY KEY (`idDiscounts`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

CREATE TABLE `lesson` (
  `idLesson` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `quota` int(11) DEFAULT NULL,
  `requirements` varchar(250) DEFAULT NULL,
  `forwho` varchar(200) DEFAULT NULL,
  `teacher` varchar(60) DEFAULT NULL,
  `duration` varchar(150) DEFAULT NULL,
  `link` varchar(150) DEFAULT NULL,
  `link1` varchar(150) DEFAULT NULL,
  `descountLink` varchar(150) DEFAULT NULL,
  `date` varchar(100) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `dolar` int(11) DEFAULT NULL,
  `linkDolar` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idLesson`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

CREATE TABLE `payments` (
  `idPayment` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `data` longblob,
  `clientname` varchar(200) DEFAULT NULL,
  `clientlastname` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `lesson` varchar(200) DEFAULT NULL,
  `dateSelected` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPayment`)
) ENGINE=MyISAM AUTO_INCREMENT=96 DEFAULT CHARSET=latin1;

CREATE TABLE `publications` (
  `idPublications` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `description1` varchar(200) DEFAULT NULL,
  `description2` varchar(200) DEFAULT NULL,
  `description3` varchar(200) DEFAULT NULL,
  `subtitle` varchar(60) DEFAULT NULL,
  `subtitle2` varchar(60) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `data` longblob,
  PRIMARY KEY (`idPublications`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE `review` (
  `idReview` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `state` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`idReview`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `pass` varchar(105) DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `node20`.`user` (`user`, `pass`) VALUES ('manuels', '$2a$12$935Aa5HWK0IrrqYhPwvkWeolvNe2G2.L6lguLgFiOaWyipx5vahrq');
