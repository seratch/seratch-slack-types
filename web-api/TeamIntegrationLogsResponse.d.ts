export interface TeamIntegrationLogsResponse {
    ok?:       boolean;
    logs?:     Log[];
    paging?:   Paging;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Log {
    user_id?:              string;
    user_name?:            string;
    date?:                 string;
    change_type?:          string;
    service_id?:           string;
    service_type?:         string;
    scope?:                string;
    app_type?:             string;
    app_id?:               string;
    channel?:              string;
    rss_feed?:             boolean;
    rss_feed_change_type?: string;
    rss_feed_title?:       string;
    rss_feed_url?:         string;
    reason?:               string;
}

export interface Paging {
    count?: number;
    total?: number;
    page?:  number;
    pages?: number;
}
