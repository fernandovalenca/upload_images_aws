import React, { FunctionComponent } from 'react';
import { MdError, MdLink, MdCheckCircle, MdMoodBad } from 'react-icons/md';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useFiles } from '../../context/files';
import { IFile } from '../../context/files';

import { Container, FileInfo, Preview } from './styles';

const FileList: FunctionComponent = () => {
  const { uploadedFiles: files, deleteFile } = useFiles();

  if(!files.length){
    return (
      <span>
        <MdMoodBad
          style={{ marginLeft: "45%", marginTop: 10 }}
          size={ 24 }
          color="#d5d2d2"
        />
      </span>
    )
  }

  return (
    <Container>
      {files.map((uploadedFile: IFile)=>(
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.url} />
            <div>
            <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}{" "}
                { !!uploadedFile.url && (
                  <button onClick={()=> deleteFile(uploadedFile.id)}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile.uploaded && !uploadedFile.error &&
            <CircularProgressbar
              value={uploadedFile.progress || 0}
              text={String(uploadedFile.progress)}
              styles={{
              root: {width: 24},
              path: {stroke: '#7159c1'},
              trail: {stroke: '#ddd'}
              }}
            />
            }
            {uploadedFile.url &&
            <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer">
              <MdLink style={{marginRight: 8}} size={24} color="#222" />
            </a>
            }
            {uploadedFile.uploaded &&
              <MdCheckCircle size={24} color="#78e5d5" />
            }
            {uploadedFile.error &&
              <MdError size={24} color="#e57878" />
            }
          </div>
        </li>
      ))}
    </Container>
  )
}

export default FileList;