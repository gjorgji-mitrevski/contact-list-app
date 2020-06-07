/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Contact {\n\n  constructor(name, image, sex, age, birthday, addressFirstLine, addressSecondLine, \n      homePhone, cellPhone, primaryEmail, secondaryEmail, billingContactName, billingContactImage, notes){\n        this.name = name;\n        this.image = image;\n        this.sex = sex;\n        this.age = age;\n        this.birthday = birthday;\n        this.addressFirstLine = addressFirstLine;\n        this.addressSecondLine = addressSecondLine;\n        this.homePhone = homePhone;\n        this.cellPhone = cellPhone;\n        this.primaryEmail = primaryEmail;\n        this.secondaryEmail = secondaryEmail;\n        this.billingContactName = billingContactName;\n        this.billingContactImage = billingContactImage;\n        this.notes = notes;\n  }\n}\n\nclass SelectedContact {\n  constructor(contact){\n    this.selectedContact = contact;\n  }\n\n  render() {\n    const userName = document.getElementById('user-name');\n    const userImage = document.getElementById('imgLoaded');\n    const userNotes = document.getElementById('notes');\n    const userSex = document.getElementById('sex');\n    const userAge = document.getElementById('age');\n    const userBirthday = document.getElementById('birthday');\n    const userAddressFirstLine = document.getElementById('addresFLine');\n    const userAddressSecondLine = document.getElementById('addresSLine');\n    const userHomePhone = document.getElementById('home-phone');\n    const userCellPhone = document.getElementById('cell-phone');\n    const userPrimaryEmail = document.getElementById('primary-email');\n    const userSecondaryEmail = document.getElementById('secondary-email');\n    const userBillingContact = document.getElementById('bil-con-name');\n    const userBillingImage = document.getElementById('billing-image');\n    userName.textContent = this.selectedContact.name;\n    userImage.src = this.selectedContact.image;\n    userNotes.textContent = this.selectedContact.notes;\n    userSex.textContent = this.selectedContact.sex;\n    userAge.textContent = this.selectedContact.age;\n    userBirthday.textContent = this.selectedContact.birthday;\n    userAddressFirstLine.textContent = this.selectedContact.addressFirstLine;\n    userAddressSecondLine.textContent = this.selectedContact.addressSecondLine;\n    userHomePhone.textContent = this.selectedContact.homePhone; \n    userCellPhone.textContent = this.selectedContact.cellPhone;\n    userPrimaryEmail.textContent = this.selectedContact.primaryEmail;\n    userSecondaryEmail.textContent = this.selectedContact.secondaryEmail;\n    userBillingContact.textContent = this.selectedContact.billingContactName;\n    userBillingImage.src = this.selectedContact.billingContactImage;\n  }\n}\n\nclass ContactItem {\n  constructor(contact){\n    this.contact = contact;\n  }\n\n  showContactDetails(){\n    const selectedContact = new SelectedContact(this.contact);\n    selectedContact.render();\n  }\n\n  render(){\n    const contEl = document.createElement('li');\n    contEl.className = 'nav-item li-contacts';\n    contEl.innerHTML = `\n    <img  src=\"${this.contact.image}\" alt=\"${this.contact.name}\" class=\"img-thumbnail user-profile-small\">\n    <label>${this.contact.name} </label>\n    `;\n    \n    contEl.addEventListener('click', this.showContactDetails.bind(this));\n    return contEl;\n  }\n}\n\nclass ContactList {\n  constructor(){\n    this.myProfile = new Contact('Jason H.');\n    this.contacts = [\n      new Contact('Jake Ryan', 'assets/images/profile-jake.png', 'Male', '25', 'April 15, 1995', '5th Avenue',\n      'New York City', '907-22-233', '123-556-96', 'jake@gmail.com', 'jakeryan@hotmail.com', 'Gary Ryan',\n      'assets/images/profile-gary.png',\n      'Text for Jake Ryan, consectetur adipiscing elit. Suspendisse ut rhoncus velit.'),\n  \n      new Contact('Tom Johnson', 'assets/images/profile-tome.png', 'Male', '30', 'February 10, 1990', 'Golden Dawn Circle 1161',\n      'Anchorage', '901-32-973', '335-657-18', 'tom@yahoo.com', 'tomejohnson@yahoo.com', 'John Bil',\n      'assets/images/profile-john.png',\n      'Text for Tom Johnson, consectetur adipiscing elit. Suspendisse ut rhoncus velit.'),\n  \n      new Contact('Sara Johnson', 'assets/images/profile-girl.png', 'Female', '28', 'Jully 26, 1991', '10th Ave',\n      'San Francisco', '902-00-234', '748-129-86', 'sarajohnes@yahoo.com', 'saraj@gmail.com', 'Khory Jones',\n      'assets/images/profile-khory.png',\n      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut rhoncus velit.')\n    ];\n  }\n\n  render(){\n    // const renderHook = document.getElementById('list-contacts');\n    const renderHook = document.getElementById('ul-lists');\n    for(const con of this.contacts){\n      const contactItem = new ContactItem(con);\n      const contEl = contactItem.render();\n      renderHook.append(contEl);\n    }\n\n  }\n}\n\n\nclass App {\n  constructor(contactList) {\n    this.contactList = contactList;\n    // this.contactList.myProfile;\n  }\n\n  render() {\n    this.contactList.render();\n    const activeUser = document.getElementById('dropdown01');\n    activeUser.textContent = this.contactList.myProfile.name;\n  }\n\n  handleSearch(){\n      let text = this.value;\n      const list = document.getElementsByTagName('li');\n      for(let i = 0; i < list.length; i++){\n        if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {\n            list[i].style.display = 'none';\n        } else {\n            list[i].style.display = 'block';\n        }\n      }\n  }\n\n}\n\nconst app = new App(new ContactList());\napp.render();\n\n// search \nconst searchInput = document.getElementById('search-input');\nsearchInput.addEventListener('keyup', app.handleSearch);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });