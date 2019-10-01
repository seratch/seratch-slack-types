export interface ViewSubmissionPayload {
    type?:       string;
    team?:       Team;
    user?:       User;
    api_app_id?: string;
    token?:      string;
    trigger_id?: string;
    view?:       View;
    is_cleared?: boolean;
}

export interface Team {
    id?:              string;
    domain?:          string;
    enterprise_id?:   string;
    enterprise_name?: string;
}

export interface User {
    id?:       string;
    username?: string;
    name?:     string;
    team_id?:  string;
}

export interface View {
    id?:               string;
    team_id?:          string;
    type?:             string;
    title?:            Close;
    submit?:           Close;
    close?:            Close;
    private_metadata?: string;
    callback_id?:      string;
    external_id?:      string;
    state?:            State;
    hash?:             string;
    clear_on_close?:   boolean;
    notify_on_close?:  boolean;
    root_view_id?:     string;
    previous_view_id?: string;
    app_id?:           string;
    bot_id?:           string;
}

export interface Close {
    type?:  string;
    text?:  string;
    emoji?: boolean;
}

export interface State {
}
