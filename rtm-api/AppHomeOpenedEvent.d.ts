export interface AppHomeOpenedEvent {
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
    blocks?:                any[];
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
