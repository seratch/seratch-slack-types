export interface PresenceChangeEvent {
    type?:     string;
    user?:     string;
    users?:    string[];
    presence?: string;
}
