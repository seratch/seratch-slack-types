export interface AdminConversationsGetTeamsResponse {
    ok?:       boolean;
    team_ids?: string[];
    error?:    string;
    needed?:   string;
    provided?: string;
}
