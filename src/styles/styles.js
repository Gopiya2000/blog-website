import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
    loginForm : {
      display:"flex" ,
      marginLeft:'auto',
      marginRight:'auto'
    },
    submitForm : {
      maxWidth : '400px',
      display : 'flex', 
      flexDirection : 'column', 
      alignItems : 'center', 
      justifyContent : 'center',
      padding : '50px',
      margin : 'auto', 
      marginTop : '70px',
      boxShadow : '10px 10px 20px #ccc',
      borderRadius : '5px'
    }
  }))

export let appBar = {
    backgroundColor : '#2E3B55'
}
export let loginTabs = {
  textColor: 'inherit'
}
export let loginBox = {
  display:"flex",
   marginLeft:'auto'
}
export let logoutButton = {
  margin: 1,
  borderRadius: 10,
  color:'warning' 
}
export let signupButton = {
  margin: 1,
  borderRadius: 10
}



export let headerMenu = {
  color : 'white'
}
export let headerButtons = {
 
  borderRadius : '3px'
}
