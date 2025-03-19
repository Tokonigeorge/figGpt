export function login() {
  console.log('Logging in with OpenAI...');
  // Placeholder for OAuth implementation
  localStorage.setItem('auth', 'true'); // Simulating login
}

export function logout() {
  console.log('Logging out...');
  localStorage.removeItem('auth');
}
