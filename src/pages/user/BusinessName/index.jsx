import React from 'react'
import styles from "./style.module.css"
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext, useEffect, useState } from 'react'
import mainContext from '../../../context/mainContext'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BusinessName({ newUser = true, BusinessName }) {

    const { header } = useContext(mainContext),
        navigate = useNavigate(),
        location = useLocation(),
        [data, setData] = useState(location.state),
        [language, setLanguage] = useState(JSON.parse(localStorage.language));
        useEffect(() => {
            header.setIsTitle(false)
            header.setIsHeaderSet(false)
            header.setIsArrow(false)
            setLanguage(JSON.parse(localStorage.language))
        console.log(data);
    }, [])

    const handleChange = (e) => {
          setData({...data, businessName:e.target.value})
    }

    const handleClickNew = () => {
        navigate('/business-category', { state: data })
    }

    const handleClickExist = () => {
        console.log('exist');
    }

    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <UserTitle text1={language.BUSINESS_NAME_HEADER} />
            </div>
            <div className={styles.input}>
                <Input autoFocus type='text' onChange={handleChange} placeholder={newUser ? language.YOUR_BUSINESS_NAME : ''} defaultValue={!newUser ? BusinessName : ''} />
            </div>
            <div className={styles.btn}>
                <BtnSubmitIcon color='orange' icon={newUser ? 'Arrow.svg' : 'v to text.svg'} func={newUser ? handleClickNew : handleClickExist} />
            </div>
        </div>
    )
}