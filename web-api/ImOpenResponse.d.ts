export interface ImOpenResponse {
    ok?:           boolean;
    channel?:      Channel;
    no_op?:        boolean;
    already_open?: boolean;
    error?:        string;
    needed?:       string;
    provided?:     string;
}

export interface Channel {
    id?: string;
}
