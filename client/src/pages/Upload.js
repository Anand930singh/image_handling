import React, { useState } from 'react';

function Upload() {

    // const [fileInputState,setFileInputState]=useState('');
    // const [selectedFile, setselectedFile]=useState('');
    const [previewSource, setpreviewSource]=useState('');
    const handleFileInputChange=(e)=>{
        const file=e.target.files[0];
        previewFile(file);
    }

    const previewFile=(file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setpreviewSource(reader.result);
        };
    };

    const handleSubmitFile=(e)=>{
        console.log("Submitting File....");
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage=async (base64EncodedImage)=>{
        console.log(base64EncodedImage);
        try{
            
            await fetch('http://localhost:5000/api/upload',{
                method:'POST',
                body:JSON.stringify({data:base64EncodedImage}),
                headers:{'Content-type':'application/json'},
            })
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div>
        <h1>Upload</h1>
        <form onSubmit={handleSubmitFile} className='form'>
            <input
                type='file'
                name='image'
                onChange={handleFileInputChange}
                // value={fileInputState}
                className='form-input'
            />

            <button className='btn' type='submit'>Submit</button>
        </form>
        {previewSource && (
            <img src={previewSource} alt="choosen"
            style ={{height:'300px'}}/>
        )} 
        
    </div>
  );
}

export default Upload;