const request = require("supertest");
const app = require("../server");

describe("Event API", () => {
    it("should create a new event", async () => {
        const res = await request(app)
            .post("/api/events")
            .send({ name: "Test Event", description: "Sample Description", date: "2025-03-14", category: "Meeting" });

        expect(res.statusCode).toEqual(401);
    });

    it("should fetch all events (unauthorized)", async () => {
        const res = await request(app).get("/api/events");
        expect(res.statusCode).toEqual(401);
    });
});
