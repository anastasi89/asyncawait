import parser from '../parser';
import reader from '../reader';

test('check function reader', async () => {
  const data = await reader();
  expect(data.byteLength).toBe(180);
});

test('check function parser', async () => {
  const data = await reader();
  const result = await parser(data);
  expect(result).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
});
