export interface SlashCommandPayload {
    token?:           string;
    team_id?:         string;
    team_domain?:     string;
    enterprise_id?:   string;
    enterprise_name?: string;
    channel_id?:      string;
    channel_name?:    string;
    user_id?:         string;
    user_name?:       string;
    command?:         string;
    text?:            string;
    response_url?:    string;
    trigger_id?:      string;
}
