export interface ErrorEvent {
    type?:  string;
    error?: Error;
}

export interface Error {
    code?: number;
    msg?:  string;
}
