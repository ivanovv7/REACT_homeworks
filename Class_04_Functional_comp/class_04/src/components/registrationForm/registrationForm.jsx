import { useState } from "react"
import { DisplayForm } from "../displayForm/displayForm"
import { PrintRegisteredUsers } from "../registeredUsersPrinting/printRegisteredUsers";


export const RegistrationFormComp = () => {
  //INNITIAL USER ARRAY
  let initialUsers = [
    {
      id: 1,
      userFullName: "Ivan Ivanov",
      userEmail: "ivanovv7@icloud.com",
      userPassword: "ivanpasword",
    },
  ];

  //HOOKS
  const [users, setUsers] = useState(initialUsers);
  const [fullName, setName] = useState();
  const [email, setMail] = useState();
  const [password, setPassword] = useState();

  //HANDLERS
  const handleUserFullname = (value) => {
    setName(value);
  };

  const handleUserMail = (value) => {
    setMail(value);
  };

  const handleUserPassword = (value) => {
    setPassword(value);
  };

  const handleAddUser = () => {
    // console.log("clicked")
    // console.log(users)
    const user = {
      id: Date.now(),
      userFullName: fullName,
      userEmail: email,
      userPassword: password,
    };

    // the if statement checks if all the inputs have a value -->
    // i dont want to change state if the inputs are not fullfiled by the user -->
    //without this if check i will have inconsistent data in my "users" array -->
    //so the state is changed i.e the new user is added ONLY if every input has a value.
    if(user.userFullName && user.userEmail && user.userPassword){

        setUsers([...users, user]);
        
    } else{
       alert("YOU MUST ENTER ALL FIELDS MY FRIEND :)")
       console.warn("YOU MUST ENTER ALL FIELDS MY FRIEND :)")
    }

  };


  const removeAllUsers = () => {
    setUsers([])
}

  return (
    <>
     
      <DisplayForm
        userFullname={fullName}
        userEmail={email}
        userPassword={password}
        handleAddUser={handleAddUser}
        handleUserFullname = {handleUserFullname}
        handleUserPassword = {handleUserPassword}
        handleUserMail = {handleUserMail}
      />

      {/* {console.log(fullName,email,password)}  */}
       {/* {console.log(users)} -->> OK NEW USER ADDED  */}


       {/*PRINTING REGISTERED USERS*/ }
       <PrintRegisteredUsers users = {users} removeAllUsers = {removeAllUsers} />
    </>
  );
}