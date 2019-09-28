export interface EmojiListResponse {
    ok?:       boolean;
    emoji?:    Emoji;
    cache_ts?: string;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Emoji {
    emoji?:  string;
    emoji_?: string;
}
