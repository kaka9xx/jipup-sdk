JIPUP SDK

TypeScript/JavaScript client SDK for JIPUP API
.
Giúp bạn dễ dàng tích hợp với hệ thống JIPUP (Users, Tasks, Items, Inventory, Claim on-chain).

📦 Cài đặt
npm install jipup-sdk


hoặc với yarn:

yarn add jipup-sdk

🚀 Khởi tạo client
import { JipupClient } from "jipup-sdk";

const api = new JipupClient(); 
// mặc định baseURL = "https://abc-api.onrender.com"

// Nếu muốn trỏ sang API khác (dev/staging):
// const api = new JipupClient("http://localhost:3000");

🔑 Các API chính
User
// Đăng ký / upsert user
const user = await api.registerUser("123456", "alice");

// Lấy user bằng Prisma id
const u1 = await api.getUserById(user.id);

// Lấy user bằng Telegram id
const u2 = await api.getUserByTelegram("123456");

Tasks
// Lấy danh sách task
const tasks = await api.listTasks();

// Hoàn thành task
const result = await api.completeTask(user.id, tasks[0].id);

Items & Inventory
// Mua item
const buy = await api.buyItem(user.id, "itm_box", 1);

// Xem inventory
const inv = await api.getInventory(user.id);

Claim (on-chain)
// Gửi claim lên blockchain
const claim = await api.createClaim(user.id, 50);

// Xem danh sách claim của user
const claims = await api.getClaims(user.id);

📑 Types hỗ trợ

SDK export sẵn các type để dùng trong code:

import type { User, Task, InventoryItem, Claim } from "jipup-sdk";

🧪 Test
npm test

🌱 Roadmap

 Retry logic & timeout cho axios

 Error handling chuẩn hóa

 Documentation chi tiết hơn (Swagger/Postman)

 React hooks wrapper (useTasks, useInventory)

📄 License

MIT © 2025 JIPUP
