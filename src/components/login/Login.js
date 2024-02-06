import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import "./Login.css"
import GoogleIcon from '@mui/icons-material/Google';
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  

  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  let googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { email, password };
    console.log(obj, 123);
  };

  const auth = getAuth(app);
  const handlesignUpwithgoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user, "user");
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleSingout = () => {
    signOut(auth);
  };
  return (
    <>
    <div className="form-div">
    
      {user ? (
        <>
          <p>{`welcome user ${user.email}`}</p>&nbsp;
          <button onClick={handleSingout}>Logout</button>
        </>
      ) : (
        <>
        <Box className="form-wrapper">
            
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email"
              size="small"
              variant="outlined"
              type="email"
              placeholder="Enter email"
              value={email}
              sx={{marginTop:"10px"}}
              onChange={(e) => setEmail(e.target.value)}
            />

<TextField 
              label="Mobile"
              size="small"
              variant="outlined"
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              sx={{marginTop:"10px"}}
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              size="small"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Enter password"
              value={password}
              sx={{marginTop:"10px"}}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button   sx={{marginTop:"10px"}} variant="contained" type="submit">Login</Button>
          <Button sx={{marginTop:"10px"}}   variant="contained" onClick={handlesignUpwithgoogle}>signup with google &nbsp;&nbsp;<GoogleIcon></GoogleIcon></Button>
          </form>
          </Box>
          
          {/* <button>Signin with facebook</button> */}
        </>
      )}
      </div>
    </>
  );
};

export default Login;
