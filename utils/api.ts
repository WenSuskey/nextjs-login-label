// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const TOKEN = 'TOKEN';

const validateResponse = async (res: Response) => {
  if (res.ok) return;
  const resJson = await res.json();
  throw new Error(JSON.stringify(resJson));
};

export async function request({
  pathname,
  body,
  method,
}: {
  pathname: string;
  body?: any;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}) {
  const res = await fetch(pathname, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
    method,
  });
  await validateResponse(res);
  const resJson = await res.json();
  return resJson;
}
