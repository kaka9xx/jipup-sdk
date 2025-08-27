//src/client.ts

import axios, { AxiosInstance } from "axios";

export interface JipupClientOptions {
  baseURL?: string; // mặc định = prod
}

export class JipupClient {
  private api: AxiosInstance;

  constructor(options: JipupClientOptions = {}) {
    this.api = axios.create({
      baseURL: options.baseURL ?? "https://jipupapi.onrender.com",
      headers: { "Content-Type": "application/json" },
    });
  }

  // ========== Health ==========
  async health() {
    const res = await this.api.get("/healthz");
    return res.data;
  }

  // ========== Users ==========
  async registerUser(data: { telegramId: string; username?: string; referrerId?: string }) {
    const res = await this.api.post("/user/register", data);
    return res.data;
  }

  async getUserById(id: string) {
    const res = await this.api.get(`/user/${id}`);
    return res.data;
  }

  async getUserByTelegram(telegramId: string) {
    const res = await this.api.get(`/user/by-telegram/${telegramId}`);
    return res.data;
  }

  // ========== Tasks ==========
  async listTasks(params?: { type?: string; includeInactive?: boolean }) {
    const res = await this.api.get("/tasks", { params });
    return res.data;
  }

  async completeTask(data: { userId: string; taskId: string; date?: string }) {
    const res = await this.api.post("/tasks/complete", data);
    return res.data;
  }

  async getTaskProgress(userId: string, limit = 50) {
    const res = await this.api.get(`/tasks/progress/${userId}`, { params: { limit } });
    return res.data;
  }

  // ========== Items ==========
  async listItems(activeOnly = true) {
    const res = await this.api.get("/items", { params: { activeOnly } });
    return res.data;
  }

  async buyItem(data: { userId: string; itemId: string; amount: number }) {
    const res = await this.api.post("/items/buy", data);
    return res.data;
  }

  async getInventory(userId: string) {
    const res = await this.api.get(`/inventory/${userId}`);
    return res.data;
  }

  // ========== Claims ==========
  async createClaim(data: { userId: string; amount: number }) {
    const res = await this.api.post("/claim", data);
    return res.data;
  }

  async getClaims(userId: string) {
    const res = await this.api.get(`/claim/${userId}`);
    return res.data;
  }
}
