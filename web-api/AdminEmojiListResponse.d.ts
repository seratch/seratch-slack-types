export interface AdminEmojiListResponse {
    ok?:                boolean;
    emoji?:             { [key: string]: Emoji };
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Emoji {
    url?:          string;
    date_created?: number;
    uploaded_by?:  string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
