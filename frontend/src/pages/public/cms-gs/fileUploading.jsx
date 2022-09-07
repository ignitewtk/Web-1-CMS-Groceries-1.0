// https://juejin.cn/post/7058093329057546248


import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, SubMenu } from "antd";

import { BrowserRouter, Redirect, Routes, Route, Link, useMatch, Outlet } from 'react-router-dom'

import React, {Component, useRef, useState} from 'react'

import menuList from './config/menuConfig'
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
        const { files: newFiles } = e.target
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles)
            setFiles(updatedFiles)
            callUpdateFilesCb(updatedFiles)

        }
    }

    return (
        <div>
            <h3> File Upload </h3>
            <p> Drag upload or click the button below  </p>
            <button type="button">
                <span> Upload </span>
            </button>
            <input type="file" ref={fileInputField} onChange={handleNewFileUpload}/>
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