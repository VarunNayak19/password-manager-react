import React from 'react'
import Lock from '../../components/lock/lock'
import RectangleDiv from '../../components/rectangleDiv/rectangleDiv'
import Form from '../../components/form/form'
import "../loginScreen/loginScreen.css"
import "../../index.css"
import "./loginSuccess.css"
import LoginScreen from '../loginScreen/loginScreen'
import GreenBox from '../../components/greenBox/greenBox'

const LoginSuccess = () => {
    return (
        <div>
            <div className='greenboxSuccess'>
                <GreenBox message="Congrats!!! Success, Signin to access the valut" />
            </div>
            <div className='blackToast'>
                <p>Congrtats!!! Success
                    Signin to access the vault</p>
            </div>
            <LoginScreen />

        </div>
    )
}

export default LoginSuccess