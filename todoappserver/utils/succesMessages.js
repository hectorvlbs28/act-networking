const signupSuccessMessage = (name, email) =>
  `¡Bienvenido, ${name}! Tu cuenta con ${email} ha sido creada con éxito. ¡Disfruta la experiencia!`;

const signInSuccesMessage = (name) => ` Inicio de sesión exitoso. ¡Bienvenido, ${name}!`;

const signoutSuccessMessage = 'Sesión cerrada correctamente. ¡Hasta pronto!';

const createTaskSuccessMessage = (title) => `Tarea: ${title}, creada con éxito.`;

module.exports = { signupSuccessMessage, signInSuccesMessage, signoutSuccessMessage, createTaskSuccessMessage };
