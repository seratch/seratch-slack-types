export interface OauthV2AccessResponse {
    ok?:               boolean;
    warning?:          string;
    error?:            string;
    needed?:           string;
    provided?:         string;
    app_id?:           string;
    authed_user?:      AuthedUser;
    scope?:            string;
    token_type?:       string;
    access_token?:     string;
    bot_user_id?:      string;
    team?:             Enterprise;
    enterprise?:       Enterprise;
    incoming_webhook?: IncomingWebhook;
}

export interface AuthedUser {
    id?:           string;
    scope?:        string;
    token_type?:   string;
    access_token?: string;
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
