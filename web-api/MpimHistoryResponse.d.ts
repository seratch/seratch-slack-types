export interface MpimHistoryResponse {
    ok?:                    boolean;
    messages?:              string[];
    has_more?:              boolean;
    channel_actions_count?: number;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}
