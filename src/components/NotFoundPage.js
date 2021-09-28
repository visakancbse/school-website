import { ErrorOutline } from "@mui/icons-material";
import React from "react";

function NotFoundPage() {
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
