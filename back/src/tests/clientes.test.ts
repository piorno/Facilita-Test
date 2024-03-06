import app from "../app";
const request = require("supertest");

describe("POST /api/clientes", () => {
    it("should return all clientes", async () => {
        console.log('aqui')
        const res = await request(app).post("/api/clientes").send({
            nome: "teste",
            email: "teste",
            telefone: "teste"
        });
        expect(res.statusCode).toBe(201);
        // expect(res.body.length).toBeGreaterThan(0);
    });
});