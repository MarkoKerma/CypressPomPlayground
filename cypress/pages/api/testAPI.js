class TestAPI {
    createUser(userTitle, bodyOfUser, userId) {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            body:
            {
                "title": userTitle,
                "body": bodyOfUser,
                "userId": userId
            }
        }).then((response) => {
            cy.wrap(response).as('createUserResponse');
        });
    }

    assertSuccessfullyCreatedUser(userTitle, bodyOfUser, userId) {
        cy.get('@createUserResponse').then((createUserResponse) => {
            expect(createUserResponse.status).equal(201);
            expect(createUserResponse.body.title).equal(userTitle);
            expect(createUserResponse.body.body).equal(bodyOfUser);
            expect(createUserResponse.body.userId).equal(userId);
        });
    }

}

export default TestAPI;