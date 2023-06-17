"use client"
import React, { useEffect, useState } from 'react';
import { Email } from './email.component';

export const EmailsList = ({ emails }) => {
  useEffect(() => {
    console.log("data");
    console.log(emails);
  }, [emails]);

  return (
    <>
      <h1>Emails list</h1>
      <ul>
   {/*      {data.map((email) => (
          <li key={email.id}>
            {email.sent_time} {email.owner_name} {email.owner_email}
          </li>
        ))} */}
      </ul>
    </>
  );
};
