
// I need to use the previous version of next. .3
/* export { default } from 'next-auth/middleware';
// authorize and send to mails page
export const config = {
    matcher: ["/mails"]
} */

export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/profile"]
}