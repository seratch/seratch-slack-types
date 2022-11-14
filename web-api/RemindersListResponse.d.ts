export interface RemindersListResponse {
    ok?:        boolean;
    reminders?: Reminder[];
    error?:     string;
    needed?:    string;
    provided?:  string;
}

export interface Reminder {
    id?:          string;
    creator?:     string;
    text?:        string;
    user?:        string;
    recurring?:   boolean;
    time?:        number;
    complete_ts?: number;
    channel?:     string;
    recurrence?:  Recurrence;
}

export interface Recurrence {
    frequency?: string;
    weekdays?:  string[];
}
