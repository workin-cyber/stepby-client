import styles from "./style.module.css"
import React, { useContext, useState } from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"

import axios from "axios"


const TempPDF = ({ data }) => {
    const { drawer } = useContext(mainContext)

    const [currentFile, setCurrentFile] = useState()
    const [question, setQuestion] = useState()

    const showInfo = (file) => {

        const typeArr = file?.name.slice(file?.name.lastIndexOf(".") + 1);

        if (typeArr !== "pdf") {
            console.log("The file needs to be .pdf");
            return 
        }

        if (file.size / 1024 / 1024 > 4) {
            alert("file is too big")
            return
        }
        setCurrentFile(file);
    }

    const handleSubmitAnswer = () => {
        const formData = new FormData();
        formData.append("new_file", currentFile);
        formData.append("data", JSON.stringify(
            {
                ...data,
                type: "pdf",
                owner: "biz",
                title: question,
                isRequired: "",
                content: ""
            }
        ))

        axios({
            method: "post",
            url: `http://localhost:5000/shaul/files/upload/`,
            data: formData

        })
            .then((result) => {
                console.log(result.data.uploadLocation);
                // setUploadLocation(result.data)
            })
            .catch((error) => console.log(error || "error"));

        drawer.setDrawer('')
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ"}
                icon={"/images/icon-btns/filePDF.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"TempPDF"}
                placeholder="תיאור למסמך"
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                htmlFor="fileUpload"
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempPDF