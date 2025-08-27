"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  JipupClient: () => JipupClient
});
module.exports = __toCommonJS(src_exports);

// src/client.ts
var import_axios = __toESM(require("axios"));
var JipupClient = class {
  constructor(options = {}) {
    this.api = import_axios.default.create({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JipupClient
});
//# sourceMappingURL=index.js.map