import '../displayForm/displayForm.css'

export const DisplayForm = (props) => {
  return (

    <><h1>Users Form</h1>
    <div>
      <form action="">
        <fieldset>
          <legend>User Registration</legend>

          {/*username*/}
          <label htmlFor="username">Username</label>
          <input  type="text" required
           id="username" 
           placeholder="Enter username" 
           onChange={(e) => props.handleUserFullname(e.target.value) }/>

          {/*password*/}
          <label htmlFor="password">Password</label>
          <input 
          type="password"  required 
          maxLength={25} 
          id="password" 
          placeholder="Enter passwrod" 
          onChange={(e) => props. handleUserPassword(e.target.value)}/>

          {/*email*/}
          <label htmlFor="email">E-mail</label>
          <input type="text" required 
           id="email" 
           placeholder="Enter E-mail" 
           onChange={(e) => props.handleUserMail(e.target.value)}/>

         {/*SUBMIT BUTTON*/}
         <button type="button" onClick={props.handleAddUser}> Submit Form</button>
        </fieldset>
      </form>
    </div>
    </>
  );
};