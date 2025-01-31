const signupSuccessMessage = (name, email) =>
  `¡Bienvenido, ${name}! Tu cuenta con ${email} ha sido creada con éxito. ¡Disfruta la experiencia!`;

const signInSuccesMessage = (name) => ` Inicio de sesión exitoso. ¡Bienvenido, ${name}!`;

const signoutSuccessMessage = 'Sesión cerrada correctamente. ¡Hasta pronto!';

module.exports = { signupSuccessMessage, signInSuccesMessage, signoutSuccessMessage };
