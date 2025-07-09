const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.department()
    }
    return newFake;
}
const newFakeProduct = createProduct();
app.get("/api/product/new", (req, res) => {
    res.json(newFakeProduct);
});


const createUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    }

}

const creteCommpany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    }
}

app.get("/api/user/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
    const newCompany = creteCommpany();
    res.json(newCompany);
}
);

application.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = creteCommpany();
    res.json({ newUser, newCompany });
}
);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

