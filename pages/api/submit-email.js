export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    console.log('Received email for reward:', email);
    return res.status(200).json({ ok: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
