import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect, useState } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import InputVerification from '../../../components/all/InputVerification'
import SomethingWentWrong from '../../../components/all/somethingWentWrong'
import UserNumberVerification from '../../../components/all/UserNumberVerification'


import { useLocation, useNavigate } from 'react-router-dom'

export default function Verification({ props }) {

  const { header } = useContext(mainContext)
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)
  const [code, setCode] = useState("")
  const phoneNumber = useLocation()

  useEffect(() => {
    header.setIsTitle(false)
  }, [])

  function goToNextPage() {
    // console.log(code);
    //make an if clause if a user is new he will go to line 30 , else- if he is an existing user then go to 31
    navigate('/user-name', { state: code })
    // navigate('/projects', { state: code })

  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text={languages[0].dict.SUBMIT_CODE} />
      </div>
      <div className={styles.input}>
        <InputVerification setCode={setCode} />
      </div>
      <div className={styles.phoneNum}>
        <UserNumberVerification counter={counter} phoneNum={phoneNumber.state} />
      </div>
      <div className={styles.someThingWrong}>
        <SomethingWentWrong setCounter={setCounter} />
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg' func={goToNextPage} />
      </div>
    </div >
  )
}