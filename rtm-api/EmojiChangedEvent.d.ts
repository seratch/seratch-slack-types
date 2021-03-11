export interface EmojiChangedEvent {
    type?:     string;
    subtype?:  string;
    names?:    string[];
    name?:     string;
    value?:    string;
    old_name?: string;
    new_name?: string;
    event_ts?: string;
}
