import React from 'react';
import "./App.css"
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();
const CurrentUserContext = createContext();

function App() {

  const [theme,setTheme] =  useState("light");
  const [user,setUser] =  useState({"name":"Riddhi"});
  return (
    <div className='App'>

    <ThemeContext.Provider value={theme}>

      <CurrentUserContext.Provider value={{
        user,setUser
      }}>


{/* <Greeting/> */}

      <Welcome>

        <Panel title="Welcome">
          <LoginForm/>
        </Panel>

        <input type='checkbox' onChange={(e)=>{setTheme((e.target.checked)? "dark": "light")}}></input>{theme}

        </Welcome>

      </CurrentUserContext.Provider>    

    </ThemeContext.Provider>

     
       
    </div>
  )
}

export default App

function Welcome({children})
{
  return (
    <>
    {children}
  </>
  )
}


function LoginForm()
{

  const {setUser} = useContext(CurrentUserContext)
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");

 const canLogin = fname!=="" && lname!==""

  return(
    
    <>
      <div>
        <label>First Name:</label>
        <input value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
      </div>

      <div>
        <label>Last Name:</label>
        <input value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>
      </div>

      <Button disabled={!canLogin} onclick={()=>{
        setUser({
          name:fname + " " + lname
        })
      }}>
      Login
      </Button>
    
    </>
  )

}


function Button({children,disabled,onclick})
{

  const theme = useContext(ThemeContext);
  const className = "panel-"+theme
  return(
    <button className={className} disabled={disabled} onClick={onclick}>
        {children}
    </button>
  )

}

function Greeting()
{

  const {user} = useContext(CurrentUserContext)
  return(
    <h2>
      {user.name}
    </h2>
  )
}


function Panel({title,children})
{
  
    const theme = useContext(ThemeContext);
    const className = "panel-"+theme;
  return(
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
    )
}