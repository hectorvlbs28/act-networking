const internalErrorMessage = 'Ha ocurrido un problema inesperado. Si el error persiste, contacta con soporte.';

const emailRegisteredMessage = (email) =>
  `El correo electrónico ${email} ya está registrado. Intenta con otro o inicia sesión.`;

const signupErrorMessage = 'Hubo un problema al registrar tu cuenta. Por favor, inténtalo nuevamente.';

module.exports = {
  internalErrorMessage,
  emailRegisteredMessage,
  signupErrorMessage,
};
