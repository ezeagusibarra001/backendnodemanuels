CREATE DATABASE heroku_9c4b36e44ec458e;
USE heroku_9c4b36e44ec458e;
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
  PRIMARY KEY (`idLesson`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
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
  PRIMARY KEY (`idPayment`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
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
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
CREATE TABLE `review` (
  `idReview` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `state` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`idReview`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `pass` varchar(105) DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
CREATE TABLE `discounts` (
  `idDiscounts` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(15) NOT NULL,
  PRIMARY KEY (`idDiscounts`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;