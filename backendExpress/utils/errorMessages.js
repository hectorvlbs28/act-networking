const internalErrorMessage = 'Ha ocurrido un problema inesperado. Si el error persiste, contacta con soporte.';

const emailRegisteredMessage = (email) =>
  `El correo electrónico ${email} ya está registrado. Intenta con otro o inicia sesión.`;

const signupErrorMessage = 'Hubo un problema al registrar tu cuenta. Por favor, inténtalo nuevamente.';

const userDoesNotExistMessage = (email) =>
  `El correo ${email} no está asociado a ninguna cuenta. Puedes registrarte para crear una nueva.`;

const passwordErrorMessage = 'La contraseña ingresada es incorrecta. Por favor, inténtalo de nuevo.';

const sessionsLimitMessage =
  'Se ha alcanzado el límite de sesiones activas. Cierra sesión en otro dispositivo e inténtalo de nuevo.';

const sessionNotFoundMessage = 'No se encontró una sesión activa. Por favor, inicia sesión nuevamente.';

const signoutErrorMessage = 'Hubo un problema al cerrar sesión. Por favor, inténtalo nuevamente.';

const createTaskErrorMessage = 'Hubo un problema al crear la tarea. Por favor, inténtalo nuevamente.';

module.exports = {
  internalErrorMessage,
  emailRegisteredMessage,
  signupErrorMessage,
  userDoesNotExistMessage,
  passwordErrorMessage,
  sessionsLimitMessage,
  sessionNotFoundMessage,
  signoutErrorMessage,
  createTaskErrorMessage,
};
