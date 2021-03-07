import React, { FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFiles } from '../../context/files';

import { DropContainer, UploadMessage } from './styles';

const Upload: FunctionComponent = () => {
    const { handleUpload } = useFiles();

    const onDrop = useCallback((files)=>{
        handleUpload(files)
    },[handleUpload]);

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        accept: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
        onDrop,
    });
    
    const renderDragMessage = useCallback(() => {
        if(!isDragActive) {
            return <UploadMessage color="#707070" >Arraste imagens aqui.</UploadMessage>
        }
        if(isDragReject) {
            return <UploadMessage color="#e57878" >Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage color="#78e5d5" >Solte sua imagem aqui.</UploadMessage>
    },[isDragActive, isDragReject]);

    return (
        <DropContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {renderDragMessage()}
        </DropContainer>
    )
}

export default Upload;