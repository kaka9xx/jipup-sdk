import { JipupClient } from "../src";

describe("Jipup SDK End-to-End Flow", () => {
  const api = new JipupClient();
  let userId: string;

  it("should register a new user", async () => {
    const user = await api.registerUser(
      Date.now().toString(), // TelegramId giả để tránh trùng
      "sdk_test_user"
    );
    expect(user).toHaveProperty("id");
    expect(user.telegramId).toBeDefined();
    userId = user.id;
  });

  it("should fetch tasks", async () => {
    const tasks = await api.listTasks();
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it("should complete a task", async () => {
    const tasks = await api.listTasks();
    const taskId = tasks[0].id;

    const result = await api.completeTask(userId, taskId);
    expect(result.success).toBe(true);
    expect(result.newTotalPoints).toBeGreaterThanOrEqual(0);
  });

  it("should buy an item (if enough points)", async () => {
    try {
      const res = await api.buyItem(userId, "itm_box", 1);
      expect(res.success).toBe(true);
    } catch (err: any) {
      // có thể lỗi nếu user chưa đủ điểm
      expect(err.response.status).toBe(400);
    }
  });

  it("should get inventory", async () => {
    const inv = await api.getInventory(userId);
    expect(Array.isArray(inv)).toBe(true);
  });

  it("should create a claim on-chain", async () => {
    const res = await api.createClaim(userId, 1); // test claim 1 unit
    expect(res.success).toBe(true);
    expect(res.claimId).toBeDefined();
  });

  it("should fetch claims", async () => {
    const claims = await api.getClaims(userId);
    expect(Array.isArray(claims)).toBe(true);
  });
});
