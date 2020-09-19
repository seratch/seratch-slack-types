export interface ApiTestResponse {
    ok?:       boolean;
    error?:    string;
    args?:     Args;
    needed?:   string;
    provided?: string;
}

export interface Args {
    error?: string;
    foo?:   string;
}
