export interface ServiceProviderConfigsResponse {
    authenticationSchemes?: AuthenticationScheme[];
    patch?:                 ChangePassword;
    bulk?:                  Bulk;
    filter?:                Filter;
    changePassword?:        ChangePassword;
    sort?:                  ChangePassword;
    etag?:                  ChangePassword;
    xmlDataFormat?:         ChangePassword;
}

export interface AuthenticationScheme {
    type?:        string;
    name?:        string;
    description?: string;
    specUrl?:     string;
    primary?:     boolean;
}

export interface Bulk {
    supported?:      boolean;
    maxOperations?:  number;
    maxPayloadSize?: number;
}

export interface ChangePassword {
    supported?: boolean;
}

export interface Filter {
    supported?:  boolean;
    maxResults?: number;
}
