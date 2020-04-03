export interface FileCreatedEvent {
    type?:     string;
    file_id?:  string;
    file?:     File;
    user_id?:  string;
    event_ts?: string;
}

export interface File {
    id?: string;
}
