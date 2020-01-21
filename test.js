const request = require("supertest");
const server = require("./server");
const todo = require("./todo");
const chai = require("chai");

describe(" TODO API TESTS", done => {
  it("POST /api/v1/new should test that the api will create a new todo", async () => {
    const todo = {

        description:"Go to Shoprite",

        responsible: "Mulubwa",

        priority:"Medium",
        
        completed:"true"
     
    };

    const response = await request(server)
      .post("/api/v1/new")
      .send(todo);
    chai.expect(response.status).to.equal(200);
  }); //ends todo create test

  it("GET /api/v1/:id should test that the api will retrieve/return one todo", async () => {
    const query = {
      userId: "5e217c6db189fe53c42e8b82"
    };
    const response = await request(server)
      .get("/api/v1/:id")
      .send(query);
    chai.expect(response.status).to.equal(200);
  }); //ends get one todo test

  it("GET /api/v1/list should return a list of todos", async () => {
    const response = await request(server)
      .get("/api/v1/list")
      .send();
    chai.expect(response.status).to.equal(200);
  }); //ends get todo list

  it("PUT /api/v1/:id should update a todo in the collection", async () => {
    const todo = {
      userId: "5e217c6db189fe53c42e8b82",
        description:"Go to Shoprite and Spar",

        responsible: "Mulubwa & Aubrey",

        priority:"High",
        
        completed:"false"
    };

    const response = await request(server)
      .put("/api/v1/:id")
      .send(todo);
    chai.expect(response.status).to.equal(200);
  }); //ends todo update

})

it("DELETE /api/v1/:userId should delete a todo in the collection", async () => {
  const query = {
    userId: "5e217c6db189fe53c42e8b82"
  };
  const response = await request(server)
    .delete("/api/v1/:userId")
    .send(query);
  chai.expect(response.status).to.equal(200);
});//ends todo delete
