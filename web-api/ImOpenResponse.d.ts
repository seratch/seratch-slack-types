export interface ImOpenResponse {
    ok?:           boolean;
    no_op?:        boolean;
    already_open?: boolean;
    channel?:      Channel;
    error?:        string;
    needed?:       string;
    provided?:     string;
}

export interface Channel {
    id?: string;
}
