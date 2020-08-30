import React from 'react'; 
import InvestorsStyles from './investorsSection.module.css'

const InvestorsSection = ({children}) =>{ 
return <section className={InvestorsStyles.wrapper}>{children}</section>
}

export default InvestorsSection