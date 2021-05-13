export const handleErrors = ({ alert, error, message, prevProps }) => {
  if (error !== prevProps.error) {
    if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
    if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
    if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
    if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
    if (error.msg.username) alert.error(error.msg.username.join());
  }

  if (message !== prevProps.message) {
    if (message.deleteLead) alert.success(message.deleteLead);
    if (message.addLead) alert.success(message.addLead);
    if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
  }
};