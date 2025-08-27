import { JipupClient } from "../src";

describe("JipupClient basic", () => {
  const api = new JipupClient();

  it("should return ok from /healthz", async () => {
    const res = await api["client"].get("/healthz");
    expect(res.data.status).toBe("ok");
  });
});
