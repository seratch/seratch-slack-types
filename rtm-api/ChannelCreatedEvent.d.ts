export interface ChannelCreatedEvent {
    type?:     string;
    channel?:  Channel;
    event_ts?: string;
}

export interface Channel {
    id?:              string;
    name?:            string;
    name_normalized?: string;
    is_channel?:      boolean;
    is_shared?:       boolean;
    is_org_shared?:   boolean;
    created?:         number;
    creator?:         string;
    context_team_id?: string;
}
