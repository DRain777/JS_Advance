'use strict';

 const userKey = "users";
 const userLoginKey = 'auth';
 

function addUsers (login ,password) {
    const usersArray = getUsers();
    if(usersArray.some((user) => user.login === login)) {
      
        throw new Error('User already exist');
        
    }
    usersArray.push({login,password})
    saveUsers(usersArray);

    
   

}


function getUsers() {
    
    const data = localStorage.getItem(userKey);
    if (data === null) {
        return [];
    }
      return JSON.parse(data);

    
}



function saveUsers(usersArray) {
  const json = JSON.stringify(usersArray);
  localStorage.setItem(userKey, json);
}



function findUser (login){
     return getUsers().find((user) => user.login === login);

      



}




function authUser(login){
    localStorage.getItem(userLoginKey
    ,login)

}


function getAuthedUser() {

    return localStorage.getItem(userLoginKey)
}




  function logout() {
    localStorage.removeItem(userLoginKey)
  }
  
