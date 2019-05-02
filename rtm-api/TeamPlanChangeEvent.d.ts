export interface TeamPlanChangeEvent {
    type?:          string;
    plan?:          string;
    can_add_ura?:   boolean;
    paid_features?: string[];
}
