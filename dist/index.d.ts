interface JipupClientOptions {
    baseURL?: string;
}
declare class JipupClient {
    private api;
    constructor(options?: JipupClientOptions);
    health(): Promise<any>;
    registerUser(data: {
        telegramId: string;
        username?: string;
        referrerId?: string;
    }): Promise<any>;
    getUserById(id: string): Promise<any>;
    getUserByTelegram(telegramId: string): Promise<any>;
    listTasks(params?: {
        type?: string;
        includeInactive?: boolean;
    }): Promise<any>;
    completeTask(data: {
        userId: string;
        taskId: string;
        date?: string;
    }): Promise<any>;
    getTaskProgress(userId: string, limit?: number): Promise<any>;
    listItems(activeOnly?: boolean): Promise<any>;
    buyItem(data: {
        userId: string;
        itemId: string;
        amount: number;
    }): Promise<any>;
    getInventory(userId: string): Promise<any>;
    createClaim(data: {
        userId: string;
        amount: number;
    }): Promise<any>;
    getClaims(userId: string): Promise<any>;
}

export { JipupClient, JipupClientOptions };
