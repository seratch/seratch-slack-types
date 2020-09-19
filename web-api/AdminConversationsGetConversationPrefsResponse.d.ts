export interface AdminConversationsGetConversationPrefsResponse {
    ok?:       boolean;
    prefs?:    Prefs;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Prefs {
    who_can_post?: CanThread;
    can_thread?:   CanThread;
}

export interface CanThread {
    type?: string[];
    user?: string[];
}
