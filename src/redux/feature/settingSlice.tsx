import baseApi from "../Api/baseApi";

 
const settingSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    getTermsAndConditions: builder.query({
      query: () => ({
        url: `/dicipline/terms-conditions/`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
    }),
 
 
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `/dicipline/privacy-policy/`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
    }),
 

 
    getTrustAndSafety: builder.query({
      query: () => ({
        url: `/dicipline/trust-safety/`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
    }),
 
  }),
});
 
export const {
  useGetTermsAndConditionsQuery,
  useGetPrivacyPolicyQuery,
  useGetTrustAndSafetyQuery,
} = settingSlice;
 