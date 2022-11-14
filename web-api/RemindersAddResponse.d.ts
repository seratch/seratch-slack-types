export interface RemindersAddResponse {
    ok?:                boolean;
    reminder?:          Reminder;
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface Reminder {
    id?:          string;
    creator?:     string;
    text?:        string;
    user?:        string;
    recurring?:   boolean;
    time?:        number;
    complete_ts?: number;
}

export interface ResponseMetadata {
    messages?: string[];
}
