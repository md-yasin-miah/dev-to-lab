import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createClient } from "@/core/supabase/client";
import { Database } from "@/types/database";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    submitContact: builder.mutation<
      null,
      Database["public"]["Tables"]["contact_leads"]["Insert"]
    >({
      queryFn: async (formData) => {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("contact_leads")
          // properties to match the schema.
          .insert(formData as any)
          .select();

        if (error) {
          return { error: { status: error.code, data: error.message } };
        }
        return { data: null };
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useSubmitContactMutation } = apiSlice;
