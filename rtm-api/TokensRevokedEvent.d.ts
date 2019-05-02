export interface TokensRevokedEvent {
    type?:   string;
    tokens?: Tokens;
}

export interface Tokens {
    oauth?: string[];
    bot?:   string[];
}
