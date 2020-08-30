import React from 'react'; 
import FormSectionStyles from './formSection.module.css'


const FormSection = ({children}) => { 
return <div className={FormSectionStyles.wrapper}>{children}</div>
}

export default FormSection