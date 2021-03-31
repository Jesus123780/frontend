import React from 'react'

export const UploadImg = () => {
    return (
        <div>
            <h2>Subir Img</h2>
            <input type="file" onChange={(e)=>{
                const file= e.target.files[0];
                console.log(file)
            }}></input>
        </div>
    )
}