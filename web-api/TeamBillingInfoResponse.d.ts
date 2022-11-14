export interface TeamBillingInfoResponse {
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
    plan?:     string;
}
