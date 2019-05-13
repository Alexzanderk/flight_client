export const isValid = (searchOptions, name) => type => {
  let isValid;
  const { adult, child, baby } = searchOptions;
  const sum = adult + child + baby;

  switch (name) {
    case 'adult':
      if (type === 'dec' && searchOptions[name] > 1) {
        isValid = false;
        break;
      }

      if (
        type === 'inc' &&
        searchOptions[name] < 9 &&
        type === 'inc' &&
        sum < 9
      ) {
        isValid = false;
        break;
      }
      isValid = true;
      break;

    case 'baby':
      if (type === 'dec' && searchOptions[name] > 0) {
        isValid = false;
        break;
      }

      if (
        type === 'inc' &&
        (searchOptions[name] < 9 && type === 'inc' && sum < 9 && adult > baby)
      ) {
        isValid = false;
        break;
      }

      isValid = true;
      break;

    default:
      if (type === 'dec' && searchOptions[name] > 0) {
        isValid = false;
        break;
      }

      if (
        type === 'inc' &&
        (searchOptions[name] < 9 && type === 'inc' && sum < 9)
      ) {
        isValid = false;
        break;
      }

      isValid = true;
      break;
  }

  return isValid;
};
