// src/client.ts
import axios from "axios";
var JipupClient = class {
  constructor(options = {}) {
    this.api = axios.create({
      baseURL: options.baseURL ?? "https://jipupapi.onrender.com",
      headers: { "Content-Type": "application/json" }
    });
  }
  // ========== Health ==========
  async health() {
    const res = await this.api.get("/healthz");
    return res.data;
  }
  // ========== Users ==========
  async registerUser(data) {
    const res = await this.api.post("/user/register", data);
    return res.data;
  }
  async getUserById(id) {
    const res = await this.api.get(`/user/${id}`);
    return res.data;
  }
  async getUserByTelegram(telegramId) {
    const res = await this.api.get(`/user/by-telegram/${telegramId}`);
    return res.data;
  }
  // ========== Tasks ==========
  async listTasks(params) {
    const res = await this.api.get("/tasks", { params });
    return res.data;
  }
  async completeTask(data) {
    const res = await this.api.post("/tasks/complete", data);
    return res.data;
  }
  async getTaskProgress(userId, limit = 50) {
    const res = await this.api.get(`/tasks/progress/${userId}`, { params: { limit } });
    return res.data;
  }
  // ========== Items ==========
  async listItems(activeOnly = true) {
    const res = await this.api.get("/items", { params: { activeOnly } });
    return res.data;
  }
  async buyItem(data) {
    const res = await this.api.post("/items/buy", data);
    return res.data;
  }
  async getInventory(userId) {
    const res = await this.api.get(`/inventory/${userId}`);
    return res.data;
  }
  // ========== Claims ==========
  async createClaim(data) {
    const res = await this.api.post("/claim", data);
    return res.data;
  }
  async getClaims(userId) {
    const res = await this.api.get(`/claim/${userId}`);
    return res.data;
  }
};
export {
  JipupClient
};
//# sourceMappingURL=index.mjs.map