import { redirect } from '@remix-run/node';

export function loader({ params }: { params: { '*': string } }) {
  if (params['*'] === 'des') {
    return redirect('/dashboard');
  }

  throw new Response('Not found', { status: 404 });
}