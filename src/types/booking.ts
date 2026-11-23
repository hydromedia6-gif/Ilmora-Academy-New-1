export type AudiencePreset =
  | ''
  | 'My Child'
  | 'Myself (Adult)'
  | 'Myself (New Muslim / Revert)'
  | 'Multiple Family Members';

export interface BookingContextValue {
  openBooking: (preset?: AudiencePreset) => void;
}
