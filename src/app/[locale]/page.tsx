import Home from '@/src/views/home';

export async function generateMetadata() {
  return {
    title: 'Home',
    description: 'Next App'
  };
}

export default function Page() {
  return <Home />;
}
