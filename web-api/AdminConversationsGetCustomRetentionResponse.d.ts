export interface AdminConversationsGetCustomRetentionResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    is_policy_enabled?: boolean;
    duration_days?:     number;
}
