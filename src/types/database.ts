export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      contact_leads: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          email: string;
          message: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          name: string;
          email: string;
          message: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          name?: string;
          email?: string;
          message?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
