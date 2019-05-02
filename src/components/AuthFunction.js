import Amplify, { Auth } from 'aws-amplify';
import aws_config from '../aws-exports';


Amplify.configure(aws_config);

/*
Signup Info example
{
    username: useremail,
    password: userpassword,
    attributes: {
      name: username,
    }
}
*/
async function signupTraveler(signupInfo){
    await Auth.signUp(signupInfo).then(data => {console.log(data);})
                                 .catch(err => console.log(err))
}



function loginTraveler(loginEmail, loginPassword){
    // console.log(loginEmail, loginPassword)
    return new Promise(function (resolve, reject){
        Auth.signIn(loginEmail, loginPassword)
            .then(success => {
                console.log('\nlogin success\n'+JSON.stringify(success))
                resolve('success')
            })
            .catch(err => {
                console.log('\nlogin failed\n'+JSON.stringify(err))
                reject(err.message)
            });
    })
}

function logoutTraveler(){
    Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
}

function getInfoTraveler(){
    Auth.currentAuthenticatedUser()
            .then(data => console.log('currentAuthenticatedUser data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    Auth.currentCredentials()
            .then(data => console.log('currentCredentials data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    Auth.currentSession()
            .then(data => console.log('currentSession data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    Auth.currentUserCredentials()
            .then(data => console.log('currentUserCredentials data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    Auth.currentUserInfo()
            .then(data => console.log('currentUserInfo data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    Auth.currentUserPoolUser()
            .then(data => console.log('currentUserPoolUser data : ',data))
            .catch(err => {console.log('error : ',err,'\n\n')})
    

}

export { signupTraveler, loginTraveler, logoutTraveler, getInfoTraveler }