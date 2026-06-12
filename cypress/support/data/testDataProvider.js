import { faker } from "@faker-js/faker"

export const testDataProvider = {

    getTodoName: function () {
        var name = faker.commerce.productName()
        return name
    },
    
    getFewTodosNames: function () {
        var names = faker.lorem.sentences({min:2, max:8}, '|').split('|')
        return names
    }
}