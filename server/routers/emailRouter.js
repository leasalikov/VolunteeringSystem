// const express = require('express');



// import express from "express";
// import { sendEmail }  from '../service/EmailService';

// const EmailRouter = express.Router();
// const EmailController = new emailController();

// // needyRouter.get("/:id", emailController.getVolunteerById);
// // emailRouter.get("/", emailController.getemail);
// emailRouter.post("/", emailController.sendEmail);
// // needyRouter.post("/:id", needyController.addVolunteer);
// // needyRouter.delete("/:id", emailController.deleteVolunteer);
// // needyRouter.put("/:id", emailController.updateVolunteer);

// export {
//     emailRouter
// }




import express from "express";
// import { emailController } from "../controllers/emailController.js";
import { EmailController } from "../controllers/emailController.js";

const emailRouter = express.Router();
const emailController = new EmailController();

// needyRouter.get("/:id", emailController.getVolunteerById);
emailRouter.post("/", emailController.postemail);
// emailRouter.post("/", emailController.addemail);
// needyRouter.post("/:id", needyController.addVolunteer);
// needyRouter.delete("/:id", emailController.deleteVolunteer);
// needyRouter.put("/:id", emailController.updateVolunteer);

export {
    emailRouter
}



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
  


































    // return (
    // <>
    //     <Header />
    //     <div className="divStyle">
    //         <form onSubmit={volunteering}>
    //             {buttonsArray.map(item => (
    //                 <div className='type' key={item.key}>
    //                     <button onClick={() => handleCheckboxChange(item.key, !categoriesArray[item.key])} className={item.className}></button>
    //                     <br />
    //                     <label htmlFor={item.id}>{item.label}</label>
    //                     <input
    //                         type="checkbox"
    //                         id={item.id}
    //                         name={item.id}
    //                         value={categoriesArray[item.key]}
    //                         onChange={() => handleCheckboxChange(item.key, !categoriesArray[item.key])}
    //                     /><br />
    //                 </div>
    //             ))}
    //             <br />
    //             <button type="submit">התנדבות</button>
    //         </form>
    //     </div>
    //     <Buttom />
    // </>
    // );




    // const [categoriesArray, setCategoriesArray] = useState({
    //     אוכל: false,
    //     אירוח: false,
    //     משחקים: false,
    //     בייביסיטר: false
    // });

    // const buttonsArray = [
    //     { id: 'food', label: 'ארוחות חמות', key: 'אוכל', className: 'foodImg' },
    //     { id: 'hosting', label: 'אירוח', key: 'אירוח', className: 'hostImg' },
    //     { id: 'toys', label: 'משחקים לילדים', key: 'משחקים', className: 'toysImg' },
    //     { id: 'babysitter', label: 'בייביסיטר', key: 'בייביסיטר', className: 'babysitterImg' }
    // ];

    // const handleCheckboxChange = (key, value) => {
    //     setCategoriesArray(prevState => ({
    //         ...prevState,
    //         [key]: value
    //     }));
    // };
