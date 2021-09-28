import { ErrorOutline } from "@mui/icons-material";
import React, { useEffect } from "react";

function NotFoundPage() {
  useEffect(()=>{
    window.document.documentElement.scrollTop="0"
},[])
  return (
    <div style={{textAlign:'center',padding:"2%"}}>
      <div>
        <ErrorOutline style={{fontSize:'200px',color:'red'}}/>
      </div>
      <h1>404 Not found</h1>
    </div>
  );
}

export default NotFoundPage;
