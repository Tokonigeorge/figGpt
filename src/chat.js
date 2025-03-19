export async function sendMessage(message) {
  console.log('Sending message:', message);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer YOUR_OPENAI_API_KEY`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    }),
  });

  const data = await response.json();
  console.log('AI Response:', data.choices[0].message.content);
  return data.choices[0].message.content;
}
