class Contact {

  constructor(name, image, sex, age, birthday, addressFirstLine, addressSecondLine, 
      homePhone, cellPhone, primaryEmail, secondaryEmail, billingContactName, billingContactImage, notes){
        this.name = name;
        this.image = image;
        this.sex = sex;
        this.age = age;
        this.birthday = birthday;
        this.addressFirstLine = addressFirstLine;
        this.addressSecondLine = addressSecondLine;
        this.homePhone = homePhone;
        this.cellPhone = cellPhone;
        this.primaryEmail = primaryEmail;
        this.secondaryEmail = secondaryEmail;
        this.billingContactName = billingContactName;
        this.billingContactImage = billingContactImage;
        this.notes = notes;
  }
}

class SelectedContact {
  constructor(contact){
    this.selectedContact = contact;
  }

  render() {
    const userName = document.getElementById('user-name');
    const userImage = document.getElementById('imgLoaded');
    const userNotes = document.getElementById('notes');
    const userSex = document.getElementById('sex');
    const userAge = document.getElementById('age');
    const userBirthday = document.getElementById('birthday');
    const userAddressFirstLine = document.getElementById('addresFLine');
    const userAddressSecondLine = document.getElementById('addresSLine');
    const userHomePhone = document.getElementById('home-phone');
    const userCellPhone = document.getElementById('cell-phone');
    const userPrimaryEmail = document.getElementById('primary-email');
    const userSecondaryEmail = document.getElementById('secondary-email');
    const userBillingContact = document.getElementById('bil-con-name');
    const userBillingImage = document.getElementById('billing-image');
    userName.textContent = this.selectedContact.name;
    userImage.src = this.selectedContact.image;
    userNotes.textContent = this.selectedContact.notes;
    userSex.textContent = this.selectedContact.sex;
    userAge.textContent = this.selectedContact.age;
    userBirthday.textContent = this.selectedContact.birthday;
    userAddressFirstLine.textContent = this.selectedContact.addressFirstLine;
    userAddressSecondLine.textContent = this.selectedContact.addressSecondLine;
    userHomePhone.textContent = this.selectedContact.homePhone; 
    userCellPhone.textContent = this.selectedContact.cellPhone;
    userPrimaryEmail.textContent = this.selectedContact.primaryEmail;
    userSecondaryEmail.textContent = this.selectedContact.secondaryEmail;
    userBillingContact.textContent = this.selectedContact.billingContactName;
    userBillingImage.src = this.selectedContact.billingContactImage;
  }
}

class ContactItem {
  constructor(contact){
    this.contact = contact;
  }

  showContactDetails(){
    const selectedContact = new SelectedContact(this.contact);
    selectedContact.render();
  }

  render(){
    const contEl = document.createElement('li');
    contEl.className = 'nav-item li-contacts';
    contEl.innerHTML = `
    <img  src="${this.contact.image}" alt="${this.contact.name}" class="img-thumbnail user-profile-small">
    <label>${this.contact.name} </label>
    `;
    
    contEl.addEventListener('click', this.showContactDetails.bind(this));
    return contEl;
  }
}

class ContactList {
  constructor(){
    this.myProfile = new Contact('Jason H.');
    this.contacts = [
      new Contact('Jake Ryan', 'assets/images/profile-jake.png', 'Male', '25', 'April 15, 1995', '5th Avenue',
      'New York City', '907-22-233', '123-556-96', 'jake@gmail.com', 'jakeryan@hotmail.com', 'Gary Ryan',
      'assets/images/profile-gary.png',
      'Text for Jake Ryan, consectetur adipiscing elit. Suspendisse ut rhoncus velit.'),
  
      new Contact('Tom Johnson', 'assets/images/profile-tome.png', 'Male', '30', 'February 10, 1990', 'Golden Dawn Circle 1161',
      'Anchorage', '901-32-973', '335-657-18', 'tom@yahoo.com', 'tomejohnson@yahoo.com', 'John Bil',
      'assets/images/profile-john.png',
      'Text for Tom Johnson, consectetur adipiscing elit. Suspendisse ut rhoncus velit.'),
  
      new Contact('Sara Johnson', 'assets/images/profile-girl.png', 'Female', '28', 'Jully 26, 1991', '10th Ave',
      'San Francisco', '902-00-234', '748-129-86', 'sarajohnes@yahoo.com', 'saraj@gmail.com', 'Khory Jones',
      'assets/images/profile-khory.png',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut rhoncus velit.')
    ];
  }

  render(){
    // const renderHook = document.getElementById('list-contacts');
    const renderHook = document.getElementById('ul-lists');
    for(const con of this.contacts){
      const contactItem = new ContactItem(con);
      const contEl = contactItem.render();
      renderHook.append(contEl);
    }

  }
}


class App {
  constructor(contactList) {
    this.contactList = contactList;
    // this.contactList.myProfile;
  }

  render() {
    this.contactList.render();
    const activeUser = document.getElementById('dropdown01');
    activeUser.textContent = this.contactList.myProfile.name;
  }

  handleSearch(){
      let text = this.value;
      const list = document.getElementsByTagName('li');
      for(let i = 0; i < list.length; i++){
        if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {
            list[i].style.display = 'none';
        } else {
            list[i].style.display = 'block';
        }
      }
  }

}

const app = new App(new ContactList());
app.render();

// search 
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', app.handleSearch);