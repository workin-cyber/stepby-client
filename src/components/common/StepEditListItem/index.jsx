import React from 'react'
import styles from "./style.module.css"

const StepEditListItem = ({ title, text, type, style = {}, ...props }) => {
   
 // exsisting icon svg images in arr belowe
   const iconsArr = ["answer", "file", "list", "gradin", "payment", "img", "pdf", "video"]
   const icon = type === "file" ? "Upload" : type === "img" ? "image" : type === "pdf" ? "filePDF" :type

   return (
      <li className={styles.StepEditListItem} style={style} {...props} >

         <div className={styles.iconContainer} >
            <img className={styles.widgetIcon} src={`/images/icon-btns/${icon}.svg`} />  {/* by type */}
         </div>

         <div className={styles.columContainer} >
            <div className={styles.title} >{title}</div>
            <div className={styles.text} >{text}</div>
         </div>

      </li>
   )
}

export default StepEditListItem