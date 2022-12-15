import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6399d82016b0fdad774b4eb6.mockapi.io/contacts',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/Phonebook',
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
