import TestAPI from '../pages/api/testAPI'

const testAPI = new TestAPI();

describe('Check IS API WORKING', () => {
    it('test api post', () => {
        testAPI.createUser('Marko Here', 'something', '999202');
        testAPI.assertSuccessfullyCreatedUser('Marko Here', 'body of man', '999202');
    });
})