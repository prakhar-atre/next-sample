// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request) {
  try {
    // const body = await request.json();

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (response.ok) {
      return new Response(JSON.stringify({ message: 'Data Fetched' }), {
        status: 200
      });
    } else {
      return new Response(JSON.stringify({ message: 'Fetch Failed' }), {
        status: 500
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error', error: error.message }), {
      status: 500
    });
  }
}
