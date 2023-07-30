export const required = (value) => {
  return value ? undefined : "User not enter text in the field";
};

export const maxLengthCreator = (maxLength) => (value) => {
  return value && value.length > maxLength
    ? `Must be ${maxLength} symbols or less`
    : undefined;
};

