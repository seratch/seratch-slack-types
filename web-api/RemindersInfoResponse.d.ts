export interface RemindersInfoResponse {
    ok?:       boolean;
    reminder?: Reminder;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Reminder {
    id?:          string;
    creator?:     string;
    user?:        string;
    text?:        string;
    recurring?:   boolean;
    time?:        number;
    complete_ts?: number;
}
