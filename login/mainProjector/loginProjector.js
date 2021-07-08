import { loginTextProjector } from '../subProjectors/textProjector.js'
import { loginPasswordProjector } from '../subProjectors/passwordProjector.js'
import { loginShowButtonProjector } from '../subProjectors/showButtonProjector.js'
import { loginSubmitButtonProjector } from '../subProjectors/submitButtonProjector.js'
import { loginTitleProjector } from '../subProjectors/titleProjector.js'
import { loginContainerProjector } from '../subProjectors/containerProjector.js'
import { loginLinkProjector } from '../subProjectors/linkProjector.js'
import { loginNotificationProjector } from '../subProjectors/notificationProjector.js'

import { setupLoginNotification } from './setups/setupLoginNotification.js'
import { setupEmailValidNotification } from './setups/setupEmailValidNotification.js'


export { loginProjector }


/**
 * 
 * @param {loginController} loginController 
 * @param {rootElement} rootElement 
 * @param {login} login-Modell 
 */
const loginProjector = (loginController, rootElement, login) => {

  // -------------Login Button-------------
  const loginButtonElement = loginSubmitButtonProjector(login)


  // -------------Login Title-------------
  const titleElement = loginTitleProjector()


  // -------------Input Elements-------------
  const [ emailInputElement, emailLabelElement ] = loginTextProjector(login, 'Email')
  const [ passwordInputElement, passwordLabelElement ] = loginPasswordProjector(login, 'Password')


  // -------------Notification Elements-------------
  const emailValidNotificationElement = loginNotificationProjector()
  setupEmailValidNotification(login, emailValidNotificationElement, emailInputElement)

  const loginNotificationElement = loginNotificationProjector()
  setupLoginNotification(login, loginNotificationElement)
  loginNotificationElement.id = 'loginNotification'


  // -------------Show Button-------------
  const showButtonElement = loginShowButtonProjector(login)


  // -------------Forgot Email or Password Link-------------
  const forgotLinkElement = loginLinkProjector('Forgot email or password?')


  // -------------Container Elements-------------
  const emailInputContainer = loginContainerProjector([emailInputElement, emailValidNotificationElement], 'emailInputContainer')

  const passwordInputContainer = loginContainerProjector([passwordInputElement, showButtonElement], 'passwordInputContainer')


  // -------------Form Element-------------
  const formElement = document.createElement('form')


  
  rootElement.appendChild(titleElement)
  rootElement.appendChild(formElement)

  formElement.appendChild(loginNotificationElement)
  formElement.appendChild(emailLabelElement)
  formElement.appendChild(emailInputContainer)
  formElement.appendChild(passwordLabelElement)
  formElement.appendChild(passwordInputContainer)
  formElement.appendChild(forgotLinkElement)
  formElement.appendChild(loginButtonElement)
}