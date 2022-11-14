export interface EmojiListResponse {
    ok?:       boolean;
    emoji?:    { [key: string]: string };
    cache_ts?: string;
    error?:    string;
    needed?:   string;
    provided?: string;
}
