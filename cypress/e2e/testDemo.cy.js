import LoginDomainLogic from '../pages/domain-logic/loginDL'

const loginDL = new LoginDomainLogic();

describe('Check login to TestLink', () => {
  it('Login', () => {
    loginDL.loginToApplication('fakeuser', 'fakepass');
  });
})