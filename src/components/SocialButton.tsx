import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

const SocialButton = () => {
    const responseFacebook = (response: any) => {
        console.log(response);
    }

    const responseGoogle = (response: any) => {
        console.log(response);
    }

    return (
        <>
            <FacebookLogin
                appId="219809130939063"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>This is my custom FB button</button>
                )} />

            <GoogleLogin
                clientId="265158975038-moj808e789atkv6800qcnaf1usl206vp.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>This is my custom google button</button>
                )}
            />
        </>
    )
}

export default SocialButton