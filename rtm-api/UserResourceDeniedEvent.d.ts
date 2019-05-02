export interface UserResourceDeniedEvent {
    type?:       string;
    user?:       string;
    scopes?:     string[];
    trigger_id?: string;
}
