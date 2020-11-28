import React from 'react';

export default function LoadingBox() {
    return (
        <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" ,position: 'fixed', top: "0%", left: "0%", fontSize: "80px"}}>
            <i class="fas fa-spinner fa-spin"></i>
        </div>   
    )
}