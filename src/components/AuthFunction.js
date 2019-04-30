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
    Auth.signIn(loginEmail, loginPassword)
            .then(success => {
                console.log('\nlogin success\n'+JSON.stringify(success))
                return ""
            })
            .catch(err => {
                console.log('\nlogin failed\n'+JSON.stringify(err))
                return err.message
            });
}

function logoutTraveler(){
    Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
}

export { loginTraveler }