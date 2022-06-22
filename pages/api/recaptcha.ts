import axios from "axios"
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  
	try {
		const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + process.env.CAPTCHA_SECRET_KEY + '&response=' + req.body.token;
		
        const response = await axios.get(verificationUrl);

		res.status(200).json(response.data);


    } catch (err) {
		res.status(200).json({ message: 'error - failed recaptcha' });
	}
}

