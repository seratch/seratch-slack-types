export interface MemberJoinedChannelEvent {
    type?:         string;
    user?:         string;
    channel?:      string;
    channel_type?: string;
    team?:         string;
    inviter?:      string;
}
