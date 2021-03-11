export interface AppHomeOpenedPayload {
    token?:                 string;
    enterprise_id?:         string;
    team_id?:               string;
    api_app_id?:            string;
    type?:                  string;
    authed_users?:          string[];
    authed_teams?:          string[];
    is_ext_shared_channel?: boolean;
    event_id?:              string;
    event_time?:            number;
    event_context?:         string;
    event?:                 Event;
}

export interface Event {
    type?:     string;
    user?:     string;
    channel?:  string;
    tab?:      string;
    event_ts?: string;
    view?:     View;
}

export interface View {
    id?:                    string;
    team_id?:               string;
    type?:                  string;
    title?:                 Close;
    submit?:                Close;
    close?:                 Close;
    private_metadata?:      string;
    callback_id?:           string;
    external_id?:           string;
    state?:                 State;
    hash?:                  string;
    clear_on_close?:        boolean;
    notify_on_close?:       boolean;
    submit_disabled?:       boolean;
    root_view_id?:          string;
    previous_view_id?:      string;
    app_id?:                string;
    app_installed_team_id?: string;
    bot_id?:                string;
}

export interface Close {
    type?:  string;
    text?:  string;
    emoji?: boolean;
}

export interface State {
}
