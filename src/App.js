import React, { useState } from "react";

const App = () => {

  const [loginForm, setLoginForm] = useState({username:'',password:''});
  const handleFormSubmit = (event)=> {
    event.preventDefault();
    console.log(loginForm.username);
    if(loginForm.username ==='' && loginForm.password ===''){
      alert("Username and Password required");
    }
  }
  const handleFormChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setLoginForm({...loginForm,[name]:value});
    console.log({...loginForm,[name]:value})
  }
  return (
    <div className="container">
      <div className="row" style={{margin:20}}>
        <div
          className="col-md-4 offset-md-4 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1"
          style={{
            margin:'150px auto',
            backgroundColor: "#f1f1f1",
            paddingBottom: 50,
            borderRadius: 30,
            border: "0.5px solid #ccc",
            boxShadow: "0px 3px lightblue",
            textAlign:"center"
          }}
        >
          <div className="col-md-12 center text-center" style={{ padding: 15 }}>
            <img
              src="https://nisda.pk/wp-content/uploads/2021/06/premier-league-logo-png-transparent.png"
              width={"200"}
            />
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                aria-describedby="username"
                placeholder="Username"
                autoComplete="Off"
                style={{fontSize:15}}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                style={{fontSize:15}}
                onChange={handleFormChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
