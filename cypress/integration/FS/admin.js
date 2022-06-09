/// <reference types="cypress"/>

import {admintUser} from "./adminPageObjects.js"

const adminuser = new admintUser()


  it('Foreign Scholarship', ()=> {

    adminuser.navigate()

  })

 //login
 it('Login as Admin', () => {
   
    adminuser.adminlogin('admin','1')

  })

  it('Admin settings', () => {

    adminuser.adminSettings()

  })
  

 