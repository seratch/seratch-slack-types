export interface AdminTeamsSettingsSetDefaultChannelsResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
}