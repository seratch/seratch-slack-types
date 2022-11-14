export interface FilesGetUploadURLExternalResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    upload_url?:        string;
    file_id?:           string;
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    messages?: string[];
}
