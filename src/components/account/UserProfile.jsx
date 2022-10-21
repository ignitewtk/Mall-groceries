import './login.css'

import React, { Component, useRef, useState } from 'react'
import {Form, Input, Button, Checkbox, Row, Col} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'
// import './login.less'

import  { useSelector, useDispatch } from 'react-redux'
import { setUploadFile, selectUploadFile,
    setProfileImageSrc, selectProfileImageSrc } from '../../redux/accountSlice'
import { reqGetProfileImage } from '../../api'





function UserProfile()  {

    const dispatch = useDispatch()
    const uploadFiles = useSelector(selectUploadFile)
    const imgSrc = useSelector(selectProfileImageSrc)

    function uploadFile(e) {
        // Get the uploaded file
        const files = e.target.files
        console.log(files)
        let ext = files[0].name.split('.')
        console.log(files[0].name, " etx: ", ext[ext.length-1])
        // make image as FormData Object
        let formData = new FormData()
        formData.append('keyOfImage', files[0])

        // update uploaded file state
        // non-serialsed data stored in the state
        dispatch(setUploadFile(e.target.files[0]))
    
    }

    function submitFile(fileName) {
        // send request
        if (!fileName) {
            fileName = 'logo.jpg'
        }
        console.log("filename", fileName)
        reqGetProfileImage({
            fileName: fileName
        }).then(response => {
            dispatch(setProfileImageSrc(response.data))
        }).catch(error => {
            console.log("return profile image error:", error)
        })
    }
    

    return (
    <div style={{height:"60vh", padding:"10px 20px"}}> 
        <h2 style={{textAlign:"center"}}> User profile </h2>
        <Row>
            <Col span={1} />
            <Col span={4}>
                
                <section>
                    <h3> Personal Information </h3>
                    
                    <div> File Upload </div>
                    <form action="" method="post" encType="multipart/form-data">
                        <div> 
                            <input style={{height:"100px", width:"200px", borderStyle:"solid"}} 
                                onChange={uploadFile}
                                type="file" />
                        </div>
                        
                    </form>
                    <button onClick={() => {
                        console.log("-----------", uploadFiles)
                        submitFile('logo.jpg')
                    }}> Submit </button>
                    {
                        // if uploadFiles has value, render the <img>, else do not render
                        uploadFiles &&
                        <img 
                            src={URL.createObjectURL(uploadFiles)}
                        />
                    }
                    <img src={imgSrc}/>
                    
                </section>
            </Col>
            <Col span={4} />
            <Col span={4}>
                <section>
                    <h3> Orders </h3>
                </section>
                <section>
                    <h3> Payments </h3>
                </section>
                <section>
                    <h3> Login & Security </h3>
                </section>
            </Col>
        </Row>
    </div>
    )
    
}

export default UserProfile

