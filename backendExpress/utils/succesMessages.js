const signupSuccessMessage = (name) =>
  `¡Bienvenido, ${name}! Tu cuenta ha sido creada con éxito. ¡Disfruta la experiencia!`;

const signInSuccesMessage = (userRealName) => ` Inicio de sesión exitoso. ¡Bienvenido, ${userRealName}!`;

const signoutSuccessMessage = 'Sesión cerrada correctamente. ¡Hasta pronto!';

const createTaskSuccessMessage = (title) => `Tarea: ${title}, creada con éxito.`;

module.exports = { signupSuccessMessage, signInSuccesMessage, signoutSuccessMessage, createTaskSuccessMessage };
