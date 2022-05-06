export abstract class ApiClient {
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    protected baseUrl: string;

    protected async fetch<T>(url: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${url}`, options);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
    }
}
