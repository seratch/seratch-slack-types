export interface ActionsResponse {
    actions?:  { [key: string]: string[] };
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}
