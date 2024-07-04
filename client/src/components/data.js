// CREATE TABLE `category` (
//     `idcategory` int(11) NOT NULL,
//     `namecategory` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     `isActive` tinyint(4) NOT NULL DEFAULT '1',
//     PRIMARY KEY (`idcategory`),
//     UNIQUE KEY `idcategory_UNIQUE` (`idcategory`),
//     UNIQUE KEY `namecategory_UNIQUE` (`namecategory`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
//   CREATE TABLE `categoryneedies` (
//     `idcategoryneedies` int(11) NOT NULL AUTO_INCREMENT,
//     `idneedies` int(11) NOT NULL,
//     `idcategory` int(11) NOT NULL,
//     `isactive` tinyint(4) DEFAULT '1',
//     PRIMARY KEY (`idcategoryneedies`),
//     UNIQUE KEY `id_UNIQUE` (`idcategoryneedies`),
//     KEY `idcategory_idx` (`idcategory`),
//     KEY `idneedies_idx` (`idneedies`),
//     CONSTRAINT `idcategoryn` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION,
//     CONSTRAINT `idneedies` FOREIGN KEY (`idneedies`) REFERENCES `needies` (`idneedies`) ON DELETE NO ACTION ON UPDATE NO ACTION
//   ) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
  
//   CREATE TABLE `categoryvolunteers` (
//     `idcategoryvolunteers` int(11) NOT NULL AUTO_INCREMENT,
//     `idvolunteers` int(11) NOT NULL,
//     `idcategory` int(11) NOT NULL DEFAULT '1',
//     `isactive` tinyint(4) DEFAULT '1',
//     PRIMARY KEY (`idcategoryvolunteers`),
//     UNIQUE KEY `id_UNIQUE` (`idcategoryvolunteers`),
//     KEY `idcategory_idx` (`idcategory`),
//     KEY `idvolunteeries_idx` (`idvolunteers`),
//     CONSTRAINT `idcategoryv` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION,
//     CONSTRAINT `idvolunteeries` FOREIGN KEY (`idvolunteers`) REFERENCES `volunteers` (`idvolunteers`) ON DELETE NO ACTION ON UPDATE NO ACTION
//   ) ENGINE=InnoDB AUTO_INCREMENT=1009 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
//   CREATE TABLE `linking` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `idcategoryvolunteers` int(11) NOT NULL,
//     `idcategoryneedies` int(11) NOT NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE KEY `id_UNIQUE` (`id`),
//     KEY `idcategoryneedies_idx` (`idcategoryneedies`),
//     KEY `idcategoryvolunteers_idx` (`idcategoryvolunteers`),
//     CONSTRAINT `idcategoryneedies` FOREIGN KEY (`idcategoryneedies`) REFERENCES `categoryneedies` (`idcategoryneedies`) ON DELETE NO ACTION ON UPDATE NO ACTION,
//     CONSTRAINT `idcategoryvolunteers` FOREIGN KEY (`idcategoryvolunteers`) REFERENCES `categoryvolunteers` (`idcategoryvolunteers`) ON DELETE NO ACTION ON UPDATE NO ACTION
//   ) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
  
//   CREATE TABLE `needies` (
//     `idneedies` int(11) NOT NULL AUTO_INCREMENT,
//     `usernameneedies` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     PRIMARY KEY (`idneedies`),
//     UNIQUE KEY `idneedies_UNIQUE` (`idneedies`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
//   CREATE TABLE `passwords` (
//     `idUser` int(11) NOT NULL,
//     `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     PRIMARY KEY (`idUser`),
//     UNIQUE KEY `username_UNIQUE` (`idUser`),
//     CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
  
//   CREATE TABLE `users` (
//     `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     `username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     `phone` int(11) DEFAULT NULL,
//     `idUser` int(11) NOT NULL AUTO_INCREMENT,
//     `isActive` tinyint(4) NOT NULL DEFAULT '1',
//     `isManager` tinyint(4) DEFAULT '0',
//     PRIMARY KEY (`idUser`),
//     UNIQUE KEY `username_UNIQUE` (`username`),
//     UNIQUE KEY `idUser_UNIQUE` (`idUser`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  
  
//   CREATE TABLE `volunteers` (
//     `idvolunteers` int(11) NOT NULL AUTO_INCREMENT,
//     `usernamevolenteers` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
//     PRIMARY KEY (`idvolunteers`),
//     UNIQUE KEY `idvolunteers_UNIQUE` (`idvolunteers`),
//     UNIQUE KEY `usernamevolenteers_UNIQUE` (`usernamevolenteers`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
  