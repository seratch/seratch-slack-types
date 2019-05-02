export interface EmojiChangedEvent {
    type?:     string;
    subtype?:  string;
    names?:    string[];
    name?:     string;
    value?:    string;
    event_ts?: string;
}
