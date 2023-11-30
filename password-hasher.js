import crypto from 'node:crypto';
import PEPPER from './pepper.js'

const getSalt = () => crypto.randomUUID();

const hashSeasonPassword = (password, salt) => {
	return crypto
		.createHash('sha256')
		.update(salt + PEPPER + password)
		.digest('hex');
};

export { getSalt, hashSeasonPassword };
