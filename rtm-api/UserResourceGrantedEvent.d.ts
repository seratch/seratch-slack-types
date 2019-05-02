export interface UserResourceGrantedEvent {
    type?:       string;
    user?:       string;
    scopes?:     string[];
    trigger_id?: string;
}
