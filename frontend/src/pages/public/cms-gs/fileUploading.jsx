// https://juejin.cn/post/7058093329057546248

import { reqAddFile } from '../../../api';
import React, {Component, useRef, useState} from 'react'

import './mainboard2.css'


const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);


const FileUpload = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    
    const fileInputField = useRef(null)
    const [files, setFiles] = useState({})

    const handleUploadBtnCLick = () => {
        fileInputField.current.click()
    }
    
    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size < maxFileSizeInBytes) {
                if (!otherProps.multiple) {
                    return { file };
                }
                files[file.name] = file
            }
        }
        return {...files}
    }

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files)    
        updateFilesCb(filesAsArray)
    }
    
    const handleNewFileUpload = (e) => {
        
        // const { files: newFiles} = e.target
        // console.log(newFiles[0].name, newFiles[0].file, newFiles[0].size, newFiles[0].type)
        
        // if (newFiles.length) {
        //     let updatedFiles = addNewFiles(newFiles)
        //     setFiles(updatedFiles)
        //     callUpdateFilesCb(updatedFiles)

        //     console.log("submit files")
        //     reqAddFile(updatedFiles)
        // }
        
        const newFiles = e.target.files
        let data = new FormData()
        data.append('file', newFiles[0])
        // console.log(newFiles[0].name, newFiles[0].file, newFiles[0].size, newFiles[0].type)
        // console.log(data.get('file').type)
        reqAddFile(data)

    }

    return (
        <div>
            <h3> File Upload </h3>
            <p> Drag upload or click the button below  </p>
            <button type="button">
                <span> Upload </span>
            </button>
            <input type="file" enctype="multipart/form-data" ref={fileInputField} onChange={handleNewFileUpload}/>
            <span> File preview </span>
            <div> 
                {
                    Object.keys(files).map((fileName, index) => {
                        let file = files[fileName]
                        let isImageFile = file.type.split("/")[0] === "image"
                        return (
                            <div key={fileName}>
                                <div>
                                    {
                                        // isImageFile && (
                                        //     <img 
                                        //         src={URL.createObjectURL(file)} 
                                        //         alt={`file preview ${index}`} />
                                        // )
                                        (
                                            <img 
                                                src={URL.createObjectURL(file)} 
                                                alt={`file preview ${index}`} />
                                        )
                                    }
                                    <div>
                                        <span> {file.name} </span>
                                        <span>{convertBytesToKB(file.size)} kb</span>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default FileUpload