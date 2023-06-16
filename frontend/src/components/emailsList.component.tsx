"use client"
/* import { useState, useEffect } from 'react'; */
import React from 'react';
import { Email } from './email.component';
export const EmailsList = (initialData:any) => {
    /* const [emails, setEmails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/v1/emails')
            .then(response => response.json())
            .then(data => setEmails(data));
         
    });
 */
    return (
        <>
            <h1>Emails list</h1>
                <Email/>
        </>
    )
}
