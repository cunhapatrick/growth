import { setLocalStorage, getLocalStorage } from 'utils/localStorage';

export const login = (user) => {
	// const users = getLocalStorage('users');
	// const checkuser = users.find((u) => u.name === user.name);
	// if (!checkuser) console.error('nome errado');
	// else if (checkuser.password !== user.password) console.error('senha errada');
	// else {
	setLocalStorage('user', user);
	window.location.reload();
	// }
};

export const signup = (user) => {
	const users = getLocalStorage('users') || [];
	setLocalStorage('users', [...users, user]);
	login(user);
};

export const logout = () => {
	localStorage.removeItem('user');
	window.location.reload();
};

export const isLogged = () => !!getLocalStorage('user');
