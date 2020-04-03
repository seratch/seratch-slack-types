export interface UsersResponse {
    schemas?:      string[];
    id?:           string;
    externalId?:   string;
    meta?:         Meta;
    userName?:     string;
    nickName?:     string;
    name?:         Name;
    displayName?:  string;
    profileUrl?:   string;
    title?:        string;
    timezone?:     string;
    active?:       boolean;
    emails?:       UsersResponseEmail[];
    photos?:       Photo[];
    groups?:       string[];
    totalResults?: number;
    itemsPerPage?: number;
    startIndex?:   number;
    Resources?:    Resource[];
}

export interface Resource {
    schemas?:                                     string[];
    id?:                                          string;
    externalId?:                                  string;
    meta?:                                        Meta;
    userName?:                                    string;
    nickName?:                                    string;
    name?:                                        Name;
    displayName?:                                 string;
    profileUrl?:                                  string;
    title?:                                       string;
    timezone?:                                    string;
    active?:                                      boolean;
    emails?:                                      PhoneNumberElement[];
    photos?:                                      Photo[];
    groups?:                                      Group[];
    addresses?:                                   Address[];
    phoneNumbers?:                                PhoneNumberElement[];
    roles?:                                       PhoneNumberElement[];
    "urn:scim:schemas:extension:enterprise:1.0"?: UrnScimSchemasExtensionEnterprise10;
}

export interface Address {
    streetAddress?: string;
    locality?:      string;
    region?:        string;
    postalCode?:    string;
    country?:       string;
    primary?:       boolean;
}

export interface PhoneNumberElement {
    value?:   string;
    type?:    string;
    primary?: boolean;
}

export interface Group {
    value?:   string;
    display?: string;
}

export interface Meta {
    created?:  string;
    location?: string;
}

export interface Name {
    givenName?:  string;
    familyName?: string;
}

export interface Photo {
    value?: string;
    type?:  string;
}

export interface UrnScimSchemasExtensionEnterprise10 {
    manager?: Manager;
}

export interface Manager {
}

export interface UsersResponseEmail {
    value?:   string;
    primary?: boolean;
}
