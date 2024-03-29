export interface OauthV2ExchangeResponse {
    ok?:                    boolean;
    warning?:               string;
    error?:                 string;
    needed?:                string;
    provided?:              string;
    app_id?:                string;
    authed_user?:           AuthedUser;
    scope?:                 string;
    token_type?:            string;
    access_token?:          string;
    refresh_token?:         string;
    expires_in?:            number;
    bot_user_id?:           string;
    team?:                  Enterprise;
    enterprise?:            Enterprise;
    is_enterprise_install?: boolean;
    incoming_webhook?:      IncomingWebhook;
    response_metadata?:     ResponseMetadata;
}

export interface AuthedUser {
    id?:            string;
    scope?:         string;
    token_type?:    string;
    access_token?:  string;
    refresh_token?: string;
    expires_in?:    number;
}

export interface Enterprise {
    id?:   string;
    name?: string;
}

export interface IncomingWebhook {
    url?:               string;
    channel?:           string;
    channel_id?:        string;
    configuration_url?: string;
}

export interface ResponseMetadata {
    messages?: string[];
}
