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
    Auth.signIn(loginEmail, loginPassword)
            .then(success => {Alert.alert('successful sign in');
            this.props.navigation.navigate('Main')})
            .catch(err => console.log(err));
}

function logoutTraveler(){
    Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
}

