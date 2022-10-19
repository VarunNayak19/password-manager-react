import React from 'react'
import CopyPassword from '../copyPassword/copyPassword'
import './siteContainer.css'

const SiteContainer = (props: any) => {
    return (
        <div className='siteContainer'>
            <div className='siteHead'>
                <img src={`/appIcons/${props.appIcon}Icon.png`} alt="icon" className='siteIcon' />
                <div className='siteDetails'>
                    <p className='siteName'>{props.appName}</p>
                    <CopyPassword />
                </div>
            </div>
            <div className='siteLink'>
                www.{props.appIcon}.com
            </div>
        </div>
    )
}

export default SiteContainer