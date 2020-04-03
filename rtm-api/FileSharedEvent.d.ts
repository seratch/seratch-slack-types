export interface FileSharedEvent {
    type?:       string;
    file_id?:    string;
    file?:       File;
    channel_id?: string;
    user_id?:    string;
    event_ts?:   string;
}

export interface File {
    id?: string;
}
