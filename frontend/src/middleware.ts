
// I need to use the previous version of next. .3
/* export { default } from 'next-auth/middleware';
// authorize and send to mails page
export const config = {
    matcher: ["/mails"]
} */
import { getSession } from 'next-auth/react';

//export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/profile"]
}

export default async function redirectAuthenticated(req: any, res: { redirect: (arg0: string) => void; }, next: () => void) {
    const session = await getSession({ req });
  
    if (session) {
      // User is authenticated, redirect to the desired page
      console.log('user is authenticated')
      res.redirect('/mails');
    } else {
      // User is not authenticated, continue to the next middleware or route handler
      next();
    }
  }