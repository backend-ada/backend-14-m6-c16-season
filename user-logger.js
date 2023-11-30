import { hashSeasonPassword } from './password-hasher.js';
import { getUserByName } from './user-model.js';

const login = (username, password) => {
	if (!username || !password) return { error: 'Missing data' };

	const userFound = getUserByName(username);
	if (!userFound) return { message: 'User not found' };

	const userCredentials = userFound.password.split(':');
	const storedSalt = userCredentials[0];
	const storedSeasonHash = userCredentials[1];

	const hashedPassword = hashSeasonPassword(password, storedSalt);

	if (storedSeasonHash === hashedPassword)
		return { message: 'User logged successfully!' };

	return { error: 'Wrong password' };
};

export default login;